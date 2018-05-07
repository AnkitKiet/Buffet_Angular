import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { category } from './categoryInterface';

@Component({
  selector: 'app-menu-edit',
  templateUrl: './menu-edit.component.html',
  styleUrls: ['./menu-edit.component.css']
})
export class MenuEditComponent implements OnInit {

  private apiurl = 'http://139.59.5.188:8081/getallcategory';
  data: any = {};
  public category: category;
  ELEMENT_DATA: category[];

  constructor(private http: Http) {
    this.getMenu();
   }

  ngOnInit() {
  }

  getData() {
    return this.http.get(this.apiurl).map((res: Response) => res.json());
  }


  getMenu() {
    this.getData().subscribe(data => {
      const ELEMENT_DATA_temp: category[] = data.message;
      this.ELEMENT_DATA = ELEMENT_DATA_temp;
      console.log(this.ELEMENT_DATA);
      
    })
  }

  Sizes = [
    { value: 'Regular', viewValue: 'Regular' },
    { value: 'Medium', viewValue: 'Medium' },
    { value: 'Large', viewValue: 'Large' }
  ];
  Offers = [
    { value: 'N/A', viewValue: 'N/A' }
  ];
}
