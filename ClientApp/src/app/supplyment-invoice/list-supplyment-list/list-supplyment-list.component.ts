import { ColumnType, TypeOfColumn } from 'src/app/components/alpha-data-table/reusable-data-table/columnType';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-supplyment-list',
  templateUrl: './list-supplyment-list.component.html',
  styleUrls: ['./list-supplyment-list.component.css']
})
export class ListSupplymentListComponent implements OnInit {
  columnNames: ColumnType[] = [
    { columnName: 'invoiceNumber', columnType: TypeOfColumn.None },
    {columnName:'invoiceDate',columnType:TypeOfColumn.Date},
    {columnName:'supplierName', columnType: TypeOfColumn.None},
    { columnName: 'storeName', columnType: TypeOfColumn.None },
    { columnName: 'supplierInvoiceNumber' , columnType:TypeOfColumn.DetailsWithReturnedInvoiceAndPrint}
  ]
  constructor() { }

  ngOnInit() {
  }
  OnCustomerDelete(data) {

  }

}
