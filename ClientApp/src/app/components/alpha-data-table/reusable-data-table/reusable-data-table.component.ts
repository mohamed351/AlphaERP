import { DataSource } from '@angular/cdk/table';
import { AfterViewInit, Component, Inject, Input, OnInit, Output, ViewChild  , EventEmitter} from '@angular/core';
import { MatDialog, MatDialogRef, MatPaginator, MatTable, MAT_DIALOG_DATA } from '@angular/material';
import { DataTable } from 'src/app/models/datatable';
import { DataTableService } from 'src/app/services/data-table.service';
import { RestService } from 'src/app/services/rest-service.service';
import {TypeOfColumn,ColumnType} from './columnType';
import {delay} from 'rxjs/operators';
import {ReusableDailogBoxComponent,DialogData} from '../reusable-dailog-box/reusable-dailog-box.component'
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'alpha-dataTable',
  templateUrl: './reusable-data-table.component.html',
  styleUrls: ['./reusable-data-table.component.css'],

})
export class ReusableDataTableComponent implements OnInit , AfterViewInit  {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatTable) table: MatTable<any>;
  @Input("endPoint") endPoint:string;
  @Input("columnsName") columnsName:ColumnType[];
  @Input("componentName") compoentName:string;
  @Input("endPointDelete") endPointDelete:string;
  @Output("afterDeleteMethod") afterDelete: EventEmitter<any> = new EventEmitter();
  @Input("reportURL") reportUrl: string = "";
  displayName= ["customerName"];

  constructor(public restAPI:RestService ,
     public dataTable:DataTableService<any>
     , public dailog:MatDialog,
     public translate: TranslateService) {


  }
  get ColumnType(){
    return TypeOfColumn;
  }
  get Allcolumns(){
    return this.columnsName.map((a)=>a.columnName)
  }
  Searchbout(event){
    this.restAPI.GetDataTable<DataTable<any>>(10, 0,this.endPoint,event.value).pipe(
      delay(150)
    ).subscribe(a=>{
      this.dataTable = new DataTableService<any>();
      this.dataTable.data = a.data;
      this.tableSize = a.totalCount;
      this.dataTable.paginator = this.paginator;

    });

  }
  ngAfterViewInit() {
    this.restAPI.GetDataTable<DataTable<any>>(10, 0,this.endPoint,"").pipe(
      delay(150)
    ).subscribe(a=>{
      this.dataTable = new DataTableService<any>();
      this.dataTable.data = a.data;
      this.tableSize = a.totalCount;
      this.dataTable.paginator = this.paginator;

    });
  }

  public tableSize: number = 0;

  ngOnInit() {


  }

  GetData(data: any) {
    this.restAPI.GetDataTable<DataTable<any>>(data.pageSize, data.pageIndex,this.endPoint,"").pipe(
      delay(150)
    ).subscribe(a=>{
      this.dataTable = new DataTableService<any>();
      this.dataTable.data = a.data;
      this.tableSize = a.totalCount;
      this.dataTable.paginator = this.paginator;

    });
  }
 GetAllData(){
  this.restAPI.GetDataTable<DataTable<any>>(10, 0,this.endPoint,"").pipe(
    delay(150)
  ).subscribe(a=>{
    this.dataTable = new DataTableService<any>();
    this.dataTable.data = a.data;
    this.tableSize = a.totalCount;
    this.dataTable.paginator = this.paginator;

  });
 }

  OnDeleteClick(data:any){

    let message:DialogData ={
      message:"Are you sure that you want to Delete ?"
    }
   this.dailog.open(ReusableDailogBoxComponent,{
     width:"500px",
     data:message
   }).afterClosed().subscribe(result =>{
       if(result.type == 0){
        this.restAPI.DeleteData(this.endPointDelete,data).subscribe(a=>{
          this.GetAllData();
          this.afterDelete.emit({message:"successfull deleting" , id:data})
        });


       }
   });
  }
  ShowReport(data:any) {
    window.open(`${this.reportUrl}${data}`, "_blank");
  }


}


