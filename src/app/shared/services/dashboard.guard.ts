import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardGuard implements CanActivate {
  wardValueSelected: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    console.log('code : ', route.queryParams['data']);

    this.wardValueSelected = route.queryParams['data'];
    console.log('wardValueSelected : ' + this.wardValueSelected);

    if (this.authService.isWardSelected() && this.wardValueSelected != null) {
      return true;
    } else {
      this.router.navigate(['/ward']);
      alert('กรุณาเลือกวอร์ดก่อนนะ');
      return false;
    }
  }
}
