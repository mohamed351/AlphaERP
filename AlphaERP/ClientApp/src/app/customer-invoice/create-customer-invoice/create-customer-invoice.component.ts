import { Router, RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material';
import { RestService } from 'src/app/services/rest-service.service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MeasurementDialogComponent, MeasurementInfo } from 'src/app/components/measurement-dialog/measurement-dialog.component';

@Component({
  selector: 'app-create-customer-invoice',
  templateUrl: './create-customer-invoice.component.html',
  styleUrls: ['./create-customer-invoice.component.css']
})
export class CreateCustomerInvoiceComponent implements OnInit {

  Customers: any[] = [];
  Stores: any[] = [];
  Products: any[] = [];
  form: FormGroup = new FormGroup({
    customerID: new FormControl('', [Validators.required]),
    storeID: new FormControl('',[Validators.required]),
    invoiceDate: new FormControl('',[Validators.required]),
    note:new FormControl(''),
    details:new FormArray([
      new FormGroup({
        productID:new FormControl('',[Validators.required]),
        quantity:new FormControl('',[Validators.required]),
        expireDate: new FormControl(''),
        barCode: new FormControl('', [Validators.required]),
        price: new FormControl('',[Validators.required]),
        measurementName:new FormControl(''),
        productSerial:new FormControl(''),
        typeOfMeasurement: new FormControl(''),
        measurementValue:new FormControl('')
      })
    ])
  });

  get InvoiceDetails() {
    return this.form.get("details") as FormArray;
  }

  constructor(private apiService:RestService, private dialog:MatDialog, private router:Router ) { }

  AddInvoiceDetails() {
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

  ngOnInit() {
    this.apiService.GetAll<any[]>("/api/Customers/dataO?$select=id,customerName").subscribe(a => {
      this.Customers = a;
    });

    this.apiService.GetAll<any[]>("/api/stores?$select=ID,Name").subscribe(a=>{
      this.Stores =a;
    });
  }

  GetQuantityDialog(index) {
    let measurementInfo: MeasurementInfo = {
      MainMeasurementName: this.InvoiceDetails.controls[index].get("measurementName").value,
      MeasurementType: this.InvoiceDetails.controls[index].get("typeOfMeasurement").value,
      MeasurementValue:this.InvoiceDetails.controls[index].get("measurementValue").value
    }
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
    // this.apiService.GetAll("/api/SupplymentInvoice/GetByProductName")
  }
  productNameChanged(product, index) {
    if (product != undefined) {
      this.InvoiceDetails.controls[index].get("barCode").setValue(product.barCode);
      this.InvoiceDetails.controls[index].get("productID").setValue(product.productID);
      this.InvoiceDetails.controls[index].get("measurementName").setValue(product.name);
      this.InvoiceDetails.controls[index].get("measurementValue").setValue(product.value);
      this.InvoiceDetails.controls[index].get("typeOfMeasurement").setValue(product.mainType);
    }
  }
  searchBarCode(barCode) {

    this.apiService.GetAll<any>(`/api/SupplymentInvoice/GetByBarCode/${barCode.term}`).subscribe(a => {
      this.Products = a;
    });
  }

  clearProductName(index) {

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
    this.apiService.PostData("/api/CustomerInvoice", this.form.value).subscribe(a => {

      this.router.navigate(['/customerInvoice']);
    });
  }


}
