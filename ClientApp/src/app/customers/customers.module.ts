import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCustomersComponent } from './list-customers/list-customers.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import {CustomersRoutingModule} from './customers-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {AlphaDataTableModule} from '../components/alpha-data-table/alpha-data-table.module';
import {MatButtonModule} from '@angular/material/button';
import {ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [ListCustomersComponent, 
    CreateCustomerComponent, 
    EditCustomerComponent ,
  
   ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    HttpClientModule,
    AlphaDataTableModule,
    MatButtonModule,
    ReactiveFormsModule
  
  ],
  providers:[
   
  ]
})
export class CustomersModule { }
