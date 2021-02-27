export interface CustomerInvoice {
  Customer: Customer;
  Employee: Employee;
  Store: Store;
  CustomerInvoiceDetails: CustomerInvoiceDetail[];
  ID: number;
  CustomerID: string;
  EmployeeID: string;
  StoreID: number;
  InvoiceNumber: number;
  InvoiceDate: string;
  Note?: any;
}

export interface CustomerInvoiceDetail {
  Product: Product;
  ID: number;
  InvoiceID: number;
  ProductID: string;
  Price: number;
  Quantity: number;
  ExpireDate: string;
  NewQuantity: number;
}

export interface Product {
  ID: string;
  ProductName: string;
  TypeOfMeasurement: number;
}

export interface Store {
  ID: number;
  Name: string;
}

export interface Employee {
  UserName: string;
  Id: string;
}

interface Customer {
  ID: string;
  CustomerName: string;
}
