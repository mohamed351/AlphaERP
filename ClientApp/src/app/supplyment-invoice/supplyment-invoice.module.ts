import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSupplymentListComponent } from './list-supplyment-list/list-supplyment-list.component';
import { AddSupplymentInvoiceComponent } from './add-supplyment-invoice/add-supplyment-invoice.component';
import {ProductRoutingModule} from './supplyment-Invoice.router.module';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';

import {MatNativeDateModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { NgSelectModule } from '@ng-select/ng-select';
import {ReactiveFormsModule} from '@angular/forms';
import { MeasurementPipePipe } from './pipes/measurement-pipe.pipe';
import { MeasurementTextPipe } from './pipes/measurement-text.pipe';
import { AlphaDataTableModule } from '../components/alpha-data-table/alpha-data-table.module';
import { MatDialogModule} from '@angular/material/dialog';
@NgModule({
  declarations: [ListSupplymentListComponent, AddSupplymentInvoiceComponent, MeasurementPipePipe, MeasurementTextPipe],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    NgSelectModule,
    ReactiveFormsModule,
    AlphaDataTableModule,
    MatDialogModule
  ]
})
export class SupplymentInvoiceModule { }
