import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm"

@Entity()
export class Curso {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome : string;

    @Column()
    cargaHoraria: number;

    @CreateDateColumn()
    dataInicio : Date;
}
