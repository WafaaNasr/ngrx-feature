import { Injectable } from "@angular/core";
import { Effect, Actions} from "@ngrx/effects";
import * as usersActions from "./users-store.actions";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/map";
import { User } from "./models/user";
/*
Currently, the only responsibility of this class is to actually fetch the
users when the LoadUsers action is dispatched.
*/

@Injectable()
export class UsersStoreEffects {
  /*  // This will perform a GET
        https://randomuser.me/api/?results=10&seed=abc
    // and map the result into an action. Since we decorate it
     with @Effect,
    // it will automatically dispatch the resulting action to the store */

constructor(private actions$: Actions, private http: HttpClient) {}

  @Effect() fetchUsers$ = this.actions$.
  ofType(usersActions.LOAD_USERS)
  .switchMap(() => this.http.get<{ info: any, results: User[] }>
  ("https://randomuser.me/api/?results=10&seed=abc")
  .map(res => new usersActions.LoadUsersComplete(res.results)));
}
