import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment as env } from "../../../../environments/environment";
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.sass']
})
export class MyAccountComponent implements OnInit {

  teacherObj: Teacher;
  url:string;
  uploadRes:any;
  options=["Yes","No"]
  constructor(private http: HttpClient,public snackBar: MatSnackBar,private router: Router) { }

  ngOnInit() {
    this.teacherObj= new Teacher();
  }

  selectPicture(event){
    if(event.target.files.length>0){
      this.teacherObj.picture= event.target.files[0];
    }

  }
  selectCPR(event){
    if(event.target.files.length>0){
      this.teacherObj.cprCard= event.target.files[0];
    }
  }
  selectDCF(event){
    if(event.target.files.length>0){
      this.teacherObj.dcfTranscript= event.target.files[0];
    }
  }
  Submit(){
    debugger;
    this.UploadPicture();
    
    
  }

  UploadPicture(){
    const formData= new FormData();
    formData.append("picture",this.teacherObj.picture);
    this.http.post(env.apiUrl+"/insertPicture",formData).subscribe(res=>{
      debugger
      if(res){
        this.uploadRes=res;
        this.teacherObj.picture="assets/uploads/"+this.uploadRes.filename;
        this.UploadDCF()
      }
    });
    
  }
  UploadDCF(){
    const formData= new FormData();
    formData.append("DCF",this.teacherObj.dcfTranscript);
    this.http.post(env.apiUrl+"/insertDCF",formData).subscribe(res=>{
      debugger
      if(res){
        this.uploadRes=res;
        this.teacherObj.dcfTranscript="assets/uploads/"+this.uploadRes.filename;
        this.UploadCPR();
      }
    });
  }
  UploadCPR(){
    const formData= new FormData();
      formData.append("CPR",this.teacherObj.cprCard);
    this.http.post(env.apiUrl+"/insertCPR",formData).subscribe(res=>{
      debugger
      if(res){
        this.uploadRes=res;
        this.teacherObj.cprCard="assets/uploads/"+this.uploadRes.filename;
        this.http.post(env.apiUrl+"/insertTeacher",this.teacherObj).subscribe(res=>{
          debugger
          if(res){
            this.snackBar.open("Registration Successful", 'Ok', { verticalPosition: 'top', horizontalPosition:'right', duration: 3000 });
            this.router.navigate(['']);
          }
        });
      }
    });
  }
//   TeacherObj: 
// -firstname
// - lastname
// - location
// - category
// - picture
// - cprCard
// - dcfTranscript

}


export class Teacher{
  firstname: string;
  lastname : string;
  location: string;
  category: string;
  password: string;
  email: string;
  covidVaccine: string;
  FireExtinguisherTrained: string;
  safeSleepClass: string;
  picture:any;
  cprCard:any;
  dcfTranscript:any;
}