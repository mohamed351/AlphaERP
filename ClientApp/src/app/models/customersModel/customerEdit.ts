import { CustomerAddress } from './customersAddress'
import { CustomerPhone } from './customersPhones'
export interface CustomerEdit{
  id:string,
  customerName: string,
  phone: CustomerPhone[];
  address: CustomerAddress[];

}
