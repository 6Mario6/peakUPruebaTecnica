/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AnalyzeService } from './analyze.service';

describe('Service: Analyze', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnalyzeService]
    });
  });

  it('should ...', inject([AnalyzeService], (service: AnalyzeService) => {
    expect(service).toBeTruthy();
  }));
});
