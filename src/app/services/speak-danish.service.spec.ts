import { TestBed } from '@angular/core/testing';

import { SpeakDanishService } from './speak-danish.service';

describe('SpeakDanishService', () => {
  let service: SpeakDanishService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpeakDanishService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
