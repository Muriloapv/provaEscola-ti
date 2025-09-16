import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm"

@Entity()
export class Curso {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    nome : string;

    @Column()
    cargaHoraria: string;

    @CreateDateColumn()
    dataInicio : string;
}
