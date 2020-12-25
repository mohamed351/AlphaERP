import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Measurement } from 'src/app/models/measurements';
import { TypeOfMeasurements } from 'src/app/models/typeOfMeasurements';

@Component({
  selector: 'app-calcuate-measure',
  templateUrl: './calcuate-measure.component.html',
  styleUrls: ['./calcuate-measure.component.css']
})
export class CalcuateMeasureComponent implements OnInit {
@Input("mesurements") mesurments:Measurement[] =[]
@Output("ValueChange") ValueChange = new EventEmitter<SelectedMesaurement>();
@Input("currentId") currentId:number =null; 
@Input("connectedFormControl") formControl:FormControl;
public selectedMeasurement:Measurement = null;
 public  valueOfElement:number = 0 ;

  constructor() { 
   
  }

  ngOnInit() {
    if(this.currentId != null){
      this.mesurments = this.mesurments.filter(a=>a.id  != this.currentId);

    }
    
  }
  private DeleteCurrentMeasurementFromList(){
  }
  selectedValue(data){
    
    this.selectedMeasurement = this.mesurments.find( a=>a.id == data);
    this.ValueChange.emit({
      id :this.selectedMeasurement.id,
      name: this.selectedMeasurement.name,
      value: this.valueOfElement
    })
    
  }
  onTextChange(){
    if(this.selectedMeasurement != null){
    this.ValueChange.emit({
      id :this.selectedMeasurement.id,
      name: this.selectedMeasurement.name,
      value: +this.valueOfElement
    });
    }
    else
    {
      this.ValueChange.emit({
        id :-1,
        name: "",
        value: +this.valueOfElement
      });
    }
  
  }
  
  
  

}

export interface SelectedMesaurement{
  id:number,
  value:number,
  name:string;
}
