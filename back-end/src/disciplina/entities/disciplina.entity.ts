import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Curso } from '../../cursos/entities/curso.entity';

@Entity()
export class Disciplina {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  // N Disciplinas -> 1 Curso
  @ManyToOne(() => Curso, (curso) => curso.disciplinas, { onDelete: 'CASCADE' })
  curso: Curso;
}
