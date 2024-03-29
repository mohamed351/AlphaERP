import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListStoreComponent } from './list-store/list-store.component';
import { CreateStoreComponent } from './create-store/create-store.component';
import { EditStoreComponent } from './edit-store/edit-store.component';
import {StoresRoutingModule} from './stores.router.module'
import {AlphaDataTableModule} from '../components/alpha-data-table/alpha-data-table.module';
import { TranslateModule } from '@ngx-translate/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { DetailsStoreComponent } from './details-store/details-store.component';


@NgModule({
  declarations: [ListStoreComponent, CreateStoreComponent, EditStoreComponent, DetailsStoreComponent],
  imports: [
    CommonModule,
    StoresRoutingModule,
    AlphaDataTableModule,
    TranslateModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ]
})
export class StoresModule { }
