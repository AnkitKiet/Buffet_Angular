import { Component, OnInit } from '@angular/core';
import {loginInterface} from './loginInterface';
import {MatSnackBar} from '@angular/material';
import {AppComponent} from '../app.component';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Rx';
import { RouterModule, Routes ,PreloadAllModules } from '@angular/router';
import {Router} from '@angular/router';
this.router= Router;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

private apiurl = 'http://139.59.5.188:8081/login';
data : any ={};
public showProgress=false;
public user : loginInterface;

  constructor(private http:Http,private route:Router,public snackBar: MatSnackBar,private appcomponent:AppComponent) {
    this.user = {password:''};
  }

  ngOnInit() {
    this.appcomponent.callFun(false);
  }

getData(body: Object): Observable<user> {
//  return this.http.get(this.apiurl).map((res:Response)=>res.json());
      let bodyString = JSON.stringify(body); // Stringify payload
       let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
       let options = new RequestOptions({ headers: headers }); // Create a request option
       return this.http.post(this.apiurl, body, options) // ...using post request
                        .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
}


onSubmit(){
  this.showProgress=true;
  this.getData(this.user).subscribe(data=>{
    this.data=data;
    if(data.error=="false"){
      this.showProgress=false;
      this.route.navigateByUrl('/dashboard');
    }else{
      this.showProgress=false;
      this.openSnackBar(data.message,"Retry");
    }
  });

}

openSnackBar(message: string,action:string) {
    let snackBarRef=this.snackBar.open(message,action,{
      duration: 2000,
    });
    snackBarRef.onAction().subscribe(() => {
      this.onSubmit();
});
  }

}
