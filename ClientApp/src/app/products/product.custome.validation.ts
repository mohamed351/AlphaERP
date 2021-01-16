import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AsyncValidatorFn, ValidationErrors , AbstractControl} from "@angular/forms";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";


@Injectable({providedIn:"root"})
export class ProductCustomeValidation {
    constructor(private http:HttpClient) {
        
    }
    ValidateProductName(IDData):AsyncValidatorFn{
        if(IDData == null){
        return (  AbstractControl: AbstractControl):Promise<ValidationErrors | null> | Observable<ValidationErrors | null> =>{
            return this.http.get<ValidationErrors |null>(`/api/Products/validateName/${AbstractControl.value}`).pipe(
                map(a=>{
                    if(a){
                   return null;
                    }else{
                          AbstractControl.hasError("ProductName Should be unique");
                        return { Unique: "ProductName Should be unique" };
                    }
                })
            )
        }
    }
    else{

        return (  AbstractControl: AbstractControl):Promise<ValidationErrors | null> | Observable<ValidationErrors | null> =>{
            return this.http.get<ValidationErrors |null>(`/api/Products/validateName/${AbstractControl.value}?ID=${IDData}`).pipe(
                map(a=>{
                    if(a){
                   return null;
                    }else{
                          AbstractControl.hasError("ProductName Should be unique");
                        return { Unique: "ProductName Should be unique" };
                    }
                })
            )
        }

    }

    }
    ValidateBarCode(){

    }


}