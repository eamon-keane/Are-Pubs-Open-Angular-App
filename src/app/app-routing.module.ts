import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { YesComponent } from "./yes/yes.component";
import { LandingComponent } from "./landing/landing.component";
import { NoComponent } from "./no/no.component";

const routes: Routes = [
  { path: "", redirectTo: "/", pathMatch: "full" },
  { path: "", component: LandingComponent },
  { path: "GoAhItAgain", component: YesComponent },
  { path: "TherellBeSomeShtoppinMe", component: NoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
