import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.css'
})

export class PaymentsComponent implements OnInit{
  public payments: any;
  public datasource:any;
  public displayedColumns=["id","date","amount","type","status","firstname"];
  constructor(private http:HttpClient) {
  }
  ngOnInit(): void {
    this.http.get("http://localhost:8080/payments").subscribe({
      next :data=>{
        this.payments=data;
        this.datasource=new MatTableDataSource(this.payments)
    },
      error:err => {
        console.log(err);
      }
    })
  }

}
