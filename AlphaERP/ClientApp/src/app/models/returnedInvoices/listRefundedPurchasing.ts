
export interface ReturendSupplymentInvoice {
  ReturnSupplymentInvoiceDetails: ReturnSupplymentInvoiceDetail[];
  ID: number;
  InvoiceDate: string;
  InvoiceReferenceID: number;
  Note: string;
  UserName: string;

}
export interface Product{
  ProductID: string;
  ProductName: string;
  TypeOfMeasurement: number;
}

export interface ReturnSupplymentInvoiceDetail {
  ID: number;
  ProductID: string;
  InvoiceID: number;
  Quantity: number;
  Price: number;
  ExpireDate: string;
  Serial?: any;
  DetailReference: number;
  Product: Product;
}
