import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CategoriesModule } from './categories/categories.module';
import { HomeComponent } from './home/home.component';

const routes:Routes =[
    {path:"",component:HomeComponent},
    {path:"customers", 
    loadChildren:()=> import("./customers/customers.module").then(m=>m.CustomersModule) },
    {path:"suppliers",
    loadChildren:()=>import("./suppliers/suppliers.module").then(m=>m.SuppliersModule)},
    {path:"categories",
    loadChildren:()=>import("./categories/categories.module").then(m=>m.CategoriesModule)},
    {path:"products", loadChildren:()=>import("./products/products.module").then(m=>m.ProductsModule)}
]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRouter{

} 