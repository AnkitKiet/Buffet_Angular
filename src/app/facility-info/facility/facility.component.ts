import { Component, OnInit, ViewChild } from '@angular/core';
import {menu} from './menu_data_interface';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {


private apiurl = 'http://139.59.5.188:8081/getallmenu';
data : any ={};
public menu : menu;
ELEMENT_DATA: menu[];
  constructor(private http:Http) { 
    this.getMenu();

    this.menu={id:'',menu_name:'',category_name:'',sub_category_name:'',price:'',size:'',offer_id:'',topping_count:'',image:'',category_id:'', cat_id:'',topping_id:'', topping_name:'',offer_details:'',discount_price:''};

  }

  ngOnInit() {

    
  }
  displayedColumns = ['manu_name', 'category_name', 'sub_category_name','price','size','offer_id','topping_count','image','topping_name','offer_details','discount_price'];
  dataSource = new MatTableDataSource<menu>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
  }

getData(){
  return this.http.get(this.apiurl).map((res:Response)=>res.json());
}
 getMenu(){
   this.getData().subscribe(data=>{
 const ELEMENT_DATA_temp:menu[] =[...data.message.Sides, ...data.message.Pizza];
 this.ELEMENT_DATA=ELEMENT_DATA_temp;
 this.dataSource = new MatTableDataSource<menu>(this.ELEMENT_DATA);
 this.dataSource.paginator = this.paginator;

   })
 }
}


// const ELEMENT_DATA: menu[] = [
//   {id: '1', menu_name: '1.0079', category_name: 'Hydrogen', sub_category_name:'dd', price: 'H',size:'large',offer_id:'2',topping_count:'2',image:'22',topping_name:'ss',offer_details:'ss',discount_price:'dd'},
//   {id: '1', menu_name: '1.0079', category_name: 'Hydrogen', sub_category_name:'dd', price: 'H',size:'large',offer_id:'2',topping_count:'2',image:'22',topping_name:'ss',offer_details:'ss',discount_price:'dd'},
//   {id: '1', menu_name: '1.0079', category_name: 'Hydrogen', sub_category_name:'dd', price: 'H',size:'large',offer_id:'2',topping_count:'2',image:'22',topping_name:'ss',offer_details:'ss',discount_price:'dd'},
//   {id: '1', menu_name: '1.0079', category_name: 'Hydrogen', sub_category_name:'dd', price: 'H',size:'large',offer_id:'2',topping_count:'2',image:'22',topping_name:'ss',offer_details:'ss',discount_price:'dd'},
//   {id: '1', menu_name: '1.0079', category_name: 'Hydrogen', sub_category_name:'dd', price: 'H',size:'large',offer_id:'2',topping_count:'2',image:'22',topping_name:'ss',offer_details:'ss',discount_price:'dd'},
//   {id: '1', menu_name: '1.0079', category_name: 'Hydrogen', sub_category_name:'dd', price: 'H',size:'large',offer_id:'2',topping_count:'2',image:'22',topping_name:'ss',offer_details:'ss',discount_price:'dd'},
//   {id: '1', menu_name: '1.0079', category_name: 'Hydrogen', sub_category_name:'dd', price: 'H',size:'large',offer_id:'2',topping_count:'2',image:'22',topping_name:'ss',offer_details:'ss',discount_price:'dd'},
//   {id: '1', menu_name: '1.0079', category_name: 'Hydrogen', sub_category_name:'dd', price: 'H',size:'large',offer_id:'2',topping_count:'2',image:'22',topping_name:'ss',offer_details:'ss',discount_price:'dd'},
//   {id: '1', menu_name: '1.0079', category_name: 'Hydrogen', sub_category_name:'dd', price: 'H',size:'large',offer_id:'2',topping_count:'2',image:'22',topping_name:'ss',offer_details:'ss',discount_price:'dd'},
//   {id: '1', menu_name: '1.0079', category_name: 'Hydrogen', sub_category_name:'dd', price: 'H',size:'large',offer_id:'2',topping_count:'2',image:'22',topping_name:'ss',offer_details:'ss',discount_price:'dd'},
//   {id: '1', menu_name: '1.0079', category_name: 'Hydrogen', sub_category_name:'dd', price: 'H',size:'large',offer_id:'2',topping_count:'2',image:'22',topping_name:'ss',offer_details:'ss',discount_price:'dd'},
//   {id: '1', menu_name: '1.0079', category_name: 'Hydrogen', sub_category_name:'dd', price: 'H',size:'large',offer_id:'2',topping_count:'2',image:'22',topping_name:'ss',offer_details:'ss',discount_price:'dd'},
//   {id: '1', menu_name: '1.0079', category_name: 'Hydrogen', sub_category_name:'dd', price: 'H',size:'large',offer_id:'2',topping_count:'2',image:'22',topping_name:'ss',offer_details:'ss',discount_price:'dd'},
//   {id: '1', menu_name: '1.0079', category_name: 'Hydrogen', sub_category_name:'dd', price: 'H',size:'large',offer_id:'2',topping_count:'2',image:'22',topping_name:'ss',offer_details:'ss',discount_price:'dd'},
//   {id: '1', menu_name: '1.0079', category_name: 'Hydrogen', sub_category_name:'dd', price: 'H',size:'large',offer_id:'2',topping_count:'2',image:'22',topping_name:'ss',offer_details:'ss',discount_price:'dd'},
//   {id: '1', menu_name: '1.0079', category_name: 'Hydrogen', sub_category_name:'dd', price: 'H',size:'large',offer_id:'2',topping_count:'2',image:'22',topping_name:'ss',offer_details:'ss',discount_price:'dd'},
//   {id: '1', menu_name: '1.0079', category_name: 'Hydrogen', sub_category_name:'dd', price: 'H',size:'large',offer_id:'2',topping_count:'2',image:'22',topping_name:'ss',offer_details:'ss',discount_price:'dd'},
// ];
