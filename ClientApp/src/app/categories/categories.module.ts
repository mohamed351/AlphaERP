import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import {CategoriesRoutingModule} from './categories-routing.module';


@NgModule({
  declarations: [ListCategoriesComponent, CreateCategoryComponent, EditCategoryComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }
