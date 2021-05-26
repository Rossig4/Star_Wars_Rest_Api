import {Entity,PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToMany, JoinTable} from "typeorm";
import { Personaje } from "./Personaje";
import { User } from "./User";

@Entity()
export class Planeta extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
      Nombre: string

    @Column()
      Rotación: number
    
      @Column()
      Diámetro: number

      @Column()
      Gravedad: string



@ManyToMany(() => User,  user => user.planetas)
    @JoinTable()
    user: User[];

@OneToMany(() => Personaje, personaje => personaje.planeta)
personajes: Personaje[];
}