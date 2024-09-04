import { TestBed } from '@angular/core/testing';

import { ElevenlabsttsService } from './elevenlabstts.service';

describe('ElevenlabsttsService', () => {
  let service: ElevenlabsttsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElevenlabsttsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
