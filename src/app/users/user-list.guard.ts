import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { UsersState } from "./users-store/users-store.reducers";
import { LoadUsers } from "./users-store/users-store.actions";

@Injectable()
export class UserListGuard implements CanActivate {
  constructor(private store: Store<UsersState>) {}

  // The interesting thing is that the route
  //  guard will also make an API request if we
  // currently have no data in the Store - and populate the store with the data before we finish transitioning to the route.


  /*as long as I haven’t refreshed the app the data
   will still be in the Store, and skip the API request.
    This is neat! */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    this.store.dispatch(new LoadUsers());
    return true;
  }
}
// Reference:
// https://toddmotto.com/preloading-ngrx-store-route-guards
