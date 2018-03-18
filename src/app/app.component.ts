import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Buffet';
  check=true;
 url=window.location.href;

constructor(){}

  ngOnInit() {
    if(this.url.search(/login/)!=-1){
      this.check=false;
      console.log("hello");
    }else{
      this.check=true;
    }
  }

}
