import { Paciente } from 'src/pacientes/entities/paciente.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Genero {
  @PrimaryGeneratedColumn({ type: 'int4' })
  id?: number;

  @Column({ type: 'varchar', nullable: false })
  genero: string;

  @OneToMany(() => Paciente, (paciente) => paciente.recetas)
  paciente: Paciente;
}
