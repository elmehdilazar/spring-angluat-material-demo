import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
public username!:any;
public password!:string;
public roles:any;
public  authenticated:boolean=false;
  constructor(private router:Router) { }
  public login(username:string,passsword:string){
    if(username=="admin" && passsword=="1234"){
      this.username=username;
      this.roles=['ADMIN'];
      this.authenticated=true;
      return true;
    }else{
      this.authenticated=false;
      return false;
    }
  }

  logout() {
    this.authenticated=false;
    this.username=undefined;
    this.roles=undefined;
    this.router.navigateByUrl("/login");
  }
}
