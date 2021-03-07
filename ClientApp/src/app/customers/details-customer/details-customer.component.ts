import { Subscription } from 'rxjs';
import { CustomersService } from './../customers.service';
import { CustomerDetail } from './../../models/customersModel/customerDetail';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerCreate } from 'src/app/models/customers/customerCreate';
import { RestService } from 'src/app/services/rest-service.service';

@Component({
  selector: 'app-details-customer',
  templateUrl: './details-customer.component.html',
  styleUrls: ['./details-customer.component.css']
})
export class DetailsCustomerComponent implements OnInit, OnDestroy {
  //Customer Data
  customer: CustomerDetail = null;
  //Subscription
  customerSubscription: Subscription;
  constructor(private restApi: CustomersService,
    private activeRouter: ActivatedRoute) { }


  ngOnInit() :void{
    let customerID: string = this.activeRouter.snapshot.params["id"];
    this.customerSubscription= this.restApi.GetCustomerByID(customerID).subscribe(customerData => {
      this.customer = customerData;
    });
  }
  ngOnDestroy(): void {
    this.customerSubscription.unsubscribe();
  }

}
