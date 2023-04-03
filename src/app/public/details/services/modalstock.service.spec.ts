import { TestBed } from '@angular/core/testing';

import { ModalstockService } from './modalstock.service';

describe('ModalstockService', () => {
  let service: ModalstockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalstockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
