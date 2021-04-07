import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-store-movment-report',
  templateUrl: './store-movment-report.component.html',
  styleUrls: ['./store-movment-report.component.css']
})
export class StoreMovmentReportComponent implements OnInit {
  url: any = null;
  constructor(private dom:DomSanitizer) { }

  ngOnInit(): void {
    this.url = this.dom.bypassSecurityTrustResourceUrl("http://localhost:8195/Default.aspx");
  }

}
