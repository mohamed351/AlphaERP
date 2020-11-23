import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import {CategoriesRoutingModule} from './categories-routing.module';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [ListCategoriesComponent, CreateCategoryComponent, EditCategoryComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class CategoriesModule { }
