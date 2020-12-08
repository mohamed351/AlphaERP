import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


   
  constructor(private http:HttpClient) { }

  IsAuthenticated(){
     if(localStorage.getItem("Token") == null)
       return false;
     else
       return true;
  }

  Login(login:{userName:string, password:string}){
   return this.http.post("/api/Auth/login",login);
  }

  LogOut(){
    localStorage.removeItem("Token");
     
  }
  GetToken(){
    return JSON.parse(localStorage.getItem("Token"));
  }
  AssignToken(token:any){
    localStorage.setItem("Token",JSON.stringify(token));
    
  }


}
