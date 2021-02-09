import { MeasurementInfo } from './../../components/measurement-dialog/measurement-dialog.component';
import { MatDialog } from '@angular/material';
import { Invoice, InvoiceDetail, Product } from './../../models/supplymentInvoice/supplymentInvoiceDetails';
import { ActivatedRoute } from '@angular/router';
import { RestService } from './../../services/rest-service.service';
import { Component, OnInit } from '@angular/core';
import {  MeasurementDialogComponent} from '../../components/measurement-dialog/measurement-dialog.component';
import { TypeOfMeasurements } from 'src/app/models/typeOfMeasurements';
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
    });
  }
  OpenDialog(data:TypeOfMeasurements, invoice:InvoiceDetail, InputElement:HTMLInputElement) {
   let MeasurementInfo: MeasurementInfo = {
     MainMeasurementName: '',
     MeasurementType: data,
     MeasurementValue:1
    }
    this.MatDialog.open(MeasurementDialogComponent, { width: '250px', data: MeasurementInfo }).afterClosed().subscribe(a => {
      if (a < invoice.Quantity) {
        InputElement.value = a;
      }
      else {
        alert("Error");
      }
    });


  }

}
