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

import { MatCardModule, MatSelectModule } from '@angular/material';
import {AcceptIntOnlyDirective} from './Directives/accept-int-only.directive';
import { MesurementCalculatorComponent } from './mesurement-calculator/mesurement-calculator.component';
import {MeasurementDialogComponent } from '../measurement-dialog/measurement-dialog.component';



export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/i18n', '.json');
}
@NgModule({
  declarations: [ReusableDataTableComponent, ReusableDailogBoxComponent, AcceptIntOnlyDirective, MesurementCalculatorComponent, MeasurementDialogComponent] ,
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
    TranslateModule,
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule


  ],
  exports:[
    ReusableDataTableComponent,
    MesurementCalculatorComponent,
    MeasurementDialogComponent
  ],
  providers:[

  ],
  entryComponents:[ReusableDailogBoxComponent, MeasurementDialogComponent]

})
export class AlphaDataTableModule { }
