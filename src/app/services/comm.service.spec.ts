import { TestBed } from '@angular/core/testing';

import { CommService } from './comm.service';

describe('CommServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommService = TestBed.get(CommService);
    expect(service).toBeTruthy();
  });
});
