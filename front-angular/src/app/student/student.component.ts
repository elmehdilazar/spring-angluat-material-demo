import {AfterContentInit, AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {Router, RouterModule} from "@angular/router";
import {StudentServiceService} from "../services/student-service.service";
import {Student} from "../model/students.model";


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnInit ,AfterViewInit {
public students!:any;
public datasource!:MatTableDataSource<Student>;
public displayedColums=["id","code","firstname","lastname","programeId","payment"];
@ViewChild(MatPaginator) Paginator!:MatPaginator;
@ViewChild(MatSort) Sort!:MatSort;

constructor( private router:Router ,private studentService:StudentServiceService) {
}
ngOnInit(): void {


this.studentService.getAllStudents().subscribe({
  next: value=>{
this.students=value;
    this.datasource=new MatTableDataSource(this.students);
  },
  error : err => {
    console.log(err);
  }
})
  console.log(this.datasource);

  }


ngAfterViewInit() {
  this.datasource.paginator=this.Paginator;
  this.datasource.sort=this.Sort;
}

  filterStudent(event: Event) {
    let value=(event.target as HTMLInputElement).value;
    this.datasource.filter=value;
  }

  getPayement(student: any) {
 this.router.navigateByUrl("/payments")
  }

  studentPayments(element:Student) {
this.router.navigateByUrl("/admin/studentsDetails/"+element.code);
  }
}
