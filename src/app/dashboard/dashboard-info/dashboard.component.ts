import { Component, OnInit ,Inject} from '@angular/core';
import {AppComponent} from '../../app.component';
import {SESSION_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { RouterModule, Routes ,PreloadAllModules } from '@angular/router';
import {Router} from '@angular/router';
this.router= Router;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private appcomponent:AppComponent,@Inject(SESSION_STORAGE) private storage: WebStorageService,private route:Router) {
 }

  ngOnInit() {
      this.appcomponent.callFun(true);
      if(this.storage.get("login")){
        this.route.navigateByUrl("/dashboard");
      }else{
        this.route.navigateByUrl("/login");

      }
  }

}
