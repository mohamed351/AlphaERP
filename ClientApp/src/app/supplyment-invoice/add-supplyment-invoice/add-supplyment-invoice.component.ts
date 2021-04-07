
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { NgOption, NgSelectComponent } from '@ng-select/ng-select';
import { MeasurementDialogComponent, MeasurementInfo } from 'src/app/components/measurement-dialog/measurement-dialog.component';
import { Supplier } from 'src/app/models/suppliers/supplier';
import { RestService } from 'src/app/services/rest-service.service';

@Component({
  selector: 'app-add-supplyment-invoice',
  templateUrl: './add-supplyment-invoice.component.html',
  styleUrls: ['./add-supplyment-invoice.component.css']
})
export class AddSupplymentInvoiceComponent implements OnInit {

  constructor(private apiService:RestService, private dialog:MatDialog, private router:Router) { }
  Suppliers:any[] =[];
  Stores: any[] = [];
  Products: any[] = [];
  selectedProduct: any = null;

  form:FormGroup = new FormGroup({
      supplierId:new FormControl('',[Validators.required]),
      storeId:new FormControl('',[Validators.required]),
    Invoicedate: new FormControl('', [Validators.required]),
      note:new FormControl(''),
      details:new FormArray([
        new FormGroup({
            productID:new FormControl('',[Validators.required]),
            quantity:new FormControl('',[Validators.required]),
             expireDate: new FormControl(''),
          barCode: new FormControl('', [Validators.required]),
          price: new FormControl(''),
          measurementName:new FormControl(''),
            productSerial:new FormControl(''),
          typeOfMeasurement: new FormControl(''),
          measurementValue:new FormControl('')
        })
      ])
  });
  get InvoiceDetails(){
    return this.form.get("details") as FormArray;
  }
  ngOnInit() {
    this.apiService.GetAll<any[]>("/api/Supplier/flat?$select=id,name").subscribe(a=>{
      this.Suppliers =a;
    });
    this.apiService.GetAll<any[]>("/api/stores?$select=ID,Name").subscribe(a=>{
      this.Stores =a;
    });




  }
  AddInvoiceDetails(){
    this.InvoiceDetails.push( new FormGroup({
      productID:new FormControl('',[Validators.required]),
      quantity: new FormControl('', [Validators.required]),
      barCode:new FormControl('',[Validators.required]),
      expireDate: new FormControl(''),
      measurementName:new FormControl(''),
      typeOfMeasurement: new FormControl(''),
      measurementValue:new FormControl(''),
      price:new FormControl(''),
      productSerial:new FormControl('')

    }))
  }
  GetQuantityDialog(index) {
    let measurementInfo: MeasurementInfo = {
      MainMeasurementName: this.InvoiceDetails.controls[index].get("measurementName").value,
      MeasurementType: this.InvoiceDetails.controls[index].get("typeOfMeasurement").value,
      MeasurementValue:this.InvoiceDetails.controls[index].get("measurementValue").value
    }
    console.log(measurementInfo);
    const dialogRef = this.dialog.open(MeasurementDialogComponent, {
      width: '250px',
      data: measurementInfo
    });
    dialogRef.afterClosed().subscribe(result => {
      this.InvoiceDetails.controls[index].get("quantity").setValue(result);
    });
  }

  searchProductName(productName) {
    this.apiService.GetAll<any>(`/api/SupplymentInvoice/GetByProductName/${productName.term}`).subscribe(a => {
      this.Products = a;
    });

  }
  productNameChanged(product, index) {
    if (product != undefined) {
      console.log(product);
      this.selectedProduct = product;
      this.InvoiceDetails.controls[index].get("barCode").setValue(product.barCode);
      this.InvoiceDetails.controls[index].get("productID").setValue(product.productID);
      this.InvoiceDetails.controls[index].get("measurementName").setValue(product.name);
      this.InvoiceDetails.controls[index].get("measurementValue").setValue(product.value);
      this.InvoiceDetails.controls[index].get("typeOfMeasurement").setValue(product.mainType);
      this.InvoiceDetails.controls[index].get("price").setValue(product.purchasingPrice);
    }
  }
  searchBarCode(barCode) {
    console.log(barCode);
    this.apiService.GetAll<any>(`/api/SupplymentInvoice/GetByBarCode/${barCode.term}`).subscribe(a => {
      this.Products = a;
    });
  }

  clearProductName(index) {
    this.selectedProduct = null;
    this.InvoiceDetails.controls[index].get("barCode").setValue("");
    this.InvoiceDetails.controls[index].get("productID").setValue("");
    this.InvoiceDetails.controls[index].get("measurementName").setValue("");
    this.InvoiceDetails.controls[index].get("measurementValue").setValue("");
    this.InvoiceDetails.controls[index].get("typeOfMeasurement").setValue("");

  }
  deleteRow(index) {
    this.InvoiceDetails.removeAt(index);
  }
  CalcuateTotalRow(index) {

      let quantity = +this.InvoiceDetails.controls[index].get("quantity").value;
      let price = +this.InvoiceDetails.controls[index].get("price").value;
      return quantity * price;


  }
  submitTheForm() {
    console.log("Value of Form",this.form.value);
    console.log( "IsForm Valid",this.form.valid);
    console.log("form Element", this.form);
    console.log(JSON.stringify(this.form.value));
    this.apiService.PostData("/api/SupplymentInvoice", this.form.value).subscribe(a => {

      window.open("/ReportsViewers/Index?ReportData=1|" + a.invoiceNumber, "_blank");
      this.router.navigate(['/supplymentInvoice']);
    });
  }


  }





