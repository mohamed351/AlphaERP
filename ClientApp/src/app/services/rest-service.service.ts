import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AlphaDataTable} from './data-table.service';

@Injectable({
  providedIn: 'root'
})
export class RestService{

  constructor(private httpClient:HttpClient) { }
  
   GetDataTable<T>(pageSize:number, start:number,endPoint:string){
    return this.httpClient.get<T>(`${endPoint}?pageSize=${pageSize}&start=${start}`);
  }
  PostData<T>(endPoint:string,data:T){
    return this.httpClient.post<T>(endPoint,data);
  }
  GetByID<T>(endPoint:string,id:any){
    return this.httpClient.get<T>(`${endPoint}/${id}`);
  }
  PutData<T>(endPoint:string,id:any, data:T){
    return this.httpClient.put<T>(`${endPoint}/${id}`,data);
  }

  

}
