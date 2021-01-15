import { Component, OnInit } from '@angular/core';
import { ColumnType, TypeOfColumn } from 'src/app/components/alpha-data-table/reusable-data-table/columnType';

@Component({
  selector: 'app-list-store',
  templateUrl: './list-store.component.html',
  styleUrls: ['./list-store.component.css']
})
export class ListStoreComponent implements OnInit {
  columnNames:ColumnType[] = [{columnName: "name" ,columnType: TypeOfColumn.None}, {columnName: "id", columnType:TypeOfColumn.Buttons}];
  constructor() { }

  ngOnInit() {
  }
  OnStoreDelete(){

  }

}
