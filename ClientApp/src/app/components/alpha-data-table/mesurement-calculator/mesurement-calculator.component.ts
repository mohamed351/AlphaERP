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
  @Input('SellingPrice') SellingPrice:number = 0;
  @Input('PurchasingPrice') PurchasingPrice:number = 0;
  @Input('SellingMeasurement') SellingMesurementID;
  @Input('PurchasingMeasurement') PurchasingMeasurementID;
  calculatedSellingPrice:number = 0;
  calculatedPurchasingPrice:number = 0;
 mainMeasurement:any;
  

  
  public filterArray:any[] 
  public selectedId:number = null;
  public valueOfInput:number = null;

  constructor() { 
    
  }

  ngOnInit() {
   
    this.filterArray = this.measurementValues.filter(a=> a.id != this.IDControl);
   this.mainMeasurement =  this.measurementValues.find(a=>a.isMain == true);
   console.log(this.mainMeasurement);
   
  }
  valueChange(data){
    this.selectedId = data;
    this.valueChangeOut();
    this.valueChanged.emit(null);
   
    
  }
  textChange(data:any){
    if(this.selectedId == null){
   this.formControl.setValue(this.valueOfInput);
   let value =1;
   this.calculatedSellingPrice = ((value * (+this.valueOfInput))/this.mainMeasurement.value)*this.SellingPrice;
   this.calculatedPurchasingPrice =(value * (+this.valueOfInput)/this.mainMeasurement.value)*this.PurchasingPrice;
    }
    else{
    
    let {value}  =this.measurementValues.find(a=>a.id == this.selectedId);
    this.calculatedSellingPrice = ((value * (+this.valueOfInput))/this.mainMeasurement.value)*this.SellingPrice;
    this.calculatedPurchasingPrice =(value * (+this.valueOfInput)/this.mainMeasurement.value)*this.PurchasingPrice;
    this.formControl.setValue(value * (+this.valueOfInput));

  
    }
    this.valueChanged.emit(null);

  }
  public valueChangeOut(){
    if(this.selectedId == null){
      this.formControl.setValue(this.valueOfInput);
      let value =1;
      this.calculatedSellingPrice = ((value * (+this.valueOfInput))/this.mainMeasurement.value)*this.SellingPrice;
      this.calculatedPurchasingPrice =(value * (+this.valueOfInput)/this.mainMeasurement.value)*this.PurchasingPrice;
       }
       else{
       
       let {value}  =this.measurementValues.find(a=>a.id == this.selectedId);
       this.calculatedSellingPrice = ((value * (+this.valueOfInput))/this.mainMeasurement.value)*this.SellingPrice;
       this.calculatedPurchasingPrice =(value * (+this.valueOfInput)/this.mainMeasurement.value)*this.PurchasingPrice;
       console.log(this.calculatedPurchasingPrice);
       this.formControl.setValue(value * (+this.valueOfInput))
      
       }
      
  }

}
