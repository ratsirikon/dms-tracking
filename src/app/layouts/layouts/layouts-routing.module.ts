import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { WardComponent } from 'src/app/pages/ward/ward.component';
import { DashboardGuard } from 'src/app/shared/services/dashboard.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ward',
    pathMatch: 'full',
  },
  {
    path: 'ward',
    component: WardComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [DashboardGuard],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class LayoutRoutingModule {}
