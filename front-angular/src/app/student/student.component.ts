import {AfterContentInit, AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {Router, RouterModule} from "@angular/router";


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnInit ,AfterViewInit {
public students:any;
public datasource:any;
public displayedColums=["id","firstname","lastname","payments"];
@ViewChild(MatPaginator) Paginator!:MatPaginator;
@ViewChild(MatSort) Sort!:MatSort;

constructor( private router:Router) {
}
ngOnInit(): void {
  this.students=[];
  for (let i = 0; i < 100; i++) {
    this.students.push(
      {
        id: i,
        firstname: Math.random().toString(20),
        lastname: Math.random().toString(20),
      }
    );
  }
  console.log(this.students);
  this.datasource=new MatTableDataSource(this.students);
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
}
