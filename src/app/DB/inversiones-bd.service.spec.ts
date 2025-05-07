import { TestBed } from '@angular/core/testing';

import { InversionesBDService } from './inversiones-bd.service';

describe('InversionesBDService', () => {
  let service: InversionesBDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InversionesBDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
