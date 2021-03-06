import { Injectable } from '@angular/core';
import { CustomerCreate } from '../models/customers/customerCreate';
import { RestService } from '../services/rest-service.service';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private apiService: RestService) { }

  CreateCustomer(customerData:CustomerCreate) {
    return this.apiService.PostData<any>("/api/Customers", customerData);
  }
}
