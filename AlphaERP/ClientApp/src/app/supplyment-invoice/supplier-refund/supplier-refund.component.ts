import { RefundMeasurement } from './../../models/returnedInvoices/measurements';
import { ReturnedInvoice, ReferneceDetails } from './../../models/returnedInvoices/returnedInvoice';
import { MeasurementInfo } from './../../components/measurement-dialog/measurement-dialog.component';
import { MatDialog } from '@angular/material';
import { Invoice, InvoiceDetail, Product } from './../../models/supplymentInvoice/supplymentInvoiceDetails';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from './../../services/rest-service.service';
import { Component, OnInit, NgModule } from '@angular/core';
import {  MeasurementDialogComponent} from '../../components/measurement-dialog/measurement-dialog.component';
import { TypeOfMeasurements } from 'src/app/models/typeOfMeasurements';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-supplier-refund',
  templateUrl: './supplier-refund.component.html',
  styleUrls: ['./supplier-refund.component.css']
})
export class SupplierRefundComponent implements OnInit {
  public InvoiceInfo: Invoice = null;
  public measurements:RefundMeasurement[] = [];

  constructor(private apiService: RestService,
    private activeRouter: ActivatedRoute,
    private MatDialog: MatDialog,
  private router:Router) { }

  ngOnInit() {
   let paramsData = this.activeRouter.snapshot.params["id"];
    this.apiService.GetAll<Invoice[]>(`/api/SupplymentInvoice/DataO?$expand=employee($select=id,userName),supplier($select=id,name),store($select=id,name),invoiceDetails($expand=Product($select=id,ProductName,TypeOfMeasurement))&$select=ID,InvoiceDetails,Store,InvoiceNumber,Employee&$filter=InvoiceNumber eq ${paramsData}`).subscribe(a => {
      this.apiService.GetAll<ReferneceDetails[]>(`/api/ReturnSupplymentInvoice/${paramsData}`).subscribe(c => {
        this.apiService.GetAll<RefundMeasurement[]>("/api/Measurement/DataO").subscribe(b => {
          this.measurements = b;
          this.InvoiceInfo = a[0];
          this.CalculateQuantities(this.InvoiceInfo, c,b);


        });


      });
    });





  }

  CalculateQuantities(Invoice:Invoice, ReferneceDetails:ReferneceDetails[],RefundMeasurement:RefundMeasurement[] ) {
    Invoice.InvoiceDetails.map(c => {
      let qtu = 0;
      console.log(ReferneceDetails);
      console.log(c);
      let oldQuantity = ReferneceDetails.find(a => a.detailReference == c.ID);
      console.log(oldQuantity);
      let refunderMeasurment = RefundMeasurement.find(r => r.isMain && r.mainType == c.Product.TypeOfMeasurement);
      if (oldQuantity != null) {
        c.Quantity = ((c.Quantity - qtu) / refunderMeasurment.defaultValue) - (oldQuantity.quantity/ refunderMeasurment.defaultValue);
      }
      else {
        c.Quantity = c.Quantity / refunderMeasurment.defaultValue;
      }
    });
  }




  OpenDialog(data: TypeOfMeasurements, invoice: InvoiceDetail, InputElement: HTMLInputElement) {

    this.apiService.GetAll<any>(`/Product/MainTypeOnly?type=${data}`).subscribe(a => {
      let MeasurementInfo: MeasurementInfo = {
        MainMeasurementName: a.name,
        MeasurementType: data,
        MeasurementValue:a.defaultValue
      }
      console.log(MeasurementInfo);
      this.MatDialog.open(MeasurementDialogComponent, { width: '250px', data: MeasurementInfo }).afterClosed().subscribe(a => {
        if (invoice.Quantity >= a) {
          invoice.NewQuantity = a;
          console.log(invoice.NewQuantity);
        }
        else {
          console.log(a);
        }
       });
    });

  }
  ValueChanged(event,InputElement:HTMLInputElement) {
    console.log(event);
  }

  CalculateTotal() {
    let total: number = 0;
    for (const iterator of this.InvoiceInfo.InvoiceDetails) {
      total += (iterator.Quantity * iterator.UnitPrice);
    }
    return total;
  }
  NewQuantityOnChange(data:NgModel, oldQuantity, newQuantity:InvoiceDetail) {
    if (data.value <=oldQuantity) {
      data.control.setValue(data.value);
    } else {
      data.control.setValue(0);
    }
    newQuantity.NewQuantity = data.control.value;

  }
  CalculateTotalPrice() {
    let price: number = 0;
    for (const iterator of this.InvoiceInfo.InvoiceDetails) {
      price += iterator.UnitPrice;
    }
    return price;
  }
  CalculateNewTotalPrice() {
    let totalPrice: number = 0;
    for (const iterator of this.InvoiceInfo.InvoiceDetails) {
      totalPrice += (((-iterator.NewQuantity) * iterator.UnitPrice) + ((iterator.Quantity) * iterator.UnitPrice));
    }
    return totalPrice;
  }
  SubmitInvoice() {
    console.log(this.InvoiceInfo);
    console.log(JSON.stringify(this.InvoiceInfo));
    this.apiService.PostData("/api/ReturnSupplymentInvoice", this.InvoiceInfo).subscribe(a => {
      console.log(a);
      this.router.navigate(["/supplymentInvoice"]);

    });
  }

}
