import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { DisciplinaService } from './disciplina.service';
import { CreateDisciplinaDto } from './dto/create-disciplina.dto';
import { UpdateDisciplinaDto } from './dto/update-disciplina.dto';
import type { Response, Request } from 'express';

@Controller('disciplina')
export class DisciplinaController {
  constructor(private readonly disciplinaService: DisciplinaService) {}

  @Post()
  async createDisciplina( @Res() response: Response,  @Body() createDisciplinaDto: CreateDisciplinaDto) {
    return response.status(200).json( this.disciplinaService.create(createDisciplinaDto));
  }

  @Get()
  getAllDisciplinas( @Res() response: Response ) {
    return response.status(200).json( this.disciplinaService.findAll());
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.disciplinaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDisciplinaDto: UpdateDisciplinaDto) {
    return this.disciplinaService.update(+id, updateDisciplinaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.disciplinaService.remove(+id);
  }
}
