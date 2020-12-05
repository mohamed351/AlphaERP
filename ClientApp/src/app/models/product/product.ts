import { TypeOfMeasurements } from "../typeOfMeasurements";

export interface Product{
id:string, 
productName:string,
sellingPrice:string,
purchasingPrice:string,
categoryID:string,
barCode:string,
isValidInPointOfSales:boolean,
isValidInStorage:boolean,
isValidOnline:boolean,
typeOfMeasurements:TypeOfMeasurements

}
