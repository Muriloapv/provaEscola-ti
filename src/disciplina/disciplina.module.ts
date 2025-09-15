import { Module } from '@nestjs/common';
import { DisciplinaController } from './disciplina.controller';

@Module({
  controllers: [DisciplinaController]
})
export class DisciplinaModule {}
