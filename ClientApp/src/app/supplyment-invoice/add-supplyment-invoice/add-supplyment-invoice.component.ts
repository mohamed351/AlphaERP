import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
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
  Stores:any[] =[];
  Products:any[] = [];
  ProductSerials:any[]= [];
  form:FormGroup = new FormGroup({
      supplierId:new FormControl('',[Validators.required]),
      storeId:new FormControl('',[Validators.required]),
      Invoicedate:new FormControl('',[Validators.required]),
      details:new FormArray([
        new FormGroup({
          ProductID:new FormControl('',[Validators.required]),
          Quantity:new FormControl('',[Validators.required]),
          ExpireDate:new FormControl(''),
          ProductSerial:new FormControl('')
    
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
    this.apiService.GetAll<any[]>("http://localhost:5000/api/productOData?$expand=ProductMeasurements&$select=ID,ProductName,TypeOfMeasurement,ProductMeasurements").subscribe(a=>{
      this.Products = a;
    });
    
  }
  AddInvoiceDetails(){
    this.InvoiceDetails.push( new FormGroup({
      ProductID:new FormControl('',[Validators.required]),
      Quantity:new FormControl('',[Validators.required]),
      ExpireDate:new FormControl(''),
      ProductSerial:new FormControl('')

    }))
  }
  SerilaFilter(filterSerial:string){
    
  }
 

}
