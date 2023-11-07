import { IsNotEmpty, IsNumber, IsString} from 'class-validator';
import { Paciente } from 'src/pacientes/entities/paciente.entity';
export class CreateGeneroDto {
  @IsNumber()
  id?: number;

  @IsString()
  @IsNotEmpty()
  genero: string;

  paciente: Paciente;
}
