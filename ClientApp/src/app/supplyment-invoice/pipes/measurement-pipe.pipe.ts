import { AsyncPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { RestService } from 'src/app/services/rest-service.service';
@Pipe({
  name: 'measurementPipe',
  pure:true
})
export class MeasurementPipePipe implements PipeTransform {
  private asyncPipe: AsyncPipe;
  constructor(private RestService:RestService){

  }

  async transform(value: any, ...args: any[]): Promise<any|null> {
    if(value === "" || value === undefined || value === null){
      return null;
    }
   return this.RestService.GetAll<any>(`/api/Measurement/GetMainType/${value}`).toPromise().then(a=>{

     return a.measurementText;
   }).catch(a=>{
    
    
     
   })
    
   
  }

}
