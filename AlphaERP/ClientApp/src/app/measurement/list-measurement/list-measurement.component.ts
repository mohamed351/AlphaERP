import { Component, OnInit } from '@angular/core';
import { ColumnType, TypeOfColumn } from 'src/app/components/alpha-data-table/reusable-data-table/columnType';

@Component({
  selector: 'app-list-measurement',
  templateUrl: './list-measurement.component.html',
  styleUrls: ['./list-measurement.component.css']
})
export class ListMeasurementComponent implements OnInit {

  columnNames:ColumnType[] = [
    {columnName:"name",columnType: TypeOfColumn.None}, 
    {columnName:"id",columnType: TypeOfColumn.Buttons}]  

  constructor() { }

  ngOnInit() {
  }

}
