import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-reusable-dailog-box',
  templateUrl: './reusable-dailog-box.component.html',
  styleUrls: ['./reusable-dailog-box.component.css']
})
export class ReusableDailogBoxComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ReusableDailogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }
  OKClicked(){
     this.dialogRef.close({type:0,buttonName:"Ok"});
  }
  CancelClicked(){
    this.dialogRef.close({type:1,buttonName:"cancel"})
  }
}

export interface DialogData {
  message:string;
}
