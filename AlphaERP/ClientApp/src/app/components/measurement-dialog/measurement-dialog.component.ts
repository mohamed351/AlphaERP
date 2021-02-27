import { RestService } from './../../services/rest-service.service';
import { TypeOfMeasurements } from './../../models/typeOfMeasurements';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-measurement-dialog',
  templateUrl: './measurement-dialog.component.html',
  styleUrls: ['./measurement-dialog.component.css']
})
export class MeasurementDialogComponent implements OnInit {
  mesurementList = [];
  quntityText = 0;
  selectedvalue = "";
  constructor(public dialogRef: MatDialogRef<MeasurementDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MeasurementInfo ,private RestService:RestService) { }

  ngOnInit() {
    this.RestService.GetAll<any[]>("/Product/Measurement?type=" + this.data.MeasurementType).subscribe(a => {
      this.mesurementList = a;
    });
  }
  CalcuateValue() {
    console.log(this.selectedvalue);
    console.log(this.quntityText);
    let { defaultValue } = this.mesurementList.find(a => a.id == this.selectedvalue)
    let quantityValue = defaultValue * this.quntityText;
    this.dialogRef.close(quantityValue /this.data.MeasurementValue);
  }

}
export interface MeasurementInfo{
  MeasurementType: TypeOfMeasurements,
  MainMeasurementName: String,
  MeasurementValue: number,
}
