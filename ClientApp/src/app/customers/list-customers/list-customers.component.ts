import { Component, OnInit } from '@angular/core';
import { DataTableService } from 'src/app/services/data-table.service';
import { RestService } from '../../services/rest-service.service';
import {Customer} from '../../models/customers/customer';
import { DataTable } from 'src/app/models/datatable';
import {ColumnType, TypeOfColumn} from '../../components/alpha-data-table/reusable-data-table/columnType'

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css']
})
export class ListCustomersComponent implements OnInit {
  /*
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatTable, {static: false}) table: MatTable<Customer>;
  */
    columnNames:ColumnType[] = [
    {columnName:"customerName",columnType: TypeOfColumn.None}, 
    {columnName:"id",columnType: TypeOfColumn.Buttons}]
  constructor(private restAPI:RestService , private dataTable:DataTableService<Customer> ) { }

 
  ngOnInit() {
  
    
  }

}

