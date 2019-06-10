import { TestBed } from '@angular/core/testing';

import { NguiLibService } from './ngui-lib.service';

describe('NguiLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NguiLibService = TestBed.get(NguiLibService);
    expect(service).toBeTruthy();
  });
});
