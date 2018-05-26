import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { category } from './categoryInterface';
import {MatSnackBar} from '@angular/material';
import {responseInterface} from './resInterface';

@Component({
  selector: 'app-menu-edit',
  templateUrl: './menu-edit.component.html',
  styleUrls: ['./menu-edit.component.css']
})
export class MenuEditComponent implements OnInit {

  private apiurl = 'http://139.59.5.188:8081/getallcategory';
  private submitapiurl = 'http://139.59.5.188:8081/addcategory';
  private submitmenuurl='http://139.59.5.188:8081/addmenu'
  data: any = {};
  categorySelect:string;
  public category: category;
  public resInterface:responseInterface;
  ELEMENT_DATA: category[];
  public postCategorydata: any;
  public postMenuData:any;
  constructor(private http: Http,public snackBar: MatSnackBar) {
    this.getMenu();
    this.postCategorydata = {category:'',subCategory:''};
    this.postMenuData = {category_id:'',menu_name:'',price:'',size:'',offer_id:'',toppings_allowed:''}
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

getSelectedCategory(event:any){    
  console.log(event.value);
}

submitCategoryData(body: Object): Observable<responseInterface> {
        let bodyString = JSON.stringify(body); // Stringify payload
         let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
         let options = new RequestOptions({ headers: headers }); // Create a request option
         return this.http.post(this.submitapiurl, body, options) // ...using post request
                          .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                          .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }
  

onSubmitCategory(){
  this.submitCategoryData(this.postCategorydata).subscribe(data=>{
    this.data=data;  
    if(this.data.error=="false"){
      this.openSnackBar("Success","");
      this.getMenu();
      this.postCategorydata.category='';
      this.postCategorydata.subCategory='';
    }else{
      this.openSnackBar(this.data.message,"Retry");
    }
  });
}

submitMenuData(body: Object): Observable<responseInterface> {
  let bodyString = JSON.stringify(body); // Stringify payload
   let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
   let options = new RequestOptions({ headers: headers }); // Create a request option
   return this.http.post(this.submitmenuurl, body, options) // ...using post request
                    .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
}
onSubmitMenu(){
console.log(this.postMenuData);
  this.submitMenuData(this.postMenuData).subscribe(data=>{
    this.data=data;  
    console.log(this.data);
    if(this.data.error=="false"){
      this.openSnackBar("Success","");
      this.getMenu();
      this.postMenuData.category_id='';
      this.postMenuData.menu_name='';
      this.postMenuData.price='';
      this.postMenuData.size='';
      this.postMenuData.offer_id='';
      this.postMenuData.toppings_allowed='';

    }else{
      this.openSnackBar(this.data.message,"Retry");
    }
  });
}


openSnackBar(message: string,action:string) {
  let snackBarRef=this.snackBar.open(message,action,{
    duration: 2000,
  });
  snackBarRef.onAction().subscribe(() => {
    this.onSubmitCategory();
});
}

  Sizes = [
    { value: 'Regular', viewValue: 'Regular' },
    { value: 'Medium', viewValue: 'Medium' },
    { value: 'Large', viewValue: 'Large' }
  ];
  Offers = [
    { value: '1', viewValue: 'N/A' }
  ];
}
