import { TypeOfMeasurements } from './../typeOfMeasurements';

export interface Invoice {
  Employee: Employee;
  Store: Store;
  InvoiceDetails: InvoiceDetail[];
  ID: number;
  InvoiceNumber: number;
  Supplier: Supplier;


}

export interface InvoiceDetail {
  Product: Product;
  ID: number;
  InvoiceID: number;
  ProductID: string;
  UnitPrice: number;
  Quantity: number;
  ExpireDate: string;
  Serial?: any;
}

export interface Store {
  ID: number;
  Name: string;
}

export interface Employee {
  Id: string;
  UserName: string;
}
export interface Supplier{
  ID: string,
  Name:string
}
export interface Product{
  ID: string,
  ProductName: string,
  TypeOfMeasurement:TypeOfMeasurements
}


