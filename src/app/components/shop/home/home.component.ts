import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment as env } from "../../../../environments/environment";
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  products: any;
  subscriber:any;
  public slides = [
    { title: 'Huge sale', subtitle: 'Up to 70%', image: 'assets/images/carousel/banner1.jpg' },
    { title: 'Biggest discount', subtitle: 'Check the promotion', image: 'assets/images/carousel/banner1.jpg' },
    { title: 'Biggest sale', subtitle: 'Dont miss it', image: 'assets/images/carousel/banner1.jpg' },
    { title: 'Our best products', subtitle: 'Special selection', image: 'assets/images/carousel/banner1.jpg' },
    { title: 'Massive sale', subtitle: 'Only for today', image: 'assets/images/carousel/banner1.jpg' }
  ];

  constructor(private http: HttpClient,private dataService: DataService) { }

  ngOnInit() {
    debugger
    this.http.post(env.apiUrl+"/topTeachers","").subscribe(res=>{
      debugger
      if(res){
        this.products=res;
      }
    });
    this.subscriber=  this.dataService.recieveData();
    this.subscriber.subscribe(res=>{
      debugger
      this.products=res;
    })
  }






}
