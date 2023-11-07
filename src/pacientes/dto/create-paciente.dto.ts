import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
import { Consanguinidade } from 'src/consanguinidades/entities/consanguinidade.entity';
import { Consulta } from 'src/consultas/entities/consulta.entity';
import { Genero } from 'src/generos/entities/genero.entity';
import { Receta } from 'src/recetas/entities/receta.entity';
import { User } from 'src/users/entities/user.entity';
export class CreatePacienteDto {
  @IsNumber()
  id?: number;

  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  apellido: string;

  @IsNumber()
  @IsNotEmpty()
  edad: number;

  genero: Genero[];

  @IsString()
  @IsNotEmpty()
  direccion: string;

  @IsString()
  @IsNotEmpty()
  telefono: string;

  @IsString()
  @IsNotEmpty()
  correoElectronico: string;

  consanguinidades: Consanguinidade[];

  @IsString()
  @IsNotEmpty()
  alergias: string;

  @IsString()
  @IsNotEmpty()
  enfermedadesCronicas: string;

  @IsNumber()
  @IsNotEmpty()
  altura: number;

  @IsNumber()
  @IsNotEmpty()
  peso: number;

  consultas: Consulta[];

  recetas: Receta[];

  usuarios: User[];
}
