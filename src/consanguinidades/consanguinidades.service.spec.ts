import { Test, TestingModule } from '@nestjs/testing';
import { ConsanguinidadesService } from './consanguinidades.service';

describe('ConsanguinidadesService', () => {
  let service: ConsanguinidadesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConsanguinidadesService],
    }).compile();

    service = module.get<ConsanguinidadesService>(ConsanguinidadesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
