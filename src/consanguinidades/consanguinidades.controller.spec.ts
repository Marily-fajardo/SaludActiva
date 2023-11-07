import { Test, TestingModule } from '@nestjs/testing';
import { ConsanguinidadesController } from './consanguinidades.controller';
import { ConsanguinidadesService } from './consanguinidades.service';

describe('ConsanguinidadesController', () => {
  let controller: ConsanguinidadesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConsanguinidadesController],
      providers: [ConsanguinidadesService],
    }).compile();

    controller = module.get<ConsanguinidadesController>(ConsanguinidadesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
