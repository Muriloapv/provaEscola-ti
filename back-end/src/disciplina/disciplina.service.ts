import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Disciplina } from './entities/disciplina.entity';
import { CreateDisciplinaDto } from './dto/create-disciplina.dto';
import { UpdateDisciplinaDto } from './dto/update-disciplina.dto';
import { Curso } from '../cursos/entities/curso.entity';

@Injectable()
export class DisciplinaService {
  constructor(
    @InjectRepository(Disciplina) private readonly discRepo: Repository<Disciplina>,
    @InjectRepository(Curso) private readonly cursoRepo: Repository<Curso>,
  ) {}

  async create(dto: CreateDisciplinaDto) {
    const curso = await this.cursoRepo.findOneBy({ id: dto.cursoId });
    if (!curso) throw new NotFoundException('Curso não encontrado');
    const disciplina = this.discRepo.create({ nome: dto.nome, curso });
    return this.discRepo.save(disciplina);
  }

  findAll() {
    return this.discRepo.find({ relations: ['curso'] });
  }

  findOne(id: number) {
    return this.discRepo.findOne({ where: { id }, relations: ['curso'] });
  }

  async update(id: number, dto: UpdateDisciplinaDto) {
    await this.discRepo.update(id, { nome: dto.nome });
    return this.findOne(id);
  }

  remove(id: number) {
    return this.discRepo.delete(id);
  }
}
