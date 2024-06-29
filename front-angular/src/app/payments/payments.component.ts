import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {environment} from "../../environments/environment";
import {StudentServiceService} from "../services/student-service.service";

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.css'
})

export class PaymentsComponent implements OnInit{
  public payments: any;
  public datasource:any;
  public displayedColumns=["id","date","amount","type","status","firstname"];
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort
  constructor(private studentsService:StudentServiceService) {
  }
  ngOnInit(): void {
    this.studentsService.getAllPayments().subscribe({
      next :data=>{
        this.payments=data;
        this.datasource=new MatTableDataSource(this.payments);
        this.datasource.paginator=this.paginator;
        this.datasource.sort=this.sort;
    },
      error:err => {
        console.log(err);
      }
    })
  }

}
