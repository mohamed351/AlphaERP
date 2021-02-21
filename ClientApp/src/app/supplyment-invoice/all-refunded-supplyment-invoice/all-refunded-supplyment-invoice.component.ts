import { MeasurmentConvertService } from 'src/app/services/measurment-convert.service';
import { ActivatedRoute } from '@angular/router';
import { RestService } from 'src/app/services/rest-service.service';
import { Component, OnInit } from '@angular/core';
import { ReturendSupplymentInvoice } from 'src/app/models/returnedInvoices/listRefundedPurchasing';

@Component({
  selector: 'app-all-refunded-supplyment-invoice',
  templateUrl: './all-refunded-supplyment-invoice.component.html',
  styleUrls: ['./all-refunded-supplyment-invoice.component.css']
})
export class AllRefundedSupplymentInvoiceComponent implements OnInit {

  returnedInvoice: ReturendSupplymentInvoice[] =[];
  constructor(private apiRest: RestService,
    private activeRouter: ActivatedRoute,
  private converter:MeasurmentConvertService) { }

  ngOnInit() {
    let dataParamter = this.activeRouter.snapshot.params["id"];
    this.apiRest.GetAll<ReturendSupplymentInvoice[]>(`/api/ReturnSupplymentInvoice/DataO?$expand=returnSupplymentInvoiceDetails($expand=Product($select=ID,ProductName,TypeOfMeasurement))&$filter=InvoiceReferenceID eq ${dataParamter}`).subscribe(a => {
      this.returnedInvoice = a;

      for (const returendInvoice of this.returnedInvoice) {
        for (const iterator of returendInvoice.ReturnSupplymentInvoiceDetails) {
         iterator.Quantity = this.converter.converMeasurement(iterator.Quantity, iterator.Product.TypeOfMeasurement);
        }
      }

    });
  }

}
