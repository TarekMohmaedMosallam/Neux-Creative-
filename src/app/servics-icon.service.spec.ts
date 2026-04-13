import { TestBed } from '@angular/core/testing';

import { ServicsIconService } from './core/servics-icon.service';

describe('ServicsIconService', () => {
  let service: ServicsIconService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicsIconService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
