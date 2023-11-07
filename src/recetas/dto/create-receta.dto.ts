import { IsNotEmpty, IsNumber, IsString, IsDate } from 'class-validator';
import { Paciente } from 'src/pacientes/entities/paciente.entity';

export class CreateRecetaDto {
  @IsNumber()
  id: number;

  @IsDate()
  @IsNotEmpty()
  fecha: Date;

  @IsString()
  @IsNotEmpty()
  medicamentos: string;

  paciente: Paciente;
}
