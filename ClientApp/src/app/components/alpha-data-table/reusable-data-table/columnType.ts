export interface ColumnType{
    columnName:string,
    columnType:TypeOfColumn
}

export enum TypeOfColumn{
   None=0,
   Buttons=1,
   ImageURL=2,
  ImageBase64 = 3,
  JustDetailsAndPrint = 4,
  JustDetails =5,
  Date =6
}
