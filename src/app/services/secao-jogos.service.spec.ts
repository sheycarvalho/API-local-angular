import { TestBed } from '@angular/core/testing';

import { SecaoJogosService } from './secao-jogos.service';

describe('SecaoJogosService', () => {
  let service: SecaoJogosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecaoJogosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
