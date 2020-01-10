import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class AnalyzeService {
  dataSource: any[] = [
    {
      polarity: 'neutral',
      subjectivity: 'subjective',
      text: '...',
      polarity_confidence: 0.762665271590332,
      subjectivity_confidence: 1.0
    }
  ];
  constructor() {}

  get() {
    return of(this.dataSource);
  }
}
