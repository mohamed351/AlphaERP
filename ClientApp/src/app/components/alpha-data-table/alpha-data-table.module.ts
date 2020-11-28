import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {ReusableDataTableComponent} from './reusable-data-table/reusable-data-table.component';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {matDialogAnimations, MatDialogModule} from '@angular/material/dialog';
import {ReusableDailogBoxComponent} from './reusable-dailog-box/reusable-dailog-box.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/i18n', '.json');
}
@NgModule({
  declarations: [ReusableDataTableComponent, ReusableDailogBoxComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    RouterModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatDialogModule,
    HttpClientModule,
    TranslateModule
    
  ],
  exports:[
    ReusableDataTableComponent,
   
  ],
  providers:[
    
  ],
  entryComponents:[ReusableDailogBoxComponent]

})
export class AlphaDataTableModule { }
