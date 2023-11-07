import { IsDate, IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
import { Paciente } from 'src/pacientes/entities/paciente.entity';
export class CreateConsultaDto {
    @IsNumber()
    id: number;
  
    @IsDate()
    @IsNotEmpty()
    fecha: Date;
  
    @IsString()
    @IsNotEmpty()
    motivoConsulta: string;
  
    @IsString()
    @IsNotEmpty()
    diagnostico: string;
  
    paciente: Paciente;
}
