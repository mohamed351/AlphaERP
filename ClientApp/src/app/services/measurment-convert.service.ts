import { RestService } from './rest-service.service';
import { RefundMeasurement } from './../models/returnedInvoices/measurements';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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



}
