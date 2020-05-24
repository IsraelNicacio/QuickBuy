import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Statement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let isAuthenticated = sessionStorage.getItem("usuario_autenticado");
    if (isAuthenticated == "1") {
      return true;
    }
    else {
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } })
      return false;
    }
  }

}
