import { Paciente } from 'src/pacientes/entities/paciente.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Consanguinidade {
  @PrimaryGeneratedColumn({ type: 'int4' })
  id?: number;

  @Column({ type: 'varchar', nullable: false })
  consanguinidad: string;

  @OneToMany(() => Paciente, (paciente) => paciente.consanguinidades)
  paciente: Paciente;
}
