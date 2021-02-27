export interface Category{
    id:string,
    name:string,
    childern?:Category[],
    categoryID:string;
}

