import {Entity, Column, PrimaryGeneratedColumn,BaseEntity, ManyToMany, JoinTable} from 'typeorm';
import { Planeta } from './Planeta';
import { Personaje } from './Personaje';

@Entity()
export class User extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Nombre: string;

  @Column()
  Apellido: string;

  @Column({unique: true})
  Correo: string;

  @Column()
  Contraseña: string;

    @ManyToMany(() => Planeta)
    @JoinTable()
    planetas: Planeta[];

    @ManyToMany(() => Personaje)
    @JoinTable()
    personajes: Personaje[];
}