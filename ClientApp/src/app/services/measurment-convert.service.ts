import { RestService } from './rest-service.service';
import { RefundMeasurement } from './../models/returnedInvoices/measurements';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TypeOfMeasurements } from '../models/typeOfMeasurements';

@Injectable({
  providedIn: 'root'
})
export class MeasurmentConvertService {
 public Measurement: RefundMeasurement[];
  constructor(private RestService: RestService) {
    RestService.GetAll<RefundMeasurement[]>("/api/Measurement/DataO").subscribe(b => {
      this.Measurement = b;
    });

  }

  ConvertToMain(qtu:number,measurmentType:number) {
    var mesaurement = this.Measurement.find(a => a.isMain && a.mainType == measurmentType);
    return qtu / mesaurement.defaultValue;
  }



}
