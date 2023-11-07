import { Module } from '@nestjs/common';
import { ConsanguinidadesService } from './consanguinidades.service';
import { ConsanguinidadesController } from './consanguinidades.controller';

@Module({
  controllers: [ConsanguinidadesController],
  providers: [ConsanguinidadesService]
})
export class ConsanguinidadesModule {}
