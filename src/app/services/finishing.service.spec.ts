import { TestBed, inject } from '@angular/core/testing';

import { FinishingService } from './finishing.service';

describe('FinishingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FinishingService]
    });
  });

  it('should be created', inject([FinishingService], (service: FinishingService) => {
    expect(service).toBeTruthy();
  }));
});
