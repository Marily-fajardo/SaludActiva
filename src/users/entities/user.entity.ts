import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserImage } from './user-image.entity';
import { Paciente } from 'src/pacientes/entities/paciente.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn({ type: 'int4' })
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string;

  @Column({ type: 'varchar', nullable: false })
  password: string;

  @Column({ type: 'varchar', nullable: false })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  sexo: string;

  @Column({ type: 'boolean', default: true })
  active: boolean;

  @Column({ type: 'text', array: true, default: ['user'] })
  roles: string[];

  @OneToMany(() => UserImage, (userImage) => userImage.user, {
    cascade: true,
  })
  images?: UserImage[];
  @ManyToOne(() => Paciente, paciente => paciente.usuarios)
  paciente: Paciente;
}
