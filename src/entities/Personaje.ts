import {Entity,PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, OneToMany, JoinTable, ManyToOne} from "typeorm";
import { Planeta } from "./Planeta";
import { User } from "./User"

@Entity()
export class Personaje extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
      Nombre: string

      @Column()
      Estatura: number

      @Column()
      Fecha_Nacimiento: string

      @Column()
      Color_de_ojos: string


      
    @ManyToOne(() => Planeta, planeta => planeta.personajes)
    planeta: Planeta;


@ManyToMany(() => User,  user => user.personajes)
    @JoinTable()
    user: User[];
}
