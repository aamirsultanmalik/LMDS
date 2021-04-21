import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment as env } from "../../../../environments/environment";
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {

  teacherObj: Teacher;
  url:string;
  uploadRes:any;
  options=["Yes","No"]
  locations=[{zip: 32102, location: "Astor"},
  {zip: 32159, location: "Lady Lake"},
  {zip: 32701, location: "Altamonte Springs"},
  {zip: 32702, location: "Altoona"},
  {zip: 32703, location: "Apopka"},
  {zip: 32707, location: "Casselberry"},
  {zip: 32708, location: "Winter Springs"},
  {zip: 32709, location: "Christmas"},
  {zip: 32712, location: "Apopka"},
  {zip: 32714, location: "Altamonte Springs"},
  {zip: 32726, location: "Eustis"},
  {zip: 32730, location: "Fern Park"},
  {zip: 32732, location: "Geneva"},
  {zip: 32735, location: "Grand Island"},
  {zip: 32736, location: "Eustis"},
  {zip: 32746, location: "Lake Mary"},
  {zip: 32750, location: "Longwood"},
  {zip: 32751, location: "Maitland"},
  {zip: 32757, location: "Mount Dora"},
  {zip: 32765, location: "Oviedo"},
  {zip: 32766, location: "Oviedo"},
  {zip: 32767, location: "Lake Kathryn"},
  {zip: 32771, location: "Sanford"},
  {zip: 32773, location: "Sanford"},
  {zip: 32776, location: "Sorrento"},
  {zip: 32778, location: "Tavares"},
  {zip: 32779, location: "Wekiwa Springs"},
  {zip: 32784, location: "Umatilla"},
  {zip: 32789, location: "Winter Park"},
  {zip: 32792, location: "Winter Park"},
  {zip: 32798, location: "Zellwood"},
  {zip: 32801, location: "Orlando"},
  {zip: 32803, location: "Orlando"},
  {zip: 32804, location: "Orlando"},
  {zip: 32805, location: "Orlando"},
  {zip: 32806, location: "Orlando"},
  {zip: 32807, location: "Orlando"},
  {zip: 32808, location: "Pine Hills"},
  {zip: 32809, location: "Pine Castle"},
  {zip: 32810, location: "Lockhart"},
  {zip: 32811, location: "Orlando"},
  {zip: 32812, location: "Orlando"},
  {zip: 32814, location: "Orlando"},
  {zip: 32817, location: "Orlando"},
  {zip: 32818, location: "Pine Hills"},
  {zip: 32819, location: "Orlando"},
  {zip: 32820, location: "Bithlo"},
  {zip: 32821, location: "Orlando"},
  {zip: 32822, location: "Orlando"},
  {zip: 32824, location: "Meadow Woods"},
  {zip: 32825, location: "Orlando"},
  {zip: 32826, location: "University"},
  {zip: 32827, location: "Orlando"},
  {zip: 32828, location: "Alafaya"},
  {zip: 32829, location: "Orlando"},
  {zip: 32830, location: "Orlando"},
  {zip: 32831, location: "Orlando"},
  {zip: 32832, location: "Orlando"},
  {zip: 32833, location: "Wedgefield"},
  {zip: 32835, location: "Orlando"},
  {zip: 32836, location: "Orlando"},
  {zip: 32837, location: "Orlando"},
  {zip: 32839, location: "Orlando"},
  {zip: 33848, location: "Intercession City"},
  {zip: 34705, location: "Astatula"},
  {zip: 34711, location: "Clermont"},
  {zip: 34714, location: "Four Corners"},
  {zip: 34715, location: "Minneola"},
  {zip: 34731, location: "Fruitland Park"},
  {zip: 34734, location: "Gotha"},
  {zip: 34736, location: "Groveland"},
  {zip: 34737, location: "Howey In The Hills"},
  {zip: 34739, location: "Kenansville"},
  {zip: 34741, location: "Kissimmee"},
  {zip: 34743, location: "Buenaventura Lakes"},
  {zip: 34744, location: "Kissimmee"},
  {zip: 34746, location: "Kissimmee"},
  {zip: 34747, location: "Celebration"},
  {zip: 34748, location: "Leesburg"},
  {zip: 34753, location: "Mascotte"},
  {zip: 34756, location: "Montverde"},
  {zip: 34758, location: "Poinciana"},
  {zip: 34760, location: "Oakland"},
  {zip: 34761, location: "Ocoee"},
  {zip: 34762, location: "Okahumpka"},
  {zip: 34769, location: "St. Cloud"},
  {zip: 34771, location: "Saint Cloud"},
  {zip: 34772, location: "St. Cloud"},
  {zip: 34773, location: "Saint Cloud"},
  {zip: 34786, location: "Lake Butler"},
  {zip: 34787, location: "Winter Garden"},
  {zip: 34788, location: "Leesburg"},
  {zip: 34797, location: "Yalaha"},];

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
    debugger
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

  radioChange(event){
    debugger
    this.teacherObj.CDA= event.value;
  }

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
  CDA:string;
}