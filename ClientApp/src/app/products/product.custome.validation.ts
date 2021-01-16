import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AsyncValidatorFn, ValidationErrors , AbstractControl, FormGroup, FormArray} from "@angular/forms";
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
    ValidateBarCode(id):AsyncValidatorFn{
        return (AbstractControl:AbstractControl):Promise<ValidationErrors|null>
        |Observable<ValidationErrors |null> =>{
            if(id == null){
            return this.http.get(`/api/Products/validateBarcode/${AbstractControl.value}`).pipe(
                map(a=>{
                    if(a == true){
                        return null
                    }
                    else{
                        AbstractControl.hasError("Bar Code is Duplicated");
                        return { Unique: "Product BarCode Should be unique" };
                    }
                })
            );
            }
            else{

                return this.http.get(`/api/Products/validateBarcode/${AbstractControl.value}?ID=${id}`).pipe(
                    map(a=>{
                        if(a == true){
                            return null
                        }
                        else{
                            AbstractControl.hasError("Bar Code is Duplicated");
                            return { Unique: "Product BarCode Should be unique" };
                        }
                    })
                );

            }
        }
    }

    ValidationbarCodeForm(FormArray:FormArray):ValidationErrors{
        return (AbstractControl:AbstractControl):ValidationErrors|null =>{
            FormArray.controls.forEach(element => {
                let controlString = (<String>AbstractControl.value).trim();
                if(element.get("barcode").value == controlString){
                    AbstractControl.hasError("Bar Code is Duplicated");
                    return { Unique: "ProductName Should be unique" };
                }
                
           });
           return null;
        }
    }


}