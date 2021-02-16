import { ActivatedRoute } from '@angular/router';
import { RestService } from './../../services/rest-service.service';
import { Component, OnInit } from '@angular/core';
import { Invoice } from 'src/app/models/supplymentInvoice/supplymentInvoiceDetails';

@Component({
  selector: 'app-supplyment-invoice-details',
  templateUrl: './supplyment-invoice-details.component.html',
  styleUrls: ['./supplyment-invoice-details.component.css']
})
export class SupplymentInvoiceDetailsComponent implements OnInit {
  Invoice: Invoice = null;
  constructor(private apiService:RestService, private activeRouter:ActivatedRoute) { }

  ngOnInit() {
    let paramsData = this.activeRouter.snapshot.params["id"];
    this.apiService.GetAll<Invoice[]>(`/api/SupplymentInvoice/DataO?$expand=employee($select=id,userName),supplier($select=id,name),store($select=id,name),invoiceDetails($expand=Product($select=id,ProductName,TypeOfMeasurement))&$select=ID,InvoiceDetails,Store,InvoiceNumber,Employee&$filter=InvoiceNumber eq ${paramsData}`).subscribe(a => {
      this.Invoice = a[0];

    });

  }

  TotalInvoiceDetails():number {
    let totalInvoice = 0;
    for (const iterator of this.Invoice.InvoiceDetails) {
      totalInvoice += (iterator.UnitPrice * iterator.Quantity);
    }
    return totalInvoice;
  }

}
