import {Entity,PrimaryGeneratedColumn, Column, BaseEntity, OneToMany} from "typeorm";
import { Personaje } from "./Personaje";

@Entity()
export class Planeta extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
      Nombre: string

    @Column()
      Rotación: number

      @Column()
      Imagen: string
    
      @Column()
      Diámetro: number

      @Column()
      Gravedad: string
      personajes: any;
}