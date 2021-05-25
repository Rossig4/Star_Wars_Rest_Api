import {Entity,PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne} from "typeorm";
import { Planeta } from "./Planeta";

@Entity()
export class Personaje extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
      Nombre: string

      @Column()
      Estatura: number

      @Column()
      Fecha_Nacimiento: Date

      @Column()
      Foto: string

      @Column()
      Color_de_ojos: string

      
    @ManyToOne(() => Planeta, planeta => planeta.personajes)
    planet: Planeta;
}