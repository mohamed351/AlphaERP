import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListStoreComponent} from './list-store/list-store.component';
import {CreateStoreComponent} from './create-store/create-store.component';
import {EditStoreComponent} from './edit-store/edit-store.component';

const routes: Routes = [
  {
    path: '',
    component: ListStoreComponent,
  }
  ,
  {
      path:"create",
      component:CreateStoreComponent
  },
  {
      path:"edit/:id",
      component:EditStoreComponent
  },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoresRoutingModule { }
