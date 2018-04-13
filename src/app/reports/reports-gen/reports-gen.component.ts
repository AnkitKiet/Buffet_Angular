import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver/FileSaver';

@Component({
  selector: 'app-reports-gen',
  templateUrl: './reports-gen.component.html',
  styleUrls: ['./reports-gen.component.css']
})
export class ReportsGenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public lineChartData:Array<any> = [
    [17, 18, 35, 21, 26, 45, 30],
    [28, 48, 40, 19, 86, 27, 90],
    [38, 58, 45, 49, 66, 57, 80],
    
  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March'];
  public lineChartType:string = 'line';
  public pieChartType:string = 'pie';
 
  // Pie
  public pieChartLabels:string[] = ['App Traffic', 'Purchase Counts', 'Checkout Cancelled'];
  public pieChartData:number[] = [700, 500, 100];
 
  public randomizeType():void {
    this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
    this.pieChartType = this.pieChartType === 'doughnut' ? 'pie' : 'doughnut';
  }
  public exportToExcel():void{
    var items = [
      { name: "Item 1", color: "Green", size: "X-Large" },
      { name: "Item 2", color: "Green", size: "X-Large" },
      { name: "Item 3", color: "Green", size: "X-Large" }];
      var jsonObject = JSON.stringify(items);
let blob_file = new Blob([this.ConvertToCSV(this.lineChartData)], { type: 'text/csv' });
const saveFile = (blobContent: Blob, fileName: string) => {
  const blob = new Blob([blobContent], { type: 'application/octet-stream' });
  saveAs(blob, fileName);
};
saveFile(blob_file,"file.csv");
    console.log(this.ConvertToCSV(this.lineChartData));
  }
 
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
  public ConvertToCSV(objArray) {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    var str = '';

    for (var i = 0; i < array.length; i++) {
        var line = '';
        for (var index in array[i]) {
            if (line != '') line += ','

            line += array[i][index];
        }

        str += line + '\r\n';
    }

    return str;
}

}