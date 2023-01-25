import { TestBed } from '@angular/core/testing';

import { ServicedemoService } from './servicedemo.service';

describe('ServicedemoService', () => {
  let service: ServicedemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicedemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
