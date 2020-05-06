import { Component, OnInit } from "@angular/core";

@Component({
  selector: "landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.css"],
})
export class LandingComponent implements OnInit {
  dateTimeNow: Date = new Date();
  constructor() {
    setInterval(() => {
      this.dateTimeNow = new Date();
    }, 1);
  }

  ngOnInit() {}
}
