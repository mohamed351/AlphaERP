export interface ReturnedCustomerInvoice {
  ReturnedCustomerInvoiceDetails: ReturnedCustomerInvoiceDetail[];
  ID: number;
  InvoiceNumber: number;
  InvoiceReferenceID: number;
  Note?: any;
  InvoiceDate: string;
  UserID: string;
}

export interface ReturnedCustomerInvoiceDetail {
  Product: Product;
  ID: number;
  ProductID: string;
  InvoiceID: number;
  Quantity: number;
  UnitPrice: number;
  ExpireDate: string;
  Serial?: any;
  DetailReference: number;
}

export  interface Product {
  ID: string;
  ProductName: string;
  TypeOfMeasurement: number;
}
