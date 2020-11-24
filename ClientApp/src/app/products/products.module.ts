import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from './list-products/list-products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import {ProductRoutingModule} from './product.router.module';


@NgModule({
  declarations: [ListProductsComponent, CreateProductComponent, EditProductComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductsModule { }
