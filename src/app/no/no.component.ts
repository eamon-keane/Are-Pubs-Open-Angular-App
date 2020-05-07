import { Component, OnInit } from "@angular/core";

@Component({
  selector: "no",
  templateUrl: "./no.component.html",
  styleUrls: ["./no.component.css"],
})
export class NoComponent implements OnInit {
  audio = new Audio();
  constructor() {}

  ngOnInit() {
    this.playAudio();
  }

  playAudio() {
    this.audio.src = "../../assets/sounds/Paddy Losty.mp3";
    this.audio.load();
    this.audio.play();
  }
  ngOnDestroy() {
    this.audio.pause();
    this.audio.currentTime = 0;
  }
}
