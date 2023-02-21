import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsComponent } from './layouts/layouts/layouts.component';

import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalDetailComponent } from './pages/modal-detail/modal-detail.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './shared/services/filter.pipe';
import { PopupComponent } from './pages/popup/popup.component';
import { WardComponent } from './pages/ward/ward.component';
import { DashboardGuard } from './shared/services/dashboard.guard';

const config: SocketIoConfig = { url: environment.socketAPI, options: {} };

@NgModule({
  declarations: [
    AppComponent,
    LayoutsComponent,
    DashboardComponent,
    ModalDetailComponent,
    FilterPipe,
    PopupComponent,
    WardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    NgbModalModule,
    SocketIoModule.forRoot(config),
  ],
  providers: [DashboardGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
