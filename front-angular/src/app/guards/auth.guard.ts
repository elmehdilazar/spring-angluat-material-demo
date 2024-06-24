import {CanActivateFn, GuardResult, MaybeAsync, Router} from '@angular/router';
import {Injectable} from "@angular/core";
import {AuthenticationService} from "../services/authentication.service";

@Injectable()
export class AuthGuard implements CanActivateFn  {
  constructor(private auth:AuthenticationService,private router:Router) {

  }
canActivate():MaybeAsync<GuardResult>{
  if(this.auth.authenticated==true){
    return true;

  }else{
    this.router.navigateByUrl("/login")
    return false;
  }

}
}

