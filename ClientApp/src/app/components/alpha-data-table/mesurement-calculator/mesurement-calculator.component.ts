import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-mesurement-calculator',
  templateUrl: './mesurement-calculator.component.html',
  styleUrls: ['./mesurement-calculator.component.css']
})
export class MesurementCalculatorComponent implements OnInit {

  @Input('formControlValue') formControl:FormControl = null;
  @Input('IDControl') IDControl:number = null;
  @Input('measurementValue') measurementValues:any[] = null;
  @Output('valueChanged') valueChanged = new EventEmitter();
  public filterArray:any[] 
  public selectedId:number = null;
  public valueOfInput:number = null;

  constructor() { 
   
  }

  ngOnInit() {
   
    this.filterArray = this.measurementValues.filter(a=> a.id != this.IDControl);
   
  }
  valueChange(data){
    this.selectedId = data;
    this.valueChangeOut();
    this.valueChanged.emit(null);
   
    
  }
  textChange(data:any){
    if(this.selectedId == null){
   this.formControl.setValue(this.valueOfInput);
    }
    else{
    
    let {value}  =this.measurementValues.find(a=>a.id == this.selectedId);
    this.formControl.setValue(value * (+this.valueOfInput))
  
    }
    this.valueChanged.emit(null);

  }
  public valueChangeOut(){
    if(this.selectedId == null){
      this.formControl.setValue(this.valueOfInput);
       }
       else{
       
       let {value}  =this.measurementValues.find(a=>a.id == this.selectedId);
       this.formControl.setValue(value * (+this.valueOfInput))
      
       }
      
  }

}
