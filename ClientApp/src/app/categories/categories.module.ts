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
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  declarations: [ListCategoriesComponent, CreateCategoryComponent, EditCategoryComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatSelectModule
  ]
})
export class CategoriesModule { }
