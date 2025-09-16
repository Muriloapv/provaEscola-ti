import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CursosService } from './cursos.service';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';

@Controller('cursos')
export class CursosController {
  constructor(private readonly cursosService: CursosService) {}

  @Post()
  createCurso(@Body() dto: CreateCursoDto) {
    return this.cursosService.createCurso(dto);
  }

  @Get()
  getAll() {
    return this.cursosService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.cursosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateCursoDto) {
    return this.cursosService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cursosService.remove(+id);
  }

  @Post(':id/disciplinas')
  addDisciplina(@Param('id') cursoId: string, @Body() body: { nome: string }) {
    return this.cursosService.addDisciplina(+cursoId, body.nome);
  }

  @Delete(':id/disciplinas/:disciplinaId')
  removeDisciplina(@Param('id') cursoId: string, @Param('disciplinaId') disciplinaId: string) {
    return this.cursosService.removeDisciplina(+cursoId, +disciplinaId);
  }
}
