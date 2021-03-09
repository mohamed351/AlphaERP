import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {ReactiveFormsModule , FormsModule} from '@angular/forms';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material';
import {  TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AlphaDataTableModule } from '../components/alpha-data-table/alpha-data-table.module';
import {CustomersRoutingModule} from './customers-routing.module';
import { ListCustomersComponent } from './list-customers/list-customers.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { DetailsCustomerComponent } from './details-customer/details-customer.component';
import { CustomersService } from './customers.service';



export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [ListCustomersComponent,
    CreateCustomerComponent,
    EditCustomerComponent, DetailsCustomerComponent ,

   ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    HttpClientModule,
    AlphaDataTableModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatProgressSpinnerModule,
    FormsModule,
    TranslateModule,
  ],
  providers:[
   CustomersService
  ]
})
export class CustomersModule { }
