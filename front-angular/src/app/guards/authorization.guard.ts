import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import {AuthenticationService} from "../services/authentication.service";
import {Injectable} from "@angular/core";
@Injectable()
export class AuthorizationGuard implements CanActivate{
  constructor(private authService:AuthenticationService,private router : Router) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if(this.authService.authenticated){
  let  requireRoles=route.data['roles'];
  let userRolde=this.authService.roles;

      for (let role of userRolde) {
        if(requireRoles.includes(role)){
          return true;
        }
      }
      return  false;
    }else{
      this.router.navigateByUrl('/login');
      return false;
    }

  }
}
