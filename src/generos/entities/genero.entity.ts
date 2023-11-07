import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
Entity();
export class Genero {
  @PrimaryGeneratedColumn({ type: 'int4' })
  id?: number;

  @Column({ type: 'varchar', nullable: false })
  genero: string;
}
