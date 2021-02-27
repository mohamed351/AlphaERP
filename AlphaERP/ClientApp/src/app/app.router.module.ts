import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CategoriesModule } from './categories/categories.module';
import { AuthGuard } from './guards/auth.guard';
import { UnAuthGuardGuard } from './guards/unauth.guard';
import { HomeComponent } from './home/home.component';
import {LoginComponent} from './login/login.component';


const routes:Routes =[
    {path:"",component:HomeComponent,canActivate:[AuthGuard]},
    {path:"customers",  loadChildren:()=> import("./customers/customers.module").then(m=>m.CustomersModule) , canActivate:[AuthGuard] },
    {path:"suppliers",loadChildren:()=>import("./suppliers/suppliers.module").then(m=>m.SuppliersModule), canActivate:[AuthGuard]},
    {path:"categories",loadChildren:()=>import("./categories/categories.module").then(m=>m.CategoriesModule),canActivate:[AuthGuard]},
    {path:"products", loadChildren:()=>import("./products/products.module").then(m=>m.ProductsModule),canActivate:[AuthGuard]},
    {path:"measurement", loadChildren:()=>import("./measurement/measurement.module").then(m=>m.MeasurementModule) , canActivate:[AuthGuard]},
    {path:"supplymentInvoice", loadChildren:()=>import("./supplyment-invoice/supplyment-invoice.module").then(m=>m.SupplymentInvoiceModule) , canActivate:[AuthGuard]},
    {path:"login",component:LoginComponent, canActivate:[UnAuthGuardGuard]},
  { path: "stores", loadChildren: () => import("./stores/stores.module").then(m => m.StoresModule), canActivate: [AuthGuard] },
  {path:"customerInvoice", loadChildren:()=> import('./customer-invoice/customer-invoice.module').then(m=>m.CustomerInvoiceModule), canActivate:[AuthGuard]}

]
@NgModule({
    imports:[RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports:[RouterModule]
})
export class AppRouter{

}
