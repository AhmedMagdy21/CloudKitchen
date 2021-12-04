import { OrderDetailsService } from './../../services/order-details.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {

  constructor(private param:ActivatedRoute,private _OrderDetailsService:OrderDetailsService) { }


  getMenuId:any;
  menuData:any;



  ngOnInit(): void 
  {
    this.getMenuId =this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId,'getmenu');
    if (this.getMenuId) 
    {
      this.menuData =  this._OrderDetailsService.foodDetails.filter((value)=>{
      
        return value.id == this.getMenuId;
      })  
    } 
    else {
      
    }
  }

}
