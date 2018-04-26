import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { User } from "../users-store/models/user";
import { Store } from "@ngrx/store";
import { UsersState } from "../users-store/users-store.reducers";
import * as fromUsers from "../users.store";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"]
})
export class UserListComponent implements OnInit {
  users$: Observable<Array<User>>;

  constructor(public store: Store<UsersState>) {
    this.users$ = this.store.select(fromUsers.getUsersEntities);
    // The selector from users.store, NOT from the reducer itself.
  }

  ngOnInit() {}
}
