import { Paciente } from 'src/pacientes/entities/paciente.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Consulta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date', nullable: false })
  fecha: Date;

  @Column({ type: 'varchar', nullable: false })
  motivoConsulta: string;

  @Column({ type: 'varchar', nullable: false })
  diagnostico: string;

  @OneToMany(() => Paciente, (paciente) => paciente.consultas)
  paciente: Paciente;
}
