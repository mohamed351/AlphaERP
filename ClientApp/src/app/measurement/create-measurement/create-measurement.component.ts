import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RestService } from 'src/app/services/rest-service.service';

@Component({
  selector: 'app-create-measurement',
  templateUrl: './create-measurement.component.html',
  styleUrls: ['./create-measurement.component.css']
})
export class CreateMeasurementComponent implements OnInit {
  form = new FormGroup({
    name:new FormControl('',[Validators.required]),
    mainType:new FormControl('',[Validators.required])
  })



  get Name(){
    return this.form.get("name");
  }
  get MainType(){
    return this.form.get("mainType");
  }
  constructor(private router:Router, private apiService:RestService , private toastr: ToastrService) { 

  }

  SubmitData(){
    this.apiService.PostData("/api/Measurement/",this.form.value).subscribe(a=>{
        this.toastr.success("Successfull Adding","The Measurement has been Added");
        this.router.navigate(["/measurement"]);
    });
  }

  ngOnInit() {
  }

}
