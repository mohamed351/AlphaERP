import { TranslateModule } from '@ngx-translate/core';
import { AlphaDataTableModule } from './../components/alpha-data-table/alpha-data-table.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCustomerInvoiceComponent } from './create-customer-invoice/create-customer-invoice.component';
import { ListCustomerInvoiceComponent } from './list-customer-invoice/list-customer-invoice.component';
import { SuppliersRoutingModule } from './customer-invoice.router.module';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatSelectModule} from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule} from '@angular/material/dialog';
import { CustomerInvoiceDetailsComponent } from './customer-invoice-details/customer-invoice-details.component';
import { CustomerRefundCompoentComponent } from './customer-refund-compoent/customer-refund-compoent.component';
import { MeasurementPipePipe } from './pipes/measurement-pipe.pipe';
import { MeasurementTextPipe} from './pipes/measurement-text.pipe';
import { CustomFormsModule } from 'ng2-validation';
@NgModule({
  declarations: [CreateCustomerInvoiceComponent,
    ListCustomerInvoiceComponent,
    CustomerInvoiceDetailsComponent,
    CustomerRefundCompoentComponent,
    MeasurementPipePipe,
    MeasurementTextPipe],
  imports: [
    CommonModule,
    SuppliersRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    NgSelectModule,
    MatSelectModule,
    MatDatepickerModule,
    MatDialogModule,
    MatNativeDateModule,
    AlphaDataTableModule,
    TranslateModule,
    FormsModule,
    CustomFormsModule
  ]
})
export class CustomerInvoiceModule { }
