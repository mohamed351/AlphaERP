import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/models/customers/customer';
import { CustomerEdit } from 'src/app/models/customers/customerEdit';
import { RestService } from 'src/app/services/rest-service.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  customer:CustomerEdit = null;
  forms:FormGroup = new FormGroup({
    id:new FormControl('',[Validators.required]),
    customerName:new FormControl('',[Validators.required]),
    phone:new FormArray([]),
    address:new FormArray([])
  });
  constructor(private router:Router, private activeRouter:ActivatedRoute, private customerService:RestService , private toastr: ToastrService) { }

  ngOnInit() {
    this.customerService.GetByID<CustomerEdit>("/api/Customers",this.activeRouter.snapshot.params["id"]).subscribe(a=>{
      this.customer = a;
      this.MapObjectToCustomer();
    });
      
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
  get ID (){
    return this.forms.get("id");
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
     this.customerService.PutData<Customer>("/api/Customers",this.customer.id,this.forms.value).subscribe(a=>{
  
      this.router.navigate(["/customers"]);
      this.toastr.success("Successfull Edit Customers","Edit Operation");
     });
     
  }
  private MapObjectToCustomer(){

    this.ID.setValue(this.customer.id);
    this.CustomerName.setValue(this.customer.customerName);
    
    this.customer.phone.forEach(element => {
      this.Phones.push(new FormGroup({
        phone:new FormControl(element.phone, [Validators.required])
      }));
    });
  
    this.customer.address.forEach(element => {
      this.Addresses.push(new FormGroup({
        address:new FormControl(element.address,[Validators.required])
      }));
    });
  }

 

}
