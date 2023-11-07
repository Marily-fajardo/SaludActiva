import { Paciente } from 'src/pacientes/entities/paciente.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
@Entity()
export class Receta {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'date', nullable: false})
    fecha: Date;

    @Column({ type: 'varchar', nullable: false })
    medicamentos: string;

  
    @ManyToOne(() => Paciente, paciente => paciente.recetas)
    paciente: Paciente;
}
