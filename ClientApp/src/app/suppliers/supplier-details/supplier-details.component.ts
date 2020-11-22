import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SupplierCreate } from 'src/app/models/suppliers/supplierCreate';
import { RestService } from 'src/app/services/rest-service.service';

@Component({
  selector: 'app-supplier-details',
  templateUrl: './supplier-details.component.html',
  styleUrls: ['./supplier-details.component.css']
})
export class SupplierDetailsComponent implements OnInit {
 
  supplier:SupplierCreate = null;
  constructor(private restService:RestService, private activeRouter:ActivatedRoute) { }

  ngOnInit() {
     this.restService.GetByID<SupplierCreate>("/api/Supplier", this.activeRouter.snapshot.params["id"]).subscribe(a=>{
        this.supplier =a;
     });
  }

}
