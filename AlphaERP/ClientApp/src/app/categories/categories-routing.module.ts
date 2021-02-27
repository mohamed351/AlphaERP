import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ListCategoriesComponent} from './list-categories/list-categories.component';
import {CreateCategoryComponent} from './create-category/create-category.component';
import {EditCategoryComponent} from './edit-category/edit-category.component';


const routes: Routes = [
  {
    path: '',
    component: ListCategoriesComponent,
  }
  ,
  {
      path:"create",
      component:CreateCategoryComponent
  },
  {
      path:"edit",
      component:EditCategoryComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
