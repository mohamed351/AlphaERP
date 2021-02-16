export interface RefundMeasurement {
  id: number;
  name: string;
  mainType: number;
  isDeleted: boolean;
  isKnown: boolean;
  defaultValue: number;
  isMain: boolean;
  productMeasurements?: any;
}
