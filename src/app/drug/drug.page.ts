import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-drug',
  templateUrl: './drug.page.html',
  styleUrls: ['./drug.page.scss'],
})
export class DrugPage implements OnInit {
  isModalOpen = false;

  drugData = [
    {
      drugName: 'Cyclosporin(L)',
      drugQty: '5',
      drugCode: '123456',
      drugExpDate: '12/06/2566',
    },
    {
      drugName: 'Lamivudine',
      drugQty: '15',
      drugCode: '123456',
      drugExpDate: '12/06/2566',
    },
    {
      drugName: 'Clarithromycin s.',
      drugQty: '10',
      drugCode: '123456',
      drugExpDate: '12/06/2566',
    },
    {
      drugName: 'testagain',
      drugQty: '12',
      drugCode: '123456',
      drugExpDate: '12/06/2566',
    },
    {
      drugName: 'Bromacriptine',
      drugQty: '8',
      drugCode: '123456',
      drugExpDate: '12/06/2566',
    },
  ];

  constructor(public photoService: PhotoService) {}

  ngOnInit() {}

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
}
