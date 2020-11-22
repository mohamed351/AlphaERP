import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerCreate } from 'src/app/models/customers/customerCreate';
import { RestService } from 'src/app/services/rest-service.service';

@Component({
  selector: 'app-details-customer',
  templateUrl: './details-customer.component.html',
  styleUrls: ['./details-customer.component.css']
})
export class DetailsCustomerComponent implements OnInit {

  customer:CustomerCreate = null;
  constructor(private restApi:RestService, private activeRouter:ActivatedRoute) { }

  ngOnInit() {
    this.restApi.GetByID<CustomerCreate>("/api/Customers",this.activeRouter.snapshot.params["id"] ).subscribe(a=>{
      this.customer = a;
    });
  }

}
