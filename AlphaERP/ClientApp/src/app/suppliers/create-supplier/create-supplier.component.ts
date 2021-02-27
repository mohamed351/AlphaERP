import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Supplier } from 'src/app/models/suppliers/supplier';

import {RestService} from '../../services/rest-service.service';
@Component({
  selector: 'app-create-supplier',
  templateUrl: './create-supplier.component.html',
  styleUrls: ['./create-supplier.component.css']
})
export class CreateSupplierComponent implements OnInit {
  forms:FormGroup = new FormGroup({
    supplierName:new FormControl('',[Validators.required]),
    phone:new FormArray([]),
    address:new FormArray([])
  });
  constructor(private router:Router, private supplierServer:RestService , private toastr: ToastrService) { }

  get supplierName(){
    return this.forms.get("supplierName")
  }
  get Phones(){
    return this.forms.get("phone") as FormArray
  }
  get Addresses(){
    return this.forms.get("address") as FormArray
  }

  AddPhone(supplierPhone:HTMLInputElement){
    if(supplierPhone.validity.valid){
      console.log(supplierPhone.value)
      this.Phones.push(new FormGroup({
        phone:new FormControl(supplierPhone.value, [Validators.required])
      }));
      supplierPhone.value="";
    }
    else{
      this.toastr.error("The Phone is not valid", "Not valid Input");
    }
  }
  AddAddress(supplierAddress:HTMLInputElement)
  {
    if(supplierAddress.validity.valid){
      this.Addresses.push(new FormGroup({
        address:new FormControl(supplierAddress.value,[Validators.required])
      }));
      supplierAddress.value ="";
    }
    else{
      this.toastr.error("The Address is not valid", "Not valid Input");
    }
   
  }
  RemovePhone(phoneElement){
    
   this.Phones.removeAt(this.Phones.controls.findIndex(a=> a == phoneElement)) ;
  }
  RemoveAddress(AddressElement){
    this.Addresses.removeAt(this.Addresses.controls.findIndex(a=> a == AddressElement)) ;

   }


  OnSubmitForm(){
     this.supplierServer.PostData<Supplier>("/api/Supplier",this.forms.value).subscribe(a=>{
      console.log(a);
      this.router.navigate(["/suppliers"]);
      this.toastr.success("Successfull Creating Supplier","Create Operation");
     });
  }

  ngOnInit() {
  
  }

}
