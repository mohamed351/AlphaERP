import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/models/customers/customer';
import { RestService } from 'src/app/services/rest-service.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  forms:FormGroup = new FormGroup({
    customerName:new FormControl('',[Validators.required]),
    phone:new FormArray([]),
    address:new FormArray([])
  });
  constructor(private router:Router, private customerService:RestService , private toastr: ToastrService) { }

  get CustomerName(){
    return this.forms.get("customerName")
  }
  get Phones(){
    return this.forms.get("phone") as FormArray
  }
  get Addresses(){
    return this.forms.get("address") as FormArray
  }

  AddPhone(customerPhone:HTMLInputElement){
    if(customerPhone.validity.valid){
      console.log(customerPhone.value)
      this.Phones.push(new FormGroup({
        phone:new FormControl(customerPhone.value, [Validators.required])
      }));
      customerPhone.value="";
    }
    else{
      this.toastr.error("The Phone is not valid", "Not valid Input");
    }
  }
  AddAddress(customerAddress:HTMLInputElement)
  {
    if(customerAddress.validity.valid){
      this.Addresses.push(new FormGroup({
        address:new FormControl(customerAddress.value,[Validators.required])
      }));
      customerAddress.value ="";
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
     this.customerService.PostData<Customer>("/api/Customers",this.forms.value).subscribe(a=>{
      console.log(a);
      this.router.navigate(["/customers"]);
      this.toastr.success("Successfull Creating Customers","Create Operation");
     });
     
  }

  ngOnInit() {
  
  }

}
