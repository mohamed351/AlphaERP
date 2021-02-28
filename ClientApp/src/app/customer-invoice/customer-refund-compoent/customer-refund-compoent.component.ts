import { MeasurmentConvertService } from 'src/app/services/measurment-convert.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from './../../services/rest-service.service';
import { Component, OnInit } from '@angular/core';
import {  CustomerInvoice} from '../../models/customerInvoice/customerInvoice';
import { ReferneceDetails } from 'src/app/models/returnedInvoices/returnedInvoice';

@Component({
  selector: 'app-customer-refund-compoent',
  templateUrl: './customer-refund-compoent.component.html',
  styleUrls: ['./customer-refund-compoent.component.css']
})
export class CustomerRefundCompoentComponent implements OnInit {
  public InvoiceInfo: CustomerInvoice = null;
  constructor(private restApi: RestService
    , private routerActive: ActivatedRoute,
    private conveter: MeasurmentConvertService,
  private router:Router) {

  }

  ngOnInit(): void {
    let idParamter = this.routerActive.snapshot.params["id"];
    this.restApi.GetAll<CustomerInvoice[]>(`/api/CustomerInvoice/OData?$expand=customer($select=ID,customerName),employee($select=UserName,Id),store($select=ID,Name),customerInvoiceDetails($expand=Product($select=ID,ProductName,TypeOfMeasurement))&$filter=InvoiceNumber eq ${idParamter}`).subscribe(ivoiceData => {
      this.restApi.GetAll<ReferneceDetails[]>(`/api/ReturnCustomerInvoice/${idParamter}`).subscribe(c => {
        this.InvoiceInfo = ivoiceData[0];
        for (const iterator of this.InvoiceInfo.CustomerInvoiceDetails) {
          iterator.Quantity = this.conveter.converMeasurement(iterator.Quantity, iterator.Product.TypeOfMeasurement);

        }
       // this.CalculateQuantities(this.InvoiceInfo, c);
      });
    });
  }
  CalculateQuantities(Invoice:CustomerInvoice, ReferneceDetails:ReferneceDetails[] ) {
    Invoice.CustomerInvoiceDetails.map(c => {
      let qtu = 0;
      console.log(ReferneceDetails);
      console.log(c);
      let oldQuantity = ReferneceDetails.find(a => a.detailReference == c.ID);
      console.log(oldQuantity);
      if (oldQuantity != null) {
        c.Quantity = ((c.Quantity - qtu) - (oldQuantity.quantity));
      }
      else {
        c.Quantity = c.Quantity;
      }
    });
  }


  SubmitInvoice() {

    this.restApi.PostData("/api/ReturnCustomerInvoice",this.InvoiceInfo).subscribe(a => {
      this.router.navigate(["/customerInvoice"]);
    });
  }
  CalculateTotal() {
    let total: number = 0;
    for (const iterator of this.InvoiceInfo.CustomerInvoiceDetails) {
      total += (iterator.Quantity * iterator.Price);
    }
    return total;
  }

  CalculateTotalPrice() {
    let price: number = 0;
    for (const iterator of this.InvoiceInfo.CustomerInvoiceDetails) {
      price += iterator.Price;
    }
    return price;
  }
  CalculateNewTotalPrice() {
    let totalPrice: number = 0;
    for (const iterator of this.InvoiceInfo.CustomerInvoiceDetails) {
      totalPrice += (((-iterator.NewQuantity) * iterator.Price) + ((iterator.Quantity) * iterator.Price));
    }
    return totalPrice;
  }

  NewQuantityOnChange() {

  }




}
