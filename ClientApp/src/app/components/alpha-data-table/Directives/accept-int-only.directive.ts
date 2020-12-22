import { Directive, ElementRef, Output , EventEmitter} from '@angular/core';

@Directive({
  selector: '[appAcceptIntOnly]',
  host:{
    '(ngModelChange)':'elementChanged()'
  }
})
export class AcceptIntOnlyDirective {
  @Output('AfterValueChange') afterValueChange:EventEmitter<any> = new EventEmitter();
  constructor(private el:ElementRef) { }
  elementChanged(data){
    console.log(data);
    console.log(this.el.nativeElement.value);
    this.el.nativeElement.value =  Math.floor(this.el.nativeElement.value);
    this.afterValueChange.emit();
  }



}
