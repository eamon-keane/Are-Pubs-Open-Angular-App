import { Component, OnInit } from "@angular/core";

@Component({
  selector: "yes",
  templateUrl: "./yes.component.html",
  styleUrls: ["./yes.component.css"],
})
export class YesComponent implements OnInit {
  audio = new Audio();
  constructor() {}

  ngOnInit() {
    this.playAudio();
  }

  playAudio() {
    this.audio.src = "../../assets/sounds/Irish Music Trimmed.mp3";
    this.audio.load();
    this.audio.play();
    this.audio.loop = true;
  }
  ngOnDestroy() {
    this.audio.pause();
    this.audio.currentTime = 0;
  }
}
