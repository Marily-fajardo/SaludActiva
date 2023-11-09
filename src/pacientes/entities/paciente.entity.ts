import { Consanguinidade } from 'src/consanguinidades/entities/consanguinidade.entity';
import { Consulta } from 'src/consultas/entities/consulta.entity';
import { Genero } from 'src/generos/entities/genero.entity';
import { Receta } from 'src/recetas/entities/receta.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Paciente {
  @PrimaryGeneratedColumn({ type: 'int4' })
  id?: number;

  @Column({ type: 'varchar', nullable: false })
  nombre: string;

  @Column({ type: 'varchar', nullable: false })
  apellido: string;

  @Column({ type: 'numeric', nullable: false })
  edad: number;

  @ManyToOne(() => Genero, (genero) => genero.paciente)
  genero: Genero[];

  @Column({ type: 'varchar', nullable: false })
  direccion: string;

  @Column({ type: 'varchar', nullable: false })
  telefono: string;

  @Column({ type: 'varchar', nullable: false })
  correoElectronico: string;

  @ManyToOne(() => Consanguinidade, (consanguinidad) => consanguinidad.paciente)
  consanguinidades: Consanguinidade[];

  @Column({ type: 'varchar', nullable: false })
  alergias: string;

  @Column({ type: 'varchar', nullable: false })
  enfermedadesCronicas: string;

  @Column({ type: 'numeric', nullable: false })
  altura: number;

  @Column({ type: 'numeric', nullable: false })
  peso: number;

  @ManyToOne(() => Consulta, (consulta) => consulta.paciente)
  consultas: Consulta[];

  @ManyToOne(() => Receta, (receta) => receta.paciente)
  recetas: Receta[];

  @ManyToOne(() => User, (usuario) => usuario.paciente)
  usuarios: User[];
}
