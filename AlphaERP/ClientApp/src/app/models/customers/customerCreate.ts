import { Address } from "../address";
import { Phone } from "../phone";
import { Customer } from "./customer";

export interface CustomerCreate extends Customer{

    phone:Phone[];
    address:Address[];
}
