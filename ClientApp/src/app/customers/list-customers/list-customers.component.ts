import { Component, OnInit } from '@angular/core';
import { DataTableService } from 'src/app/services/data-table.service';
import { RestService } from '../../services/rest-service.service';
import {ColumnType, TypeOfColumn} from '../../components/alpha-data-table/reusable-data-table/columnType'
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { CustomerList } from 'src/app/models/customersModel/CustomerList';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css']
})
export class ListCustomersComponent implements OnInit {

    columnNames:ColumnType[] = [
    {columnName:"customerName",columnType: TypeOfColumn.None},
    {columnName:"id",columnType: TypeOfColumn.Buttons}]
  constructor(private toaster:ToastrService) { }


  ngOnInit() {


  }
  OnCustomerDelete(data:any){
    this.toaster.success("Successful Delete","Successful Deletion");
  }

}

