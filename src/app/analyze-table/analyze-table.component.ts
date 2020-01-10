import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analyze-table',
  templateUrl: './analyze-table.component.html',
  styleUrls: ['./analyze-table.component.scss']
})
export class AnalyzeTableComponent implements OnInit {

  ELEMENT_DATA: any[] = [
    {polarity: 'neutral', subjectivity: 'subjective', text: '...', polarity_confidence: 0.762665271590332, subjectivity_confidence: 1.0},
  ];
  displayedColumns: string[] = ['polarity', 'subjectivity', 'text', 'polarity_confidence', 'subjectivity_confidence'];
  dataSource = this.ELEMENT_DATA;
  constructor() {

  }

  ngOnInit() {
  }


}
