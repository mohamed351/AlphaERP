import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {ReusableDataTableComponent} from './reusable-data-table/reusable-data-table.component';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  declarations: [ReusableDataTableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    RouterModule,
    MatProgressSpinnerModule,
    MatFormFieldModule
  ],
  exports:[
    ReusableDataTableComponent,
  
  ],
  providers:[
    
  ]
})
export class AlphaDataTableModule { }
