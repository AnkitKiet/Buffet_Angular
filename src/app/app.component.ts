import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Buffet';
 url=window.location.href;
checkNav=false;
constructor(){}

  ngOnInit() {
  this.callFun(true);
  }

callFun(value:boolean):void{
  this.checkNav=value;
}

}
