import { Component, Input, OnInit , EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/models/categories/category';
import { RestService } from 'src/app/services/rest-service.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  public CateogryData:Category = null;
   @Output("onDataAdded") onDataAdded:EventEmitter<any> = new EventEmitter();
  @Input("CatrogyID") categoryID:string  = null;
  public CategoryList:Category[]= [];
  form = new FormGroup({
    id:new FormControl('',[Validators.required]),
    name:new FormControl('',[Validators.required]),
    categoryID:new FormControl('',[Validators.required])
  });

  subForm= new FormGroup({
    name:new FormControl('',[Validators.required]),
    categoryID:new FormControl('',[Validators.required])
  });

  get getMainFormName (){
    return this.form.get("name");
  }

  constructor(private restaAPI:RestService) { }

  ngOnInit() {
   
  }
  ngOnChanges(){
    
    if(this.categoryID != null){
     console.log(this.categoryID);
      this.restaAPI.GetByID<Category>("/api/Categories", this.categoryID).subscribe(a=>{
        this.CateogryData = a;
        console.log(a);
        this.MapObjectToControls();
      });

      this.restaAPI.GetAll<Category[]>("/api/Categories/flat").subscribe(a=>{
          this.CategoryList =  a.filter(item=>{
            if(item.id != this.categoryID){
              return item;
            }
         });
        
          
          
      });
    }
  }

  SubmitSubForm(){
    this.restaAPI.PostData<Category>("/api/Categories",this.subForm.value).subscribe(a=>{
       this.onDataAdded.emit(a);
      this.categoryID = null;
      this.CateogryData = null;
      this.form.reset();
      this.subForm.reset();
    });
  }
  SubmitMainForm(){
    this.restaAPI.PutData<Category>("/api/Categories",this.categoryID,this.form.value).subscribe(a=>{
      this.onDataAdded.emit(a);
      this.categoryID = null;
      this.CateogryData = null;
      this.form.reset();
      this.subForm.reset();
    });
  }

  private MapObjectToControls(){
    this.form.get("id").setValue(this.CateogryData.id);
    this.form.get("name").setValue(this.CateogryData.name);
    this.form.get("categoryID").setValue(this.CateogryData.categoryID);
    this.subForm.get("categoryID").setValue(this.CateogryData.id);

  }

}
