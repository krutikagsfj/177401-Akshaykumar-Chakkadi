import { PlayRoutingModule } from './play-routing.module';

describe('PlayRoutingModule', () => {
  let playRoutingModule: PlayRoutingModule;

  beforeEach(() => {
    playRoutingModule = new PlayRoutingModule();
  });

  it('should create an instance', () => {
    expect(playRoutingModule).toBeTruthy();
  });
});
