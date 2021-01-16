import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ImageCroppedEvent } from 'ngx-image-cropper/lib/interfaces/image-cropped-event.interface';
import { Category } from 'src/app/models/categories/category';
import { Measurement } from 'src/app/models/measurements';
import { RestService } from 'src/app/services/rest-service.service';
import {trigger,state, style, transition, animate} from '@angular/animations';
import { MesurementCalculatorComponent } from 'src/app/components/alpha-data-table/mesurement-calculator/mesurement-calculator.component';
import {ProductCustomeValidation} from '../product.custome.validation';
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
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
export class CreateProductComponent implements OnInit , AfterViewInit {
  public categoryInfo:Category[] =[];
  public mesaurementsSelection:Measurement[] =[]
  @ViewChild("productNumber",{static:false}) productNumber:ElementRef;
  @ViewChildren("appcaluclator") Calculators:MesurementCalculatorComponent[] =[];
 
  imageChangedEvent: any = '';
    croppedImage: any = '';
    IsCropperDivShown:boolean =false;
    imageBase64:string = null;
    barcodeValue:string ="";
    form:FormGroup = new FormGroup({
      productName:new FormControl('',Validators.required,this.ProductCustomeValidation.ValidateProductName(null)),
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
  constructor(private restAPI:RestService,
     private router:Router,
     private  ProductCustomeValidation :ProductCustomeValidation) { }
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
 get Measurements(){
   return this.form.get("measurements") as FormArray;
 }



  ngOnInit() {
  this.restAPI.GetAll<Category[]>("/api/Categories/flat").subscribe(a=>{
    this.categoryInfo = a;
  });
  this.restAPI.GetAll<any>("/api/Products/number").subscribe(a=>{
    this.productNumber.nativeElement.value =a;
    console.log(this.productNumber);
    console.log(a);
  });
   
  }

  

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
    this.IsCropperDivShown = true;
    document.getElementById("sidevarContainer").style.display ="none";
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
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
    console.log(this.form);
   
    this.ProductImage.setValue(this.imageBase64);
    console.log(this.form.value);
    this.restAPI.PostData("/api/products",this.form.value).subscribe(a=>{
        this.router.navigate(["/products"]);
        
    });
    
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
  DeleteButton(index){
    
    this.Measurements.removeAt(index)
  
  }
 
  changeText(){
  
    for (const iterator of this.Calculators) {
      iterator.valueChangeOut();
    }
  }
  
  }
     
  

  

