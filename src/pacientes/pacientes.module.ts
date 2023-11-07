import { Module } from '@nestjs/common';
import { PacientesService } from './pacientes.service';
import { PacientesController } from './pacientes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paciente } from './entities/paciente.entity';
import { Genero } from 'src/generos/entities/genero.entity';
import { Receta } from 'src/recetas/entities/receta.entity';
import { Consanguinidade } from 'src/consanguinidades/entities/consanguinidade.entity';
import { Consulta } from 'src/consultas/entities/consulta.entity';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Paciente,Genero,Consanguinidade,Receta,Consulta,User])],
  controllers: [PacientesController],
  providers: [PacientesService]
})
export class PacientesModule {}
