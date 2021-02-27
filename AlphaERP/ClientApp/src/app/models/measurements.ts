export interface Measurement {
    id: number;
    name: string;
    mainType: number;
    isDeleted: boolean;
    isKnown: boolean;
    defaultValue: number;
    productMeasurements?: any;
    measurementName:string;
    value:number;
    isMain:boolean;
}