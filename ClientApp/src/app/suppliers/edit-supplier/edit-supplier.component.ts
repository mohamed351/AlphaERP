import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute , Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Supplier } from 'src/app/models/suppliers/supplier';
import { SupplierEdit } from 'src/app/models/suppliers/supplierEdit';
import { RestService } from 'src/app/services/rest-service.service';

@Component({
  selector: 'app-edit-supplier',
  templateUrl: './edit-supplier.component.html',
  styleUrls: ['./edit-supplier.component.css']
})
export class EditSupplierComponent implements OnInit {

  forms:FormGroup = new FormGroup({
    id:new FormControl('',[Validators.required]),
    supplierName:new FormControl('',[Validators.required]),
    phone:new FormArray([]),
    address:new FormArray([])
  });
   supplier:SupplierEdit = null;
  constructor(private activeRouter:ActivatedRoute,private router:Router, private apiService:RestService , private toaster:ToastrService) { 

  }

  ngOnInit() {
    this.apiService.GetByID<SupplierEdit>("/api/Supplier",this.activeRouter.snapshot.params["id"]).subscribe(a=>{
      this.supplier = a;
      console.log(a);
      this.MapObjectsToFormELement();
    });
  }
  get supplierName(){
    return this.forms.get("supplierName")
  }
  get Phones(){
    return this.forms.get("phone") as FormArray
  }
  get Addresses(){
    return this.forms.get("address") as FormArray
  }
  get ID(){
    return this.forms.get("id")
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
      this.toaster.error("The Phone is not valid", "Not valid Input");
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
    else
    {
      this.toaster.error("The Address is not valid", "Not valid Input");
    }
  }
  RemovePhone(phoneElement){
    
   this.Phones.removeAt(this.Phones.controls.findIndex(a=> a == phoneElement)) ;
   this.toaster.warning("The Phone has removed if you want to remove it Save", "Notice");
  }

  RemoveAddress(AddressElement){
    
    this.Addresses.removeAt(this.Addresses.controls.findIndex(a=> a == AddressElement)) ;
    this.toaster.warning("The Address has removed if you want to remove it Save", "Notice");

   }

  OnSubmitForm(){
     this.apiService.PutData<Supplier>("/api/Supplier",this.ID.value,this.forms.value).subscribe(a=>{
      this.toaster.success("Successful Edit Supplier","Successful Edit");
        this.router.navigate(["/suppliers"]);

     },(error)=>{
       console.log(error);
     });
  }
  private MapObjectsToFormELement(){
   
    this.ID.setValue(this.supplier.id);
    this.supplierName.setValue(this.supplier.supplierName);
    
    this.supplier.phone.forEach(element => {
      this.Phones.push(new FormGroup({
        phone:new FormControl(element.phone, [Validators.required])
      }));
    });
  
    this.supplier.address.forEach(element => {
      this.Addresses.push(new FormGroup({
        address:new FormControl(element.address,[Validators.required])
      }));
    });
    
  }


}
