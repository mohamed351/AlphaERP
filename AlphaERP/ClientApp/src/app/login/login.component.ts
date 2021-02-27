import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService , private touster:ToastrService, private router:Router) { }
  form:FormGroup = new FormGroup({
    userName: new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])
  });
  get UserName(){
    return this.form.get("userName");
  }
  get Password(){
    return this.form.get("password");
  }

  SubmitData(){
    this.auth.Login(this.form.value).subscribe(c=>{
      this.auth.AssignToken(c);
      this.touster.success("Hello","successful Login");
      this.router.navigate(["/"]);
  
    },(errors)=>{
     if(errors.status == 401){
      this.touster.error("User Name or Password is wrong",errors.title);
     }
    });
  }

  ngOnInit() {
  }

}
