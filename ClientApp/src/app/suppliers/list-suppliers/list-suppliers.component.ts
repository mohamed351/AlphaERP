import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {ColumnType, TypeOfColumn} from '../../components/alpha-data-table/reusable-data-table/columnType'
@Component({
  selector: 'app-list-suppliers',
  templateUrl: './list-suppliers.component.html',
  styleUrls: ['./list-suppliers.component.css']
})
export class ListSuppliersComponent implements OnInit {

  columnNames:ColumnType[]= [{columnName:"supplierName",columnType:TypeOfColumn.None}
, {columnName:"id", columnType:TypeOfColumn.Buttons}]
  constructor(private toster:ToastrService) { }

  ngOnInit() {
  }

  OnDeleteSuccess(data){
     this.toster.success("Successful Delete","Successful Deletion");
  }

}
