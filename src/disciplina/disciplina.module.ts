import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DisciplinaService } from './disciplina.service';
import { DisciplinaController } from './disciplina.controller';
import { Disciplina } from './entities/disciplina.entity';
import { Curso } from '../cursos/entities/curso.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Disciplina, Curso])],
  controllers: [DisciplinaController],
  providers: [DisciplinaService],
})
export class DisciplinaModule {}
