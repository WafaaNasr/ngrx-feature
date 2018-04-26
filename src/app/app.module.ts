import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { StoreModule, Store } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { MenuComponent } from "./menu/menu.component";
import { Routes, RouterModule } from "@angular/router";
import { UsersModule } from "./users/users.module";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

export const routes: Routes = [
  {
    path: "",
    component: MenuComponent
  },
  {
    path: "users",
    // loadChildren: "./users/users.module#UsersModule" => Works also
    loadChildren: () => UsersModule
  }
];

@NgModule({
  declarations: [AppComponent, MenuComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    RouterModule.forRoot(routes),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(store: Store<any>) {
    store.select(s => s).subscribe(console.log.bind(console));
  }
}
