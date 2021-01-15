import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { async } from "@angular/core/testing";
import { ValidationErrors,AbstractControl, AsyncValidatorFn, ValidatorFn } from "@angular/forms";
import { Observable, Observer, from  } from "rxjs";
import {map} from 'rxjs/operators';



@Injectable({
    providedIn:'root'
})
export class StoreCustomValidators {
    /**
     *
     */
    constructor(private http:HttpClient) {
        
        
    }

   storeNameMustBeUnique = (
       data
      ):AsyncValidatorFn  =>{
          return  (  AbstractControl: AbstractControl):Promise<ValidationErrors | null> | Observable<ValidationErrors | null>  =>{
        if(data != null){      
        return this.http
          .get<any>("/api/Stores/Verify/" + AbstractControl.value+"?storeID="+data ).pipe(
            map((a) => {
                if (a == true) {
                  return null;
                } else {
                  AbstractControl.hasError("StoreName Should be unique");
                  return { Unique: "StoreName Should be unique" };
                }
          }));
        }
        else{

            return this.http
            .get<any>("/api/Stores/Verify/" + AbstractControl.value).pipe(
              map((a) => {
                  if (a == true) {
                    return null;
                  } else {
                    AbstractControl.hasError("StoreName Should be unique");
                    return { Unique: "StoreName Should be unique" };
                  }
            }));

        }
          
      };
    }
  
}