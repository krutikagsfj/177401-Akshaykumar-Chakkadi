import { TestBed } from '@angular/core/testing';

import { PlayRoutingService } from './play-routing.service';

describe('PlayRoutingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayRoutingService = TestBed.get(PlayRoutingService);
    expect(service).toBeTruthy();
  });
});
