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
  Stores:any[] =[];
  Products:any[] = [];
  barCodes:any[][]= [];
  form:FormGroup = new FormGroup({
      supplierId:new FormControl('',[Validators.required]),
      storeId:new FormControl('',[Validators.required]),
      Invoicedate:new FormControl('',[Validators.required]),
      details:new FormArray([
        new FormGroup({
            productID:new FormControl('',[Validators.required]),
            quantity:new FormControl('',[Validators.required]),
            expireDate:new FormControl(''),
            price:new FormControl(''),
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
    this.apiService.GetAll<any[]>("http://localhost:5000/api/productOData?$expand=ProductMeasurements&$select=ID,ProductName,TypeOfMeasurement,ProductMeasurements,SellingPrice").subscribe(a=>{
      this.Products = a;
      
    });
    
  }
  AddInvoiceDetails(){
    this.InvoiceDetails.push( new FormGroup({
      productID:new FormControl('',[Validators.required]),
      quantity:new FormControl('',[Validators.required]),
      expireDate:new FormControl(''),
      typeOfMeasurement:new FormControl(''),
      price:new FormControl(''),
      productSerial:new FormControl('')

    }))
  }
  SerilaFilter(product:any, dataClear:NgSelectComponent, index:number){
    if(product != undefined){
      this.barCodes[index] = product.ProductMeasurements;
       
     
    }
    else{
      this.barCodes[index] = [];
    }
    dataClear.clearModel();
   console.log(dataClear);
  
  }
  selectProductBarCode(data, index){
     this.ConvertArray(index);
  }
   ConvertArray(index){
     let newArray = [];
      this.Products.forEach(a=>{
        newArray.push( ...a.ProductMeasurements);

      });
      this.barCodes[index] = newArray;
      console.log(this.barCodes[index]);
   }
   ChoosebarCodes(data, index:number){
     console.log(data);
   if(data != undefined){
    let productItem = this.Products.find(a=>a.ID == data.ProductID);
     this.InvoiceDetails.controls[index].get("productID").setValue(data.ProductID);
     this.InvoiceDetails.controls[index].get("quantity").setValue(data.Value);
     this.InvoiceDetails.controls[index].get("typeOfMeasurement").setValue(productItem.TypeOfMeasurement);
     this.InvoiceDetails.controls[index].get("price").setValue(productItem.SellingPrice)
     console.log(this.InvoiceDetails.controls[index].get("typeOfMeasurement"));
   }
     
   }
 

}
