import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from './list-products/list-products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import {ProductRoutingModule} from './product.router.module';
import {AlphaDataTableModule} from '../components/alpha-data-table/alpha-data-table.module';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {NgxBarcodeModule} from 'ngx-barcode'
import { ImageCropperModule } from 'ngx-image-cropper';
import { TranslateModule } from '@ngx-translate/core';
import {HttpClientModule} from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {NgSelectModule} from '@ng-select/ng-select';

@NgModule({
  declarations: [ListProductsComponent, CreateProductComponent, EditProductComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    AlphaDataTableModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    NgxBarcodeModule,
    ImageCropperModule,
    FormsModule,
    TranslateModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    NgSelectModule
    
  ],
  providers:[]
})
export class ProductsModule { }
