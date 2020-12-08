import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UnAuthGuardGuard implements CanActivate {
  /**
   *
   */
  constructor(private authService:AuthService, private router:Router) {
    
    
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        console.log("router");
    if(!this.authService.IsAuthenticated()){
      return true;
    }
    else
    {
      this.router.navigate(["/"]);
    }
  }
  
}