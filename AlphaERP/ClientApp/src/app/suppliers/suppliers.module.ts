import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSuppliersComponent } from './list-suppliers/list-suppliers.component';
import { CreateSupplierComponent } from './create-supplier/create-supplier.component';
import { EditSupplierComponent } from './edit-supplier/edit-supplier.component';
import {SuppliersRoutingModule} from './suppliers-routing.module';
import {AlphaDataTableModule} from '../components/alpha-data-table/alpha-data-table.module';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material';
import { SupplierDetailsComponent } from './supplier-details/supplier-details.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [ListSuppliersComponent, CreateSupplierComponent, EditSupplierComponent, SupplierDetailsComponent],
  imports: [
    CommonModule,
    SuppliersRoutingModule,
    AlphaDataTableModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    RouterModule,
    MatProgressSpinnerModule,
    TranslateModule
  ],
  providers:[
    
  ]
})
export class SuppliersModule { }
