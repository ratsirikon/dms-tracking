import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/shared/services/dashboard.service';
import Swal from 'sweetalert2';
import {
  NgbDateStruct,
  NgbModal,
  NgbCalendar,
  NgbDatepickerModule,
} from '@ng-bootstrap/ng-bootstrap';
import { ModalDetailComponent } from '../modal-detail/modal-detail.component';
import { Dashboard } from 'src/app/shared/interfaces/dashboard';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, AfterViewInit {
  // ดึงข้อมูลมาจาก API
  socketAPI: any;

  // ตัวแปรที่เก็บข้อมูลทั้งหมดที่ดึงมาจาก API
  dashboardData: Dashboard[] = [{} as Dashboard];

  // ตัวแปรที่ใช้เก็บข้อมูลที่ผ่านการกรองแล้ว
  _dashboardData: Array<any> = [];

  // ตัวแปรที่ใช้นับจำนวน order_state
  orderStateCount: Array<number> = [0, 0, 0, 0, 0, 0];

  // สถานะการค้นหาในช่อง input
  searchStatus: boolean = false;

  // คำหรือข้อความที่ใช้ค้นหา
  searchText: string = '';

  // สถานะการคลิกปุ่มค้นหา
  orderStateSelect: number = 0;

  // ตัวแปรเก็บข้อมูลแยกโดย order_state
  filterByStateData: Array<any> = [];

  // ตัวกำหนดค่าเริ่มต้นใน Datepicker
  date = new Date().toISOString().slice(0, 10);

  // ตัวกำหนด input:date ของวันปัจจุบัน ใช้กันไม่ให้เลือกวันที่อนาคตที่ยังมาไม่ถึง
  today = new Date();

  wardArray = new Array(70);

  wardValue: string = '';

  constructor(
    private dashboardService: DashboardService,
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private shared: AuthService
  ) {
    dashboardService.connectSocket();

    Swal.fire({
      title: 'โปรดรอสักครู่',
      html: 'กำลังโหลดข้อมูล',
      timer: 3000,
      timerProgressBar: true,
      allowOutsideClick: false,
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      console.log(params);
      this.wardValue = params.data;
    });
  }

  ngAfterViewInit(): void {
    let timeToWait = 1;

    setInterval(async () => {
      this.dashboardService.reqDashboardStatus(this.date);
      this.dashboardData = await this.dashboardService.getDashboardStatus();
      // this._dashboardData = await this.dashboardService.getDashboardStatus();
      // this._dashboardData = this.dashboardData;
      console.log(this.date);
      console.log(this.dashboardData);

      this.orderStateCount[0] = this.dashboardData.filter((val) => {
        return val.order_state == '0';
      }).length;

      this.orderStateCount[1] = this.dashboardData.filter((val) => {
        return val.order_state == '2';
      }).length;

      this.orderStateCount[2] = this.dashboardData.filter((val) => {
        return val.order_state == '5';
      }).length;

      this.orderStateCount[3] = this.dashboardData.filter((val) => {
        return val.order_state == '6';
      }).length;

      this.orderStateCount[4] = this.dashboardData.filter((val) => {
        return val.order_state == '7';
      }).length;

      this.orderStateCount[5] = this.dashboardData.filter((val) => {
        return val.order_state == '8';
      }).length;
    }, 1000 * timeToWait);
  }

  openModal(hn: any, order_number: any) {
    this.dashboardService.reqDashboardData(hn, order_number);
    this.modalService.open(ModalDetailComponent, {
      centered: true,
      size: 'lg',
    });
  }

  searchByState(selectedState: number) {
    this.searchStatus = true;

    this.orderStateSelect = selectedState;
    this._dashboardData = this.dashboardData.filter((val) => {
      return parseInt(val.order_state) == this.orderStateSelect;
    });

    console.log('click state = ' + this.orderStateSelect);
    console.log(this._dashboardData);
  }

  searchByText() {
    this.searchStatus = true;

    if (this.searchText) {
      this._dashboardData = this.dashboardData.filter((val) => {
        return val.patient_name.includes(this.searchText);
      });

      if (this._dashboardData.length == 0) {
        this._dashboardData = this.dashboardData.filter((val) => {
          return val.hn.includes(this.searchText);
        });
      }
    } else if (this.searchText == '') {
      // this._dashboardData = this.dashboardData;
      this.searchStatus = false;
    }

    console.log(this.searchText + ' : ');
    console.log(this.dashboardData);
  }

  clearSearch() {
    this.searchText = '';
    // this.dashboardData = this._dashboardData;
    // this._dashboardData = this.dashboardData;
    this.searchStatus = false;
  }
}
