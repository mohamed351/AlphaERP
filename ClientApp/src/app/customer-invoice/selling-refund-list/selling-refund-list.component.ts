import { MeasurmentConvertService } from './../../services/measurment-convert.service';
import { RestService } from './../../services/rest-service.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ReturendSupplymentInvoice } from 'src/app/models/returnedInvoices/listRefundedPurchasing';
import { ReturnedCustomerInvoice } from 'src/app/models/customerRefundInvoice/customerRefundInvoice';

@Component({
  selector: 'app-selling-refund-list',
  templateUrl: './selling-refund-list.component.html',
  styleUrls: ['./selling-refund-list.component.css']
})
export class SellingRefundListComponent implements OnInit {

  returnedInvoice: ReturnedCustomerInvoice[] =[];
  constructor(private activeRouter: ActivatedRoute,
    private restService: RestService,
    private MeasurmentConvertService:MeasurmentConvertService) { }

  ngOnInit(): void {
    let idParamter = this.activeRouter.snapshot.params["id"];
    this.restService.GetAll<ReturnedCustomerInvoice[]>(`/api/ReturnCustomerInvoice/DataO?$expand=ReturnedCustomerInvoiceDetails($expand=Product($select=ID,ProductName,TypeOfMeasurement))&$filter=InvoiceReferenceID eq ${idParamter}`).subscribe(a => {
      console.log(a);
      this.returnedInvoice = a;
      this.convertAllMeasurement();
    });

  }
  private convertAllMeasurement() {
    for (const iterator of this.returnedInvoice) {
      for (const iterator2 of iterator.ReturnedCustomerInvoiceDetails) {
        iterator2.Quantity = this.MeasurmentConvertService.converMeasurement(iterator2.Quantity, iterator2.Product.TypeOfMeasurement);
      }
    }
  }

}
