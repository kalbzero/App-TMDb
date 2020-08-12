import { TestBed } from '@angular/core/testing';

import { ApiTmdbService } from './api-tmdb.service';

describe('ApiTmdbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiTmdbService = TestBed.get(ApiTmdbService);
    expect(service).toBeTruthy();
  });
});
