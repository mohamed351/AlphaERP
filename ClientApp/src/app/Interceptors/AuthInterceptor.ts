import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import {AuthService} from '../services/auth.service';
import { LoadingInterceptorService } from '../services/loading-interceptor.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService,
  private interceptor:LoadingInterceptorService) {

    }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.interceptor.showProgress.next(true);
       if(this.authService.IsAuthenticated()){
            let currentUser = this.authService.GetToken();
            if(currentUser.token){
                req =  req.clone({
                    setHeaders:{
                        Authorization:`Bearer  ${currentUser.token}`
                    }
                });
              return next.handle(req).pipe(
                finalize(() => {
                  this.interceptor.showProgress.next(false);
                })
                );
            }
            else
            {
              return next.handle(req).pipe(
                finalize(() => {
                  this.interceptor.showProgress.next(false);
                })
                );
            }
       }
       else
       {
         return next.handle(req).pipe(
           finalize(() => {
            this.interceptor.showProgress.next(false);
           })
           );
       }
    }
}
