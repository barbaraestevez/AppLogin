import { inject } from '@angular/core'; //inject
import { CanActivate, Router } from '@angular/router';
/*import { Observable } from 'rxjs';*/



export function authloginGuard(route, state) {
  // /* const _ROUTER = new Router*/
  const _ROUTER = inject(Router);
  const TOKEN = localStorage.getItem('token');


  if (TOKEN) {
    return true;
  }
  else {
    _ROUTER.navigate(['']);
    return false;
  }

  // const user = route.params;
  // console.log(user);
  // return localStorage.getItem('token') !=null;
}

/*export class AuthloginGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  
}*/


/*
export declare interface CanActivate {
CanActivate(route: any, state: any);
}

export const authloginGuard:CanActivate = (route:any, state:any) => {
  const _ROUTER = inject(Router);
  const TOKEN = localStorage.getItem('token');

  if(TOKEN) {
    return true;
  }
  else {
    _ROUTER.navigate(['']);
    return false;
  }
}
*/