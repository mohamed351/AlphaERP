import { Component, OnInit } from '@angular/core';
import { ColumnType, TypeOfColumn } from 'src/app/components/alpha-data-table/reusable-data-table/columnType';

@Component({
  selector: 'app-list-customer-invoice',
  templateUrl: './list-customer-invoice.component.html',
  styleUrls: ['./list-customer-invoice.component.css']
})
export class ListCustomerInvoiceComponent implements OnInit {

  columnNames: ColumnType[] = [
    { columnName: "invoiceNumber", columnType: TypeOfColumn.None },
    { columnName: "storeName", columnType: TypeOfColumn.None },
    { columnName: "customerName", columnType: TypeOfColumn.None },
    { columnName: "employeeName", columnType: TypeOfColumn.None },
    { columnName: "invoiceDate", columnType: TypeOfColumn.Date },
    { columnName: "amount", columnType: TypeOfColumn.None },
    {columnName:"customerInvoiceNumber",columnType:TypeOfColumn.DetailsWithReturnedInvoiceAndPrint}

  ]
  constructor() { }

  ngOnInit() {
  }

}
