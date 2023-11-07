import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
export class CreateGeneroDto {
  @IsNotEmpty()
  @IsNumber()
  id?: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  genero: string;
}
