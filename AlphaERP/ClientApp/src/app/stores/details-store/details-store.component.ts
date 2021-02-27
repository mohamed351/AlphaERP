import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from 'src/app/services/rest-service.service';

@Component({
  selector: 'app-details-store',
  templateUrl: './details-store.component.html',
  styleUrls: ['./details-store.component.css']
})
export class DetailsStoreComponent implements OnInit {
  data:any = null;
  constructor(private storeService:RestService,
    private activeRouter:ActivatedRoute) { }

  ngOnInit() {
    let id = this.activeRouter.snapshot.params["id"];
    this.storeService.GetAll<any>(`/api/Stores?$filter=id eq ${id} &$select=id,name`).subscribe(a=>{
      this.data = a;
     
    });
  }

}
