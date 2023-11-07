import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
import { Paciente } from 'src/pacientes/entities/paciente.entity';
export class CreateConsanguinidadeDto {
    @IsNumber()
    id?: number;
  
    @IsString()
    @IsNotEmpty()
    @MaxLength(50)
    genero: string;
  
    paciente: Paciente;
}
