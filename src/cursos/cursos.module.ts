import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CursosService } from './cursos.service';
import { CursosController } from './cursos.controller';
import { Curso } from './entities/curso.entity';
import { Disciplina } from '../disciplina/entities/disciplina.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Curso, Disciplina])],
  controllers: [CursosController],
  providers: [CursosService],
  exports: [TypeOrmModule],
})
export class CursosModule {}
