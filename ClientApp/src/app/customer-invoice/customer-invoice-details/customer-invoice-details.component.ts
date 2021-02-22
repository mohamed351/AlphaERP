import { ActivatedRoute } from '@angular/router';
import { RestService } from './../../services/rest-service.service';
import { CustomerInvoice } from './../../models/customerInvoice/customerInvoice';
import { Component, OnInit } from '@angular/core';
import {MeasurmentConvertService } from './../../services/measurment-convert.service';

@Component({
  selector: 'app-customer-invoice-details',
  templateUrl: './customer-invoice-details.component.html',
  styleUrls: ['./customer-invoice-details.component.css']
})
export class CustomerInvoiceDetailsComponent implements OnInit {
  InvoiceDetail: CustomerInvoice = null;
  constructor(private restApi:RestService,private converter:MeasurmentConvertService, private activeRouter:ActivatedRoute) { }

  ngOnInit() {
     let id = this.activeRouter.snapshot.params["id"];
    this.restApi.GetAll<CustomerInvoice[]>(`/api/CustomerInvoice/OData?$expand=customer($select=ID,customerName),employee($select=UserName,Id),store($select=ID,Name),customerInvoiceDetails($expand=Product($select=ID,ProductName,TypeOfMeasurement))&$filter=InvoiceNumber eq ${id}`).subscribe(a => {
      console.log(a);
      this.InvoiceDetail = a[0];
      for (const iterator of this.InvoiceDetail.CustomerInvoiceDetails) {
        iterator.Quantity = this.converter.converMeasurement(iterator.Quantity, iterator.Product.TypeOfMeasurement);
      }
    });
  }
  TotalInvoiceDetails() {
    let qtu = 0;
    for (const iterator of this.InvoiceDetail.CustomerInvoiceDetails) {
      qtu +=  iterator.Quantity * iterator.Price

    }
    return qtu;
  }

}
