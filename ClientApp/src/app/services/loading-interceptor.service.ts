import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingInterceptorService {
  public showProgress: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() { }
}
