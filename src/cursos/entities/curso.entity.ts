import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm';
import { Disciplina } from '../../disciplina/entities/disciplina.entity';

@Entity()
export class Curso {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  nome: string;

  @Column({ type: 'int' })
  cargaHoraria: number;

  @CreateDateColumn({ type: 'timestamp' })
  dataInicio: Date;

  // 1 Curso -> N Disciplinas
  @OneToMany(() => Disciplina, (disciplina) => disciplina.curso, {
    cascade: ['insert', 'update'], 
    eager  : false,                  
  })
  disciplinas: Disciplina[];
}
