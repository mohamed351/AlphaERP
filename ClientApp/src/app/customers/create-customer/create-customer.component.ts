import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

import { CustomersService } from './../customers.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit, OnDestroy {
  //subscriptions that is going to be destoried after change to another component
  customerSubscription: Subscription
  messageSubscription: Subscription;
  titleSubscription: Subscription;
  InvalidMessagePhone: Subscription;
  InvalidMessageAddress: Subscription;
  InvalidTitleAddress: Subscription;
  InvalidTitlePhone: Subscription;
  //forms group that is deal with customer create operation
  forms:FormGroup = new FormGroup({
    customerName:new FormControl('',[Validators.required]),
    phone:new FormArray([]),
    address:new FormArray([])
  });
  constructor(private router: Router,
    private Customer:CustomersService,
    private toastr: ToastrService,
    private translate: TranslateService) { }

    ngOnInit() {

    }


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
    else {
      this.translate.get("InvalidPhone").subscribe(message => {
        this.translate.get("NotvalidInput").subscribe(title => {
          this.toastr.error(message, title);
        })
      })

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
    else {
     this.InvalidMessageAddress= this.translate.get("InvalidAddress").subscribe(message => {
      this.InvalidTitleAddress =  this.translate.get("NotvalidInput").subscribe(title => {
          this.toastr.error(message, title);
        })
      })

    }

  }
  RemovePhone(phoneElement){

   this.Phones.removeAt(this.Phones.controls.findIndex(a=> a == phoneElement)) ;
  }
  RemoveAddress(AddressElement){
    this.Addresses.removeAt(this.Addresses.controls.findIndex(a=> a == AddressElement)) ;

   }


  OnSubmitForm() {

    this.customerSubscription = this.Customer.CreateCustomer(this.forms.value).subscribe(returnedCustomer => {
   this.messageSubscription=  this.translate.get("SuccessfullyAddedCustomer").subscribe(message => {
     this.titleSubscription= this.translate.get("CreateOperation").subscribe(operation => {
       this.toastr.success(message, operation);
       this.router.navigate(["/customers"]);
        });
      });
    })
  }




  ngOnDestroy(): void {
    this.customerSubscription.unsubscribe();
    this.messageSubscription.unsubscribe();
    this.titleSubscription.unsubscribe();
    this.InvalidMessageAddress.unsubscribe();
    this.InvalidTitleAddress.unsubscribe();
  }

}
