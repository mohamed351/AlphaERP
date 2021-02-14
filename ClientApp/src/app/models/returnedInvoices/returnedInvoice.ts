export interface ReturnedInvoice {
  id: number;
  deatils: Deatil[];
}

export interface Deatil {
  detailReference: number;
  id: number;
  quantity: number;
  productID: string;
  price: number;
}


export interface ReferneceDetails {
  detailReference: number;
  quantity: number;
}
