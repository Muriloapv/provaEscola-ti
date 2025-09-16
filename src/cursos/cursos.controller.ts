import { Controller, Get, Post, Body, Patch, Param, Delete, Res  } from '@nestjs/common';
import { CursosService } from './cursos.service';
import { CreateCursoDto } from './dto/create-curso.dto';
import type { Response, Request } from 'express';
import { UpdateCursoDto } from './dto/update-curso.dto';

@Controller('cursos')
export class CursosController {
  constructor(private readonly cursosService: CursosService) { }

  @Post()
  async createCurso ( @Res() response: Response, @Body() createCursoDto: CreateCursoDto) {
    return response.status(200).json( this.cursosService.createCurso(createCursoDto));
  }

  @Get()
  getAllCursos( @Res() response: Response ) {
   return response.status( 200 ).json( this.cursosService.getAllCursos());
  }

  @Get( ':id')
  findOne(@Param('id') id: string) {
    return this.cursosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCursoDto: UpdateCursoDto) {
    return this.cursosService.update(+id, updateCursoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cursosService.remove(+id);
  }
}

    // @Get( )
    // getAllCursos( @Res() response: Response ){
    //     return response.status(200).json( this.cursoService.getAllCursos());
    // }

    // @Post()
    // async createCurso ( @Res() response: Response, @Body() CursoDto: CursoDto ){
    //     return response.status(200).json( this.cursoService.createCurso(CursoDto))
    // }