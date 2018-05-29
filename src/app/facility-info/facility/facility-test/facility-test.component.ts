import { Component, OnInit, ViewChild } from '@angular/core';
import {order} from './orderInterface';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Rx';
import {responseInterface} from './respInterface';
import { MatSnackBar } from '@angular/material';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';


@Component({
  selector: 'app-facility-test',
  templateUrl: './facility-test.component.html',
  styleUrls: ['./facility-test.component.css']
})
export class FacilityTestComponent implements OnInit {
  

private apiurl = 'http://139.59.5.188:8081/ordersfetch';
data : any ={};
public menu : any;
ELEMENT_DATA: order[];
postData:any;
  constructor(private http:Http,public snackBar: MatSnackBar) { 
    this.getMenu();
    this.postData={dcentre:'RDC Ghaziabad'};
    this.menu={id:'',order_id:'',user_phn_number:'',user_alternate_phn_number:'',user_name:'',no_of_items:'',user_address:'',delivery_centre:'',order_date:'',cooking_instructions:'', total_price:''};

  }

  ngOnInit() {
  }
  displayedColumns = ['order_id', 'user_phn_number', 'user_alternate_phn_number','user_name','no_of_items','user_address','delivery_centre','order_date','cooking_instructions','total_price','Confirm','Cancel'];
  dataSource = new MatTableDataSource<order>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
  }

getData() {
  return this.http.get(this.apiurl).map((res:Response)=>res.json());
}

getMenu(){
 this.getData().subscribe(data=>{
 const ELEMENT_DATA_temp:order[] =data.items;
 this.ELEMENT_DATA=ELEMENT_DATA_temp;
 this.dataSource = new MatTableDataSource<order>(this.ELEMENT_DATA);
 this.dataSource.paginator = this.paginator;

   })
 }
 onSelect(data:any){
   this.openSnackBar("Order "+data+" Confirmed","Done");
 }
 onSelectCancel(data:any){
  this.openSnackBar("Order "+data+" Canceled","Done");
}

 openSnackBar(message: string, action: string) {
  let snackBarRef = this.snackBar.open(message, action, {
    duration: 4000,
  });
  snackBarRef.onAction().subscribe(() => {
this.snackBar.dismiss;
  });
}


}
