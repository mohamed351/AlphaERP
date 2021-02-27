import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListMeasurementComponent} from './list-measurement/list-measurement.component';
import {EditMeasurementComponent} from './edit-measurement/edit-measurement.component';
import {CreateMeasurementComponent} from './create-measurement/create-measurement.component';

const routes: Routes = [
  {
    path: '',
    component: ListMeasurementComponent,
  }
  ,
  {
      path:"create",
      component:CreateMeasurementComponent
  },
  {
      path:"edit/:id",
      component:EditMeasurementComponent
  },

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MesasurementRouterModule{
    
}

