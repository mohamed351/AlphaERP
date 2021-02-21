import { CustomerInvoice } from './../../models/customerInvoice/customerInvoice';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-invoice-details',
  templateUrl: './customer-invoice-details.component.html',
  styleUrls: ['./customer-invoice-details.component.css']
})
export class CustomerInvoiceDetailsComponent implements OnInit {
  InvoiceDetail: CustomerInvoice = null;
  constructor() { }

  ngOnInit() {
  }

}
