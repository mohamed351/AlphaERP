import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {AppRouter} from './app.router.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';

import { MatMenuModule } from '@angular/material/menu';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator'
import { ToastrModule } from 'ngx-toastr';
import {ReusableDailogBoxComponent} from './components/alpha-data-table/reusable-dailog-box/reusable-dailog-box.component'
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { MatFormField, MatFormFieldModule, MatInputModule } from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card'; 
import {MatSelectModule} from '@angular/material/select';
import { UnAuthGuardGuard } from './guards/unauth.guard';
import { ChartModule } from 'angular-highcharts';



export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,

   
 ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AppRouter,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    TranslateModule.forRoot({
       loader:{
         provide:TranslateLoader,
         useFactory:(createTranslateLoader),
         deps:[HttpClient]
       }
    }),
    MatCardModule,
    MatSelectModule,
    ChartModule,
   
  
    
  ],
  providers: [AuthGuard,UnAuthGuardGuard],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
