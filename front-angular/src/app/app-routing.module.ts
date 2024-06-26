import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProfileComponent} from "./profile/profile.component";
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {StudentComponent} from "./student/student.component";
import {PaymentsComponent} from "./payments/payments.component";
import {LoadStudentsComponent} from "./load-students/load-students.component";
import {LoadPaymentsComponent} from "./load-payments/load-payments.component";
import {AdminTemplateComponent} from "./admin-template/admin-template.component";
import {AuthGuard} from "./guards/auth.guard";
import {AuthorizationGuard} from "./guards/authorization.guard";
import {StudentDetailsComponent} from "./student-details/student-details.component";



const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"",component:LoginComponent},
  {path:"admin",component:AdminTemplateComponent, canActivate:[AuthGuard], children:[
      {path:"home",component:HomeComponent},
      {path:"profile",component:ProfileComponent},
      {path:"dashboard",component:DashboardComponent},
      {path:"students",component:StudentComponent},
      {path:"payments",component:PaymentsComponent},
      {path:"loadStudents",component:LoadStudentsComponent,canActivate:[AuthorizationGuard],data:{roles:['ADMIN']}},
      {path:"loadPayments",component:LoadPaymentsComponent},
      {path:"studentsDetails/:code",component:StudentDetailsComponent}
    ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
