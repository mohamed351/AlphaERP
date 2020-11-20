import { DataSource } from '@angular/cdk/table';
import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTable } from '@angular/material';
import { Customer } from 'src/app/models/customers/customer';
import { DataTable } from 'src/app/models/datatable';
import { DataTableService } from 'src/app/services/data-table.service';
import { RestService } from 'src/app/services/rest-service.service';
import {TypeOfColumn,ColumnType} from './columnType';
@Component({
  selector: 'alpha-dataTable',
  templateUrl: './reusable-data-table.component.html',
  styleUrls: ['./reusable-data-table.component.css'],
 
})
export class ReusableDataTableComponent implements OnInit , AfterViewInit  {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatTable, {static: false}) table: MatTable<any>;
  @Input("endPoint") endPoint:string;
  @Input("columnsName") columnsName:ColumnType[];
  @Input("componentName") compoentName:string;
  displayName= ["customerName"];
  constructor(public restAPI:RestService , public dataTable:DataTableService<Customer> ) { 
    
    
  }
  get ColumnType(){
    return TypeOfColumn;
  }
  get Allcolumns(){
    return this.columnsName.map((a)=>a.columnName)
  }

  ngAfterViewInit() {
    this.restAPI.GetDataTable<DataTable<Customer>>(10, 0,this.endPoint).subscribe(a=>{
      this.dataTable = new DataTableService<Customer>();
      this.dataTable.data = a.data;
      this.tableSize = a.totalCount;
      this.dataTable.paginator = this.paginator;
    
    });
  }
  
  public tableSize: number = 0;
  
  ngOnInit() {
    
  
  }

  GetData(data: any) {
    this.restAPI.GetDataTable<DataTable<Customer>>(data.pageSize, data.pageIndex,this.endPoint).subscribe(a=>{
      console.log(a)
      this.dataTable = new DataTableService<Customer>();
      this.dataTable.data = a.data;
      this.tableSize = a.totalCount;
      this.dataTable.paginator = this.paginator;
    
    });
  }
  

}
