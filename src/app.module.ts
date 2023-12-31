import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

import { FilesModule } from './files/files.module';
import { ConsultasModule } from './consultas/consultas.module';
import { PacientesModule } from './pacientes/pacientes.module';
import { RecetasModule } from './recetas/recetas.module';
import { GenerosModule } from './generos/generos.module';
import { ConsanguinidadesModule } from './consanguinidades/consanguinidades.module';
import { Genero } from './generos/entities/genero.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'saludactiva2',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UsersModule,
    FilesModule,
    ConsultasModule,
    PacientesModule,
    RecetasModule,
    GenerosModule,
    ConsanguinidadesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
