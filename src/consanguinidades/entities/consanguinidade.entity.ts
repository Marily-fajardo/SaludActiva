import { Paciente } from 'src/pacientes/entities/paciente.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Consanguinidade {
  @PrimaryGeneratedColumn({ type: 'int4' })
  id?: number;

  @Column({ type: 'varchar', nullable: false })
  genero: string;

  @ManyToOne(() => Paciente, (paciente) => paciente.recetas)
  paciente: Paciente;
}
