import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { SelectedMesaurement } from '../components/alpha-data-table/calcuate-measure/calcuate-measure.component';
import { TypeOfMeasurements } from '../models/typeOfMeasurements';

@Injectable({
  providedIn: 'root'
})
export class MeasurementService {
  public mainType:TypeOfMeasurements =null;
  public ReactiveForm:FormArray = null;
  public SelectedMesaurement:SelectedMesaurement = null;
  constructor() { 
  }
  SetMeasurmentValue(ValueElement:FormControl){
    if(this.SelectedMesaurement != null){
      if(this.SelectedMesaurement.id === -1){
       ValueElement.setValue(this.SelectedMesaurement.value);
      }
      else{
       const {id,value}=  this.SelectedMesaurement;
        this.SetValueOfCurrentMeasurement(id, value,ValueElement);
      }
    }
  }
  private SetValueOfCurrentMeasurement(id,value,ValueElement:FormControl){
    for (const  iterator in this.ReactiveForm.controls) {
      console.log(this.ReactiveForm.controls[iterator].get("id").value);
       console.log(id, value);
      if(this.ReactiveForm.controls[iterator].get("id").value == id){
      
        console.log("Value Will Change",this.ReactiveForm.controls[iterator].get("id").value);
        ValueElement.setValue((this.ReactiveForm.controls[iterator].get("value").value * value).toFixed(0));
      
        break;
      }
    }
  }






}
