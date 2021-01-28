import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgOption, NgSelectComponent } from '@ng-select/ng-select';
import { Supplier } from 'src/app/models/suppliers/supplier';
import { RestService } from 'src/app/services/rest-service.service';

@Component({
  selector: 'app-add-supplyment-invoice',
  templateUrl: './add-supplyment-invoice.component.html',
  styleUrls: ['./add-supplyment-invoice.component.css']
})
export class AddSupplymentInvoiceComponent implements OnInit {

  constructor(private apiService:RestService) { }
  Suppliers:any[] =[];
  Stores: any[] = [];
  Products: any[] = [];
  selectedProduct: any = null;

  form:FormGroup = new FormGroup({
      supplierId:new FormControl('',[Validators.required]),
      storeId:new FormControl('',[Validators.required]),
      Invoicedate:new FormControl('',[Validators.required]),
      details:new FormArray([
        new FormGroup({
            productID:new FormControl('',[Validators.required]),
            quantity:new FormControl('',[Validators.required]),
             expireDate: new FormControl(''),
            barCode:new FormControl('',[Validators.required]),
          price: new FormControl(''),
          measurementName:new FormControl(''),
            productSerial:new FormControl(''),
            typeOfMeasurement:new FormControl('')
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
      typeOfMeasurement:new FormControl(''),
      price:new FormControl(''),
      productSerial:new FormControl('')

    }))
  }

  searchProductName(productName) {
    this.apiService.GetAll<any>(`/api/SupplymentInvoice/GetByProductName/${productName.term}`).subscribe(a => {
      this.Products = a;
    });
    // this.apiService.GetAll("/api/SupplymentInvoice/GetByProductName")
  }
  productNameChanged(product, index) {
    if (product != undefined) {
      this.selectedProduct = product;
      this.InvoiceDetails.controls[index].get("barCode").setValue(product.barCode);
      this.InvoiceDetails.controls[index].get("productID").setValue(product.productID);
      this.InvoiceDetails.controls[index].get("measurementName").setValue(product.name);
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
  }
  deleteRow(index) {
    this.InvoiceDetails.removeAt(index);
  }

  }





