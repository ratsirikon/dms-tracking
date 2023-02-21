import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ward',
  templateUrl: './ward.component.html',
  styleUrls: ['./ward.component.scss'],
})
export class WardComponent implements OnInit {
  wardArray = new Array(70);

  wardValue: string = '';

  message: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToDashboard() {
    if (this.wardValue == '') {
      alert('หมายเลขวอร์ดไม่ถูกต้อง กรุณาเลือกวอร์ดใหม่อีกครั้ง');
    } else {
      this.router.navigate(['/dashboard'], {
        queryParams: { data: this.wardValue },
      });
    }
  }
}
