import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMeasurementComponent } from './list-measurement/list-measurement.component';
import { CreateMeasurementComponent } from './create-measurement/create-measurement.component';
import { EditMeasurementComponent } from './edit-measurement/edit-measurement.component';
import {MesasurementRouterModule} from './measurement.router.module';
import {AlphaDataTableModule} from '../components/alpha-data-table/alpha-data-table.module';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule} from '@angular/forms'
@NgModule({
  declarations: [ListMeasurementComponent, CreateMeasurementComponent, EditMeasurementComponent],
  imports: [
    CommonModule,
    MesasurementRouterModule,
    AlphaDataTableModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule

  ]
})
export class MeasurementModule { }
