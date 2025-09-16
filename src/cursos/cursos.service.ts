import { Injectable } from '@nestjs/common';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Curso } from './entities/curso.entity';

@Injectable()
export class CursosService {

  constructor(
  @InjectRepository( Curso  )
    private cursoRepository: Repository<Curso>
  ){}

  createCurso(createCursoDto: CreateCursoDto) {
    return this.cursoRepository.save( createCursoDto )
  }

  getAllCursos(){
    return this.cursoRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} curso`;
  }

  update(id: number, updateCursoDto: UpdateCursoDto) {
    return `This action updates a #${id} curso`;
  }

  remove(id: number) {
    return `This action removes a #${id} curso`;
  }
}
