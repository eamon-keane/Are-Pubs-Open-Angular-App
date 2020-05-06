import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { LandingComponent } from "./landing/landing.component";
import { MatIconModule } from "@angular/material/icon";
import { YesComponent } from './yes/yes.component';
import { NoComponent } from './no/no.component';

@NgModule({
  declarations: [AppComponent, LandingComponent, YesComponent, NoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
