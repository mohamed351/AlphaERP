import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Subject } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from './services/auth.service';
import { MeasurmentConvertService } from './services/measurment-convert.service';
import {Router, NavigationEnd,NavigationError, NavigationStart,NavigationCancel, RouterEvent } from '@angular/router';
import { LoadingInterceptorService } from './services/loading-interceptor.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:["./app.styles.css"]
})
export class AppComponent implements OnInit {
  title = 'POS Angular Application';
  homePanelOpenState = false;
  financePanelOpenState = false;
  adminPanelOpenState = false;
  showProgress: boolean = false;
  isLoading$:Observable<boolean> = this.loadingService.showProgress.asObservable();
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  constructor(private breakpointObserver: BreakpointObserver,
    private translation: TranslateService,
    public auth: AuthService,
    private measurement: MeasurmentConvertService,
    private Router: Router,
    public loadingService:LoadingInterceptorService) {


    this.translation.setDefaultLang("en");
    const language = localStorage.getItem("lang")|| "en";
    this.translation.use(language);
    document.documentElement.lang = language;
    Router.events.subscribe((router: RouterEvent) => {
      if (router instanceof NavigationStart) {
        this.showProgress = true;
      }
      if (router instanceof NavigationEnd ||
        router instanceof NavigationError ||
        router instanceof NavigationCancel) {
        this.showProgress = false
      }
    });
  }
  ngOnInit(): void {
    this.isLoading$.subscribe(isloading=> {
      this.showProgress = isloading;

    });
  }
  ToggleMenu(data,sideMenu) {

    // var language = localStorage.getItem("lang") || "en";
    // if (language == "ar" && !data) {
    //   sideMenu.elementRef.nativeElement.classList.remove("mat-sidenav-content");
    // }
    // else {
    //   sideMenu.elementRef.nativeElement.classList.add("mat-sidenav-content")
    // }
  }

  SetLanguageToArabic(){
    localStorage.setItem("lang","ar");
    window.location.reload();
  }
  SetLanguageToEnglish(){
    localStorage.setItem("lang","en");
    window.location.reload();
  }
 public GetLanguage(){
    return localStorage.getItem("lang") || "en";
  }

  LogOut(){
    localStorage.clear();
    this.Router.navigate(['/login']);
  }
}
