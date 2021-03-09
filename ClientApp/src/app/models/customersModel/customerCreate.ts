import { CustomerAddress } from './customersAddress';
import { CustomerPhone} from './customersPhones';
export interface CustomerCreate {
  customerName: string;
  phone: CustomerPhone[];
  address: CustomerAddress[];
}


