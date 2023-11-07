import { Module } from '@nestjs/common';
import { ConsanguinidadesService } from './consanguinidades.service';
import { ConsanguinidadesController } from './consanguinidades.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Consanguinidade } from './entities/consanguinidade.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Consanguinidade])],
  controllers: [ConsanguinidadesController],
  providers: [ConsanguinidadesService]
})
export class ConsanguinidadesModule {}
