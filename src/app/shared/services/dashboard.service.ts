import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  dashboardData: any;
  dashboardStatus: any;

  constructor(private socket: Socket) {}

  connectSocket() {
    return this.socket.on('connect', () => {
      console.log('dashboard is connected');
    });
  }

  async reqDashboardStatus(order_date: any) {
    this.socket.emit('req_order_dashboard_status', order_date);
    this.socket.on('order_dashboard_status', (data: any) => {
      this.dashboardStatus = data.data;
    });
  }

  async reqDashboardData(hn: any, order_number: any) {
    this.socket.emit('req_icode_status', hn, order_number);
    this.socket.on('icode_status', (data: any) => {
      this.dashboardData = data.data;
      console.log(this.dashboardData);
    });
  }

  getDashboardStatus() {
    return this.dashboardStatus;
  }

  getDashboardData() {
    return this.dashboardData;
  }
}
