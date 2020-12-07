import { TypeOfMeasurements } from "../typeOfMeasurements";

export interface Product{
id:string, 
productNumber:number,
productName:string,
sellingPrice:number,
purchasingPrice:number,
categoryID:string,
barCode:string,
isValidInPointOfSales:boolean,
isValidInStorage:boolean,
isValidOnline:boolean,
typeOfMeasurements:TypeOfMeasurements,
productImage:string

}
