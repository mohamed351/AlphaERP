import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListStoreComponent} from './list-store/list-store.component';
import {CreateStoreComponent} from './create-store/create-store.component';
import {EditStoreComponent} from './edit-store/edit-store.component';
import {DetailsStoreComponent} from './details-store/details-store.component';
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
  {
    path:"details/:id",
    component:DetailsStoreComponent
  }
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoresRoutingModule { }
