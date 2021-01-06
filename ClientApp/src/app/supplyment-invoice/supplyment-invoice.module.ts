import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSupplymentListComponent } from './list-supplyment-list/list-supplyment-list.component';
import { AddSupplymentInvoiceComponent } from './add-supplyment-invoice/add-supplyment-invoice.component';
import {ProductRoutingModule} from './supplyment-Invoice.router.module';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
@NgModule({
  declarations: [ListSupplymentListComponent, AddSupplymentInvoiceComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class SupplymentInvoiceModule { }
