import { ActivatedRoute } from '@angular/router';
import { RestService } from './../../services/rest-service.service';
import { Component, OnInit } from '@angular/core';
import {  CustomerInvoice} from '../../models/customerInvoice/customerInvoice';

@Component({
  selector: 'app-customer-refund-compoent',
  templateUrl: './customer-refund-compoent.component.html',
  styleUrls: ['./customer-refund-compoent.component.css']
})
export class CustomerRefundCompoentComponent implements OnInit {
  public InvoiceInfo: CustomerInvoice = null;
  constructor(private restApi: RestService
    , private routerActive: ActivatedRoute) {

  }

  ngOnInit(): void {
    let idParamter = this.routerActive.snapshot.params["id"];
    this.restApi.GetAll<CustomerInvoice[]>(`/api/CustomerInvoice/OData?$expand=customer($select=ID,customerName),employee($select=UserName,Id),store($select=ID,Name),customerInvoiceDetails($expand=Product($select=ID,ProductName,TypeOfMeasurement))&$filter=InvoiceNumber eq ${idParamter}`).subscribe(ivoiceData => {
      this.InvoiceInfo = ivoiceData[0];
    });
  }
  SubmitInvoice() {

  }
  CalculateTotalPrice() {

  }
  CalculateTotal() {

  }
  CalculateNewTotalPrice() {

  }



}
