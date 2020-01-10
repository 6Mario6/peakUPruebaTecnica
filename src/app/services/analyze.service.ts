import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

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

  constructor(private http: HttpClient) {}

  get() {
    return of(this.dataSource);
  }

  getAnalyze() {
    return this.http.get('https://api.aylien.com/api/v1/sentiment').pipe(map((response: any) => response));
  }
}
