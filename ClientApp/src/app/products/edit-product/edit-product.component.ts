import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { MesurementCalculatorComponent } from 'src/app/components/alpha-data-table/mesurement-calculator/mesurement-calculator.component';
import { Category } from 'src/app/models/categories/category';
import { Measurement } from 'src/app/models/measurements';
import { Product } from 'src/app/models/product/product';
import { RestService } from 'src/app/services/rest-service.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
  animations:[
    trigger("listAdded",[
      state("in",style({
        "opacity":1,
        "transform":"translateX(0)"
      })),
      transition("void => *",[ style({
        "opacity":"0",
        "transform":"translateX(100px)"
      }),
        animate(400)])
    ])
  ]
})
export class EditProductComponent implements OnInit {

  public categoryInfo:Category[] =[];
  public product:Product = null;
  public mesaurementsSelection:Measurement[] =[]
  @ViewChildren("appcaluclator") Calculators:MesurementCalculatorComponent[] =[];
  @ViewChild("productNumber",{static:true}) productNumber:ElementRef;
  imageChangedEvent: any = '';
    croppedImage: any = '';
    IsCropperDivShown:boolean =false;
    imageBase64:string = null;
    barcodeValue:string ="";
    form:FormGroup = new FormGroup({
      id:new FormControl('',Validators.required),
      productNumber:new FormControl('',Validators.required),
      productName:new FormControl('',Validators.required),
      sellingPrice:new FormControl('',Validators.required),
      purchasingPrice:new FormControl('',Validators.required),
      categoryID:new FormControl('',Validators.required),
      barCode:new FormControl('',Validators.required),
      isValidInPointOfSales:new FormControl(false,Validators.required),
      isValidInStorage:new FormControl(false,Validators.required),
      typeOfMeasurements:new FormControl('',Validators.required),
      isValidOnline:new FormControl(false,Validators.required),
      productImage:new FormControl(''),
      measurements:new FormArray([])

    });
  constructor(private restAPI:RestService, private router:Router, private routerActive:ActivatedRoute) { }
  ngAfterViewInit(): void {
   
  }
 get ProductName(){
   return this.form.get("productName")
 }
 get SellingPrice(){
   return this.form.get("sellingPrice");
 }
 get purchasingPrice(){
   return this.form.get("purchasingPrice");
 }
 get categoryID(){
   return this.form.get("categoryID");
 }
 get barCode(){
   return this.form.get("barCode");
 }
 get ProductImage(){
   return this.form.get("productImage");
 }
 get TypeOfMeasurements(){
   return this.form.get("typeOfMeasurements");
 }
 get IsValidInPointOfSales(){
   return this.form.get("isValidInPointOfSales");

 }
 get IsValidInStorage(){
   return this.form.get("isValidInStorage");
 }
 get IsValidOnline(){
   return this.form.get("isValidOnline");
 }
 get ID(){
   return this.form.get("id");
 }
 get ProductNumber (){
   return this.form.get("productNumber");
 }



  ngOnInit() {
  this.restAPI.GetAll<Category[]>("/api/Categories/flat").subscribe(a=>{
    this.categoryInfo = a;
  });
  this.restAPI.GetByID<Product>("/api/Products", this.routerActive.snapshot.params["id"]).subscribe(a=>{
    this.product = a;
    this.productNumber.nativeElement.value =a.productNumber;
    this.setValues();

  });
 
   
  }

  SubmitData(){

  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
    this.IsCropperDivShown = true;
    document.getElementById("sidevarContainer").style.display ="none";
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }

  get Measurements(){
    return this.form.get("measurements") as FormArray;
  }

  seletionChange(event){
    this.restAPI.GetAll<Measurement[]>("/Product/Measurement/?type="+event.value).subscribe(a=>{
      this.Measurements.clear();
      this.mesaurementsSelection = a;
        a.forEach(c=>{
          this.Measurements.push(new FormGroup({
            id:new FormControl(c.id,[Validators.required]),
            measurementName:new FormControl(c.name,[Validators.required],),
            isKnown: new FormControl(c.isKnown,[Validators.required]),
            value:new FormControl(c.defaultValue,[Validators.required]),
            barCode :new FormControl('',[Validators.required]),
            isMain:new FormControl(c.isMain)
           }))
        })
     
    });
  }

  handleCancelButton(input){
    //
    this.IsCropperDivShown = false;
     input.value = null;
     this.imageBase64 = null;
    document.getElementById("sidevarContainer").style.display= "block";
    this.croppedImage=null;
  }
  handelOkButton(){
 
    document.getElementById("sidevarContainer").style.display= "block";
    this.imageBase64 = this.croppedImage;
    this.IsCropperDivShown= false;
    console.log(this.imageBase64 );
  }
  onSubmitData(){
   
    this.ProductImage.setValue(this.imageBase64);
    console.log(this.form.value);
    this.restAPI.PutData("/api/products",this.form.value.id,this.form.value).subscribe(a=>{
        this.router.navigate(["/products"]);
        
    });
  }

  setValues(){
    this.ID.setValue(this.product.id);
    this.ProductName.setValue(this.product.productName);
    this.purchasingPrice.setValue(this.product.purchasingPrice);
    this.SellingPrice.setValue(this.product.sellingPrice);
    this.categoryID.setValue(this.product.categoryID);
    this.TypeOfMeasurements.setValue(this.product.typeOfMeasurements);
    this.barCode.setValue(this.product.barCode);
    this.IsValidOnline.setValue(this.product.isValidOnline);
    this.IsValidInStorage.setValue(this.product.isValidInStorage);
    this.IsValidInPointOfSales.setValue(this.product.isValidInPointOfSales);
    this.ProductNumber.setValue(this.product.productNumber);
    this.ProductImage.setValue(null);
  }

  DeleteButton(index){
    
    this.Measurements.removeAt(index)
  
  }
 
  changeText(){
    for (const iterator of this.Calculators) {
      iterator.valueChangeOut();
    }
  }

}
