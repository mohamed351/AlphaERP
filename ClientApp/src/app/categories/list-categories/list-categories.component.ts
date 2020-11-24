import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material';
import { RestService } from 'src/app/services/rest-service.service';
import {Category} from '../../models/categories/category';
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}
@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit {

  SelectedCategoryID:string = null;
  CategoryList:Category[] = null;
  SelectCategory(categoryID:any){
    this.SelectedCategoryID = categoryID.id;
  }
  RefreshTree(data){
    this.serviceAPI.GetAll<Category[]>("/api/Categories").subscribe(a=>{
    
      this.dataSource.data = a;
      this.CategoryList = a;
      
      
      
    });
  }

  private _transformer = (node: Category, level: number) => {
    return {
      expandable: !!node.childern && node.childern.length > 0,
      name: node.name,
      level: level,
      id:node.id
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

    treeFlattener = new MatTreeFlattener(
      this._transformer, node => node.level, node => node.expandable, node => node.childern);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
  constructor(private serviceAPI:RestService) { 
    
  }

  ngOnInit() {
    this.serviceAPI.GetAll<Category[]>("/api/Categories").subscribe(a=>{
      this.dataSource.data = a;
      this.CategoryList = a;
    });

  }

}
