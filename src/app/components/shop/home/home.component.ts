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
    { title: 'Huge sale', subtitle: 'Up to 70%', image: 'assets/images/carousel/banner1.jpeg' },
    { title: 'Biggest discount', subtitle: 'Check the promotion', image: 'assets/images/carousel/banner2.jpeg' },
    { title: 'Biggest sale', subtitle: 'Dont miss it', image: 'assets/images/carousel/banner3.jpeg' },
    { title: 'Our best products', subtitle: 'Special selection', image: 'assets/images/carousel/banner4.jpeg' },
    { title: 'Massive sale', subtitle: 'Only for today', image: 'assets/images/carousel/banner5.jpeg' }
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
