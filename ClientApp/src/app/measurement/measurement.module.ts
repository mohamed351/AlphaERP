import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMeasurementComponent } from './list-measurement/list-measurement.component';
import { CreateMeasurementComponent } from './create-measurement/create-measurement.component';
import { EditMeasurementComponent } from './edit-measurement/edit-measurement.component';



@NgModule({
  declarations: [ListMeasurementComponent, CreateMeasurementComponent, EditMeasurementComponent],
  imports: [
    CommonModule
  ]
})
export class MeasurementModule { }
