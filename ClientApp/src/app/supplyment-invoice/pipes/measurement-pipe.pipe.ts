import { AsyncPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'measurementPipe'
})
export class MeasurementPipePipe implements PipeTransform {
  private asyncPipe: AsyncPipe;

  transform(value: any, ...args: any[]): any {
     /*
     <mat-option [value]=0> {{'perUnit'|translate}} </mat-option>
         <mat-option [value]=1> {{'gram'|translate}} </mat-option>
         <mat-option [value]=2> {{'milliliter'|translate}} </mat-option>
         <mat-option [value]=3> {{'cm'|translate}} </mat-option>
     */
  }

}
