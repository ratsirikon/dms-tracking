import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { io } from 'socket.io-client';
import { DashboardService } from 'src/app/shared/services/dashboard.service';
import { ImageService } from 'src/app/shared/services/image.service';
import { Detail } from '../../shared/interfaces/detail';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-modal-detail',
  templateUrl: './modal-detail.component.html',
  styleUrls: ['./modal-detail.component.scss'],
})
export class ModalDetailComponent implements OnInit {
  socketAPI: any;
  detailData: Detail[] = [{} as Detail];

  @Input() hn: string = '';
  @Input() pName: string = '';
  @Input() orderNum: string = '';

  @Input() icode: string = '';
  @Input() genericname: string = '';
  @Input() tradename: string = '';
  @Input() units: string = '';
  @Input() count: string = '';

  @Input() order_state: number = 0;

  iconList: Array<any> = [
    'bi bi-box-arrow-in-right',
    'bi bi-building-add',
    'bi bi-card-list',
    'bi bi-clipboard-check',
    'bi bi-cup-hot-fill',
    'bi bi-file-earmark-arrow-up-fill',
    'bi bi-file-person',
    'bi bi-file-text-fill',
    'bi bi-cup-straw',
    'bi bi-gift-fill',
    'bi bi-rocket-fill',
    'bi bi-taxi-front-fill',
    'bi bi-trophy-fill',
  ];

  constructor(
    public activeModal: NgbActiveModal,
    private modalService: NgbModal,
    private dashboardService: DashboardService,
    private imageSrv: ImageService
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.detailData = this.dashboardService.getDashboardData();
      console.log(this.detailData);
    }, 2000);
  }

  showImage(image: any) {
    const url =
      'data:image/jpg;base64,' + this.imageSrv._arrayBufferToBase64(image);
    return this.imageSrv.sanitize(url);
  }

  openPopup() {
    const modalRef = this.modalService.open(PopupComponent, {
      size: 'xl',
      centered: true,
    });
    modalRef.componentInstance.name = 'World';
  }
}
