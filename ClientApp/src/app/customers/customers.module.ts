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
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material';

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
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatProgressSpinnerModule
  
  ],
  providers:[
   
  ]
})
export class CustomersModule { }
