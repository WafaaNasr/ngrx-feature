import { UserListGuard } from "./user-list.guard";
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserListComponent } from "./user-list/user-list.component";

export const routes: Routes = [
  {
    path: "users",
    component: UserListComponent,
    canActivate: [UserListGuard]
  }
];

@NgModule({
  imports: [CommonModule,
     RouterModule.forChild(routes)],
  declarations: [UserListComponent],
  providers: [UserListGuard]
})
export class UsersModule {}
