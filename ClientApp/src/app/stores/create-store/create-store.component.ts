import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from 'src/app/services/rest-service.service';
import {StoreCustomValidators} from '../custom.store.validator';
@Component({
  selector: 'app-create-store',
  templateUrl: './create-store.component.html',
  styleUrls: ['./create-store.component.css']
})
export class CreateStoreComponent implements OnInit {
 form :FormGroup = new FormGroup({
   name: new FormControl('',[Validators.required],[this.StoreCustomValidators.storeNameMustBeUnique(null)])
 });
 get StoreName(){
   return this.form.get('name');
 }
  constructor(private StoreCustomValidators:StoreCustomValidators, 
    private storeService:RestService,
    private router:Router ) { }

  ngOnInit() {
  }
  SubmitData(){
    this.storeService.PostData("/api/Stores",this.form.value).subscribe(a=>{
     this.router.navigate(["/stores"]);
    });
  }

}
