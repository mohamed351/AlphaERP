import { Component, OnInit } from '@angular/core';
import { DataTableService } from 'src/app/services/data-table.service';
import { RestService } from '../../services/rest-service.service';
import {Customer} from '../../models/customers/customer';
import { DataTable } from 'src/app/models/datatable';
import {ColumnType, TypeOfColumn} from '../../components/alpha-data-table/reusable-data-table/columnType'
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

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
  constructor(private restAPI:RestService ,
    private dataTable:DataTableService<Customer> ,
    private toaster:ToastrService,
    private translation:TranslateService) { }


  ngOnInit() {


  }
  OnCustomerDelete(data:any){
    this.toaster.success("Successful Delete","Successful Deletion");
  }

}

