import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

import { SeriesXrangeOptions } from 'highcharts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  // chart: Chart;
  
  ngOnInit(){
  //  this.chart = new Chart({
  //   chart: {
  //         type: 'line'
  //       },
  //       title: {
  //         text: 'Linechart'
  //       },
  //       credits: {
  //         enabled: false
  //       },
  //       series: [
  //         {
  //           type:"line",
  //           name: 'Line 1',
  //           data: [1,2,3,4,56],
            

  //         }
  //       ]
  //  });
   
  }

  

  chart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        type:"line",
        name: 'Line 1',
        data: [1,25,10,70,80]
      }
    ]
  });
  chart2 = new Chart({
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        type:"pie",
        name: 'Line 1',
        data: [1,5,6,7]
      }
    ]
  });

  chart3 = new Chart({
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        type:"bar",
        name: 'Line 1',
        data: [1,5,6,7]
      }
    ]
  });
}
