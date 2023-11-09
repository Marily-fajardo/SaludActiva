import { Paciente } from 'src/pacientes/entities/paciente.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
@Entity()
export class Receta {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'date', nullable: false})
    fecha: Date;

    @Column({ type: 'varchar', nullable: false })
    medicamentos: string;

    @OneToMany(() => Paciente, paciente => paciente.recetas)
    paciente: Paciente;
}
