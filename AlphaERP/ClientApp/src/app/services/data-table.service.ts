import { DataSource } from '@angular/cdk/collections';
import { Injectable } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { Observable , of as observableOf, merge } from 'rxjs';
import { map } from 'rxjs/operators';


export class AlphaDataTable<T>{
  public data: T[];
  public totalCount: number;
}
@Injectable({
  providedIn: 'root'
})
export class DataTableService<T> extends DataSource<T>{
  public data: T[] = null;
  public paginator: MatPaginator;
  public totalCount: number = 0;
  constructor() {
    super();
   }

 public connect(): Observable<T[]> {
    console.log(this.paginator);
    const dataMutations = [
      observableOf(this.data),
      observableOf( this.paginator.page),
      
      
    ];


    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.data);
    }));
  }
  public getPagedData=(data: T[])=> {
      
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data;
}
  disconnect(){

  }
}

