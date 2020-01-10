import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-analyze-table',
  templateUrl: './analyze-table.component.html',
  styleUrls: ['./analyze-table.component.scss']
})
export class AnalyzeTableComponent implements OnInit {

  @Input() analyzeData;
  displayedColumns: string[] = ['polarity', 'subjectivity', 'text', 'polarity_confidence', 'subjectivity_confidence'];
  dataSource;
  constructor() {

  }

  ngOnInit() {
    this.dataSource = this.analyzeData;
  }


}
