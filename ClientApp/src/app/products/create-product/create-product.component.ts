import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ImageCroppedEvent } from 'ngx-image-cropper/lib/interfaces/image-cropped-event.interface';
import { Category } from 'src/app/models/categories/category';
import { RestService } from 'src/app/services/rest-service.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent implements OnInit , AfterViewInit {
  public categoryInfo:Category[] =[];
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
      productImage:new FormControl('')

    });
  constructor(private restAPI:RestService, private router:Router) { }
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


}
