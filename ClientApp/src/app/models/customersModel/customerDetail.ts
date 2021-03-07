export interface CustomerDetail {
  customerName: string;
  phone: Phone[];
  address: Address[];
}

interface Address {
  address: string;
}

interface Phone {
  phone: string;
}
