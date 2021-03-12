import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/modals/product.model';
import { CartItem } from 'src/app/modals/cart-item';
import { SidebarMenuService } from '../sidebar/sidebar-menu.service';
import { HttpClient } from '@angular/common/http';
import { environment as env } from "../../../../environments/environment";
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  public sidenavMenuItems:Array<any>;

  categories:any;
  locations:any;
  selectedCategory:any="";
  selectedLocation:any="";
  tutorName:any="";

  constructor(private http:HttpClient,private dataService: DataService) {

  }

  ngOnInit() {
    this.http.get(env.apiUrl+"/allCategories").subscribe(res=>{
      debugger
      if(res){
        this.categories=res;
      }
    });
    this.http.get(env.apiUrl+"/allLocations").subscribe(res=>{
      debugger
      if(res){
        this.locations=res;
      }
    });
  }

  Search(){
    let searchParams= new Object({
      location: this.selectedLocation,
      category:this.selectedCategory,
      tutorName: this.tutorName
    });
    this.http.post(env.apiUrl+"/search",searchParams).subscribe(res=>{
      debugger
      if(res){
        this.dataService.sendData(res);
      }
    });
  }


}
