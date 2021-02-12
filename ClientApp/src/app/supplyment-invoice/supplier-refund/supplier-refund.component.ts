import { MeasurementInfo } from './../../components/measurement-dialog/measurement-dialog.component';
import { MatDialog } from '@angular/material';
import { Invoice, InvoiceDetail, Product } from './../../models/supplymentInvoice/supplymentInvoiceDetails';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private apiService: RestService,
    private activeRouter: ActivatedRoute,
    private MatDialog:MatDialog) { }

  ngOnInit() {
   let paramsData = this.activeRouter.snapshot.params["id"];
    this.apiService.GetAll<Invoice[]>(`/api/SupplymentInvoice/DataO?$expand=employee($select=id,userName),supplier($select=id,name),store($select=id,name),invoiceDetails($expand=Product($select=id,ProductName,TypeOfMeasurement))&$select=ID,InvoiceDetails,Store,InvoiceNumber,Employee&$filter=InvoiceNumber eq ${paramsData}`).subscribe(a => {
      this.InvoiceInfo = a[0];
      for (const iterator of this.InvoiceInfo.InvoiceDetails) {
        iterator.NewQuantity = 0;
      }

    });
  }
  OpenDialog(data:TypeOfMeasurements, invoice:InvoiceDetail, InputElement:HTMLInputElement) {
   let MeasurementInfo: MeasurementInfo = {
     MainMeasurementName: '',
     MeasurementType: data,
     MeasurementValue:1
    }
    this.MatDialog.open(MeasurementDialogComponent, { width: '250px', data: MeasurementInfo }).afterClosed().subscribe(a => {
     console.log(a);
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

}
