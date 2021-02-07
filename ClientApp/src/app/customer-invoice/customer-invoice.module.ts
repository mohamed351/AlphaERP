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
import { ReactiveFormsModule} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatSelectModule} from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [CreateCustomerInvoiceComponent, ListCustomerInvoiceComponent],
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
    TranslateModule
  ]
})
export class CustomerInvoiceModule { }
