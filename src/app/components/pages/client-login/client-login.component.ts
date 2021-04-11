import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { environment as env } from "../../../../environments/environment";

@Component({
  selector: 'app-client-login',
  templateUrl: './client-login.component.html',
  styleUrls: ['./client-login.component.sass']
})
export class ClientLoginComponent implements OnInit {

  clientObj: Client;
  constructor(private http: HttpClient,private router: Router,public snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.clientObj= new Client();
  }
  Submit(){
    this.http.post(env.apiUrl+"/insertClient",this.clientObj).subscribe(res=>{
      debugger
      if(res){
        this.snackBar.open("Registration Successful", 'Ok', { verticalPosition: 'top', horizontalPosition:'right', duration: 3000 });
        this.router.navigate(['']);
      }
    });
    this.snackBar.open("Registration Successful", 'Ok', { verticalPosition: 'top', horizontalPosition:'right', duration: 3000 });
    this.router.navigate(['']);
    
    
  }
}

export class Client{
  firstname: string;
  lastname : string;
  password: string;
  email: string;
}
