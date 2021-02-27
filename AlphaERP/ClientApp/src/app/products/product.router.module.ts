import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListProductsComponent} from './list-products/list-products.component';
import {CreateProductComponent} from './create-product/create-product.component';
import {EditProductComponent} from './edit-product/edit-product.component';


const routes: Routes = [
  {
    path: '',
    component: ListProductsComponent,
  }
  ,
  {
      path:"create",
      component:CreateProductComponent
  },
  {
      path:"edit/:id",
      component:EditProductComponent
  },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
