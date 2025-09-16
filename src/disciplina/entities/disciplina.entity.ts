import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Disciplina{
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    nome: string;
}