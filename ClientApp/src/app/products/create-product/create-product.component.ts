import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/categories/category';
import { RestService } from 'src/app/services/rest-service.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  public categoryInfo:Category[] =[];
  constructor(private restAPI:RestService) { }

  ngOnInit() {
  this.restAPI.GetAll<Category[]>("/api/Categories/flat").subscribe(a=>{
    this.categoryInfo = a;
  });
  }

}
