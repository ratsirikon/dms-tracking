import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {
  orderData = [
    {
      orderNum: '203414',
    },
    {
      orderNum: '203419',
    },
    {
      orderNum: '203416',
    },
    {
      orderNum: '203435',
    },
    {
      orderNum: '203418',
    },
    {
      orderNum: '203410',
    },
    {
      orderNum: '203411',
    },
    {
      orderNum: '203470',
    },
  ];

  constructor(public photoService: PhotoService) {}

  ngOnInit() {}

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
}
