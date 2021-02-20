import { ActivatedRoute } from '@angular/router';
import { RestService } from 'src/app/services/rest-service.service';
import { Component, OnInit } from '@angular/core';
import { ReturendSupplymentInvoice } from 'src/app/models/returnedInvoices/listRefundedPurchasing';
import { MeasurmentConvertService} from '../../services/measurment-convert.service';
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
      for (const iterator of this.returnedInvoice) {
         for (const iterator2 of iterator.ReturnSupplymentInvoiceDetails ) {
           iterator2.Quantity = this.converter.ConvertToMain(iterator2.Quantity, iterator2.Product.TypeOfMeasurement);
         }
      }
    });
  }

}
