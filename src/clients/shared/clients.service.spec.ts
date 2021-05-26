import { Test, TestingModule } from '@nestjs/testing';
import { ClientsService } from './clients.service';

describe('ClientsService', () => {
  let provider: ClientsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClientsService],
    }).compile();

    provider = module.get<ClientsService>(ClientsService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
