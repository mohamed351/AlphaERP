import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from 'src/app/services/rest-service.service';
import {StoreCustomValidators} from '../custom.store.validator';
@Component({
  selector: 'app-edit-store',
  templateUrl: './edit-store.component.html',
  styleUrls: ['./edit-store.component.css']
})
export class EditStoreComponent implements OnInit {

  constructor(private StoreCustomValidators:StoreCustomValidators, 
    private storeService:RestService,
    private router:Router , private activeRouter:ActivatedRoute) { }
   data:any = null;
  ngOnInit() {
    let id = this.activeRouter.snapshot.params["id"];
    this.storeService.GetAll("/api/Stores?$filter=id eq "+id+"&$select=id,name").subscribe(a=>{
     this.data =a;
   
     this.setData();
     this.StoreName.setAsyncValidators(this.StoreCustomValidators.storeNameMustBeUnique(this.data[0].ID));
    });
  }

  form :FormGroup = new FormGroup({
    id:new FormControl('',[Validators.required]),
    name: new FormControl('',[Validators.required])
  });
  get StoreName(){
    return this.form.get('name');
  }
  get ID(){
    return this.form.get("id");
  }

  SubmitData(){
    this.storeService.PutData("/api/Stores",this.ID.value,this.form.value).subscribe(a=>{
     this.router.navigate(["/stores"]);
    });
  }
  setData(){
  
    this.StoreName.setValue(this.data[0].Name);
    this.ID.setValue(this.data[0].ID);
  }


}
