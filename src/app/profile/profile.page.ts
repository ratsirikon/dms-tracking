import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userInfo = [
    {
      userName: 'ลำดวน คำปัน',
      userPosition: 'เภสัชกร',
      userNum: '123456789',
      userLevel: 'admin',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
