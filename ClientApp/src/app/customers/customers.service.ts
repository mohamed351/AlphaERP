import { Injectable } from '@angular/core';

import { RestService } from '../services/rest-service.service';
import { CustomerCreate } from '../models/customersModel/customerCreate';
import { CustomerEdit } from '../models/customersModel/customerEdit';
import { CustomerDetail } from './../models/customersModel/customerDetail';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private apiService: RestService) { }

  CreateCustomer(customerData:CustomerCreate) {
    return this.apiService.PostData<any>("/api/Customers", customerData);
  }
  GetCustomerByID(Id: string) {
    return this.apiService.GetByID<CustomerDetail>("/api/Customers", Id);
  }
  EditCustomer(CustomerData:CustomerEdit) {
   return this.apiService.PutData<CustomerEdit>("/api/Customers", CustomerData.id, CustomerData);
  }

}
