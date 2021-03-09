export interface CustomerDetail {
  id: string;
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
