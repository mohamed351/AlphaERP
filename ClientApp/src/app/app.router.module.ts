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
    {path:"login",component:LoginComponent, canActivate:[UnAuthGuardGuard]}
]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRouter{

} 