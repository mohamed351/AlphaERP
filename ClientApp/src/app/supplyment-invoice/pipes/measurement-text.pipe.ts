import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'measurementText'
})
export class MeasurementTextPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
   
    switch(value){
      case 0:
        return "perUnit";
      case 1 :
        return "gram";
      case 2 :
        return "milliliter";
      case 3 :
        return "cm"
      
    }

  }

}
