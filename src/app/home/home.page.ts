import { Component, Query, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonContent, { static: true })
  content!: IonContent;

  public wardData = [
    {
      wardName: 'การพยาบาล',
      wardFav: 1,
    },
    {
      wardName: 'การเงิน',
      wardFav: 1,
    },
    {
      wardName: 'การพยาบาลจิตเวช',
      wardFav: 1,
    },
    {
      wardName: 'การพยาบาลชุมชน',
      wardFav: 1,
    },
    {
      wardName: 'การพยาบาลด้านการควบคุมและป้องกันการติดเชื้อ(IC)',
      wardFav: 0,
    },
    {
      wardName:
        'การพยาบาลด้านการควบคุมและป้องกันการติดเชื้อ(ศูนย์เครื่องมือแพทย์)',
      wardFav: 0,
    },
    {
      wardName: 'การพยาบาลด้านการควบคุมและป้องกันการติดเชื้อ(หน่วยจ่ายกลาง)',
      wardFav: 0,
    },
    {
      wardName:
        'การพยาบาลตรวจรักษาพิเศษ (งานเคมีบำบัดไม่รับผู้ป่วยค้างคืน Day Care)',
      wardFav: 0,
    },
    {
      wardName: 'การพยาบาลตรวจรักษาพิเศษ (ไตเทียม)',
      wardFav: 0,
    },
    {
      wardName:
        'การพยาบาลตรวจรักษาพิเศษ (งานเคมีบำบัดไม่รับผู้ป่วยค้างคืน Day Care)',
      wardFav: 0,
    },
    {
      wardName: 'การพยาบาลตรวจรักษาพิเศษ (ไตเทียม)',
      wardFav: 0,
    },
    {
      wardName: 'การพยาบาลตรวจรักษาพิเศษ (ห้องตรวจคลื่นหัวใจ EKG/EEG)',
      wardFav: 0,
    },
    {
      wardName: 'การพยาบาลตรวจรักษาพิเศษ (ห้องตรวจระบบทางเดินหายใจ Broncho)',
      wardFav: 0,
    },
    {
      wardName: 'การพยาบาลตรวจรักษาพิเศษ (ห้องตรวจสวนหัวใจ Cath Lab)',
      wardFav: 0,
    },
    {
      wardName: 'การพยาบาลตรวจรักษาพิเศษ (ห้องส่องกระเพาะอาหาร Gasstro)',
      wardFav: 0,
    },
    {
      wardName: 'การพยาบาลผู้คลอด (ห้องคลอด)',
      wardFav: 0,
    },
  ];

  public wardDataFav: Array<any> = [];

  public results = [...this.wardData];

  public type = '0';

  constructor() {}

  segmentChange(event: any) {
    console.log(this.wardData);

    this.wardDataFav = this.wardData.filter((val) => {
      return val.wardFav == parseInt('1');
    });
    console.log(this.wardDataFav);

    console.log('Segment changed : ', event);
  }

  handleChange(event: any) {
    const query = event.target.value.toLowerCase();

    this.results = this.wardData.filter((d) => {
      return d.wardName.toLowerCase().indexOf(query) > -1;
    });

    this.wardDataFav = this.wardData.filter((val) => {
      return (
        val.wardFav == parseInt('1') &&
        val.wardName.toLowerCase().indexOf(query) > -1
      );
    });
    console.log(this.wardDataFav);
  }

  goToTop() {
    this.content.scrollToTop();
  }
}
