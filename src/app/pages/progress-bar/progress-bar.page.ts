import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.page.html',
  styleUrls: ['./progress-bar.page.scss'],
})
export class ProgressBarPage implements OnInit {

  percent = 0.05;

  constructor() { }

  ngOnInit() {
  }

  changeRange(event) {
    const temp = event.detail.value / 100;
    this.percent = temp;
  }
}
