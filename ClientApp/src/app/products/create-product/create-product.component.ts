import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ImageCroppedEvent } from 'ngx-image-cropper/lib/interfaces/image-cropped-event.interface';
import { SelectedMesaurement } from 'src/app/components/alpha-data-table/calcuate-measure/calcuate-measure.component';
import { Category } from 'src/app/models/categories/category';
import { Measurement } from 'src/app/models/measurements';
import { MeasurementService } from 'src/app/services/measurement.service';
import { RestService } from 'src/app/services/rest-service.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
  providers:[MeasurementService]
})
export class CreateProductComponent implements OnInit , AfterViewInit {
  public categoryInfo:Category[] =[];
  public mesaurementsSelection:Measurement[] =[]
  @ViewChild("productNumber",{static:false}) productNumber:ElementRef;
  imageChangedEvent: any = '';
    croppedImage: any = '';
    IsCropperDivShown:boolean =false;
    imageBase64:string = null;
    barcodeValue:string ="";
    form:FormGroup = new FormGroup({
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
  constructor(private restAPI:RestService, private router:Router,public mesaurementCalcuation:MeasurementService) { }
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
            barCode :new FormControl('',[Validators.required])
           }))
        })
       this.mesaurementCalcuation.ReactiveForm = this.Measurements
       this.mesaurementCalcuation.mainType = event.value;
    });
  }
  testing(data){
    console.log(data);
  }
  testing2(){
      console.log(this.mesaurementCalcuation);
  }
  Testing3(data:SelectedMesaurement , inputElement:FormControl){
    console.log(data);
    console.log(inputElement);
  
    this.mesaurementCalcuation.ReactiveForm =  this.Measurements;
    this.mesaurementCalcuation.SelectedMesaurement = data;
     this.mesaurementCalcuation.SetMeasurmentValue(inputElement);
  }


}
