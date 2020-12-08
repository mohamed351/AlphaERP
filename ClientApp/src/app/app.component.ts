import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:["./app.styles.css"]
})
export class AppComponent {
  title = 'POS Angular Application';
  homePanelOpenState = false;
  financePanelOpenState = false;
  adminPanelOpenState = false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  constructor(private breakpointObserver: BreakpointObserver, private translation:TranslateService, public auth:AuthService){
    this.translation.setDefaultLang("en");
    const language = localStorage.getItem("lang")|| "en";
    this.translation.use(language);
    document.documentElement.lang =language; 
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

  }
}
