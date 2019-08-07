import { TestBed } from '@angular/core/testing';

import { ArithmeticService } from './arithmetic.service';

describe('ArithmeticService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArithmeticService = TestBed.get(ArithmeticService);
    expect(service).toBeTruthy();
  });
});
