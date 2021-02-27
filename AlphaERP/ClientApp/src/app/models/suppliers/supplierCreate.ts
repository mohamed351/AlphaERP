import { Phone } from "../phone";
import {Address} from '../address';
import {Supplier} from './supplier';
export interface SupplierCreate extends Supplier{
    
    phone:Phone[];
    address:Address[];
}