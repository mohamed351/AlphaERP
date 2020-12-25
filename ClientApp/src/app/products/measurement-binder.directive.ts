import { Directive , } from '@angular/core';
import { FormArray } from '@angular/forms';
import { SelectedMesaurement } from '../components/alpha-data-table/calcuate-measure/calcuate-measure.component';
import { MeasurementService } from '../services/measurement.service';

@Directive({
  selector: '[appMeasurementBinder]'
})
export class MeasurementBinderDirective {

  constructor(private measurementServices:MeasurementService) {

   }

}
export interface MeasurementValue{
  OrignMeasurementID:number,
  OriginMeasurementValue:number;
  Calculator:SelectedMesaurement
}
