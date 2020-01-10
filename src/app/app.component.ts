import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'analyzer-url';
  table = false;
  responseAnalyze;
  showTable(event) {
    this.table = event;
  }
  getAnalyze(event) {
    this.responseAnalyze = event;
  }
}
