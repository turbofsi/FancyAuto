import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductGuardService implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    let id = +route.url[1].path;
    if (isNaN(id) || id < 1) {
      alert("Invalid ProductId");
      this._router.navigate(['/products']);
      return false;
    }
    return true;
  }

  constructor(private _router: Router ) { }

}
