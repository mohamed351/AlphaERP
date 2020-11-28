import { Component, OnInit } from '@angular/core';
import { ColumnType, TypeOfColumn } from 'src/app/components/alpha-data-table/reusable-data-table/columnType';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  columnNames:ColumnType[] = [
    {columnName:"productName",columnType: TypeOfColumn.None},
    {columnName:"sellingPrice",columnType: TypeOfColumn.None} ,
    {columnName:"purchasingPrice",columnType: TypeOfColumn.None},
    {columnName:"id",columnType: TypeOfColumn.Buttons}]
  constructor() { }

  ngOnInit() {
  }

}
