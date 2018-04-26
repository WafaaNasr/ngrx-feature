import { StoreModule } from "@ngrx/store";
import { UserListGuard } from "./user-list.guard";
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserListComponent } from "./user-list/user-list.component";
import { HttpClientModule } from "@angular/common/http";
import { usersReducer } from "./users-store/users-store.reducers";
import { EffectsModule } from "@ngrx/effects";
import { UsersStoreEffects } from "./users-store/users-store.effects";

export const routes: Routes = [
  {
    path: "",
    component: UserListComponent,
    canActivate: [UserListGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    StoreModule.forFeature("users", usersReducer),
    EffectsModule.forFeature([UsersStoreEffects])
  ],
  declarations: [UserListComponent],
  providers: [UserListGuard]
})
export class UsersModule {}
/*Keep in mind that this is a simple example, with a single reducer
sand a simple state for our feature. The reducer can be of type
ActionReducerMap, and have multiple sub-states and reducers. */
