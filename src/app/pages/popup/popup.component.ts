import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Detail } from 'src/app/shared/interfaces/detail';
import { DashboardService } from 'src/app/shared/services/dashboard.service';
import { ImageService } from 'src/app/shared/services/image.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {
  socketAPI: any;
  detailData: Detail[] = [{} as Detail];

  @Input() hn: string = '';
  @Input() pName: string = '';
  @Input() orderNum: string = '';

  imgSrc: string =
    'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80';

  constructor(
    public activeModal: NgbActiveModal,
    private modalService: NgbModal,
    private dashboardService: DashboardService,
    private imageSrv: ImageService
  ) {}
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // setInterval(async () => {}, 1000);

    // this.dashboardService.reqDashboardData(61065370, 203411);

    setTimeout(() => {
      this.detailData = this.dashboardService.getDashboardData();
      console.log(this.detailData);
    }, 2000);

    // console.log('hello555' + this.detailData);
  }

  showImage(image: any) {
    const url =
      'data:image/jpg;base64,' + this.imageSrv._arrayBufferToBase64(image);
    return this.imageSrv.sanitize(url);
  }
}
