import { Invoice } from './../../models/supplymentInvoice/supplymentInvoiceDetails';
import { ActivatedRoute } from '@angular/router';
import { RestService } from './../../services/rest-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supplier-refund',
  templateUrl: './supplier-refund.component.html',
  styleUrls: ['./supplier-refund.component.css']
})
export class SupplierRefundComponent implements OnInit {
 public InvoiceInfo: Invoice = null;
  constructor(private apiService:RestService, private activeRouter:ActivatedRoute) { }

  ngOnInit() {
   let paramsData = this.activeRouter.snapshot.params["id"];
    this.apiService.GetAll<Invoice[]>(`/api/SupplymentInvoice/DataO?$expand=employee($select=id,userName),supplier($select=id,name),store($select=id,name),invoiceDetails($expand=Product($select=id,ProductName,TypeOfMeasurement))&$select=ID,InvoiceDetails,Store,InvoiceNumber,Employee&$filter=id eq ${paramsData}`).subscribe(a => {
      this.InvoiceInfo = a[0];
    });
  }

}
