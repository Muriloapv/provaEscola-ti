import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Curso } from './entities/curso.entity';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { Disciplina } from '../disciplina/entities/disciplina.entity';

@Injectable()
export class CursosService {
  constructor(
    @InjectRepository( Curso ) private readonly cursoRepo: Repository<Curso>,
    @InjectRepository( Disciplina ) private readonly discRepo: Repository<Disciplina>,
  ) {}

  async createCurso( dto: CreateCursoDto ) {
    const curso = this.cursoRepo.create({
      nome: dto.nome,
      cargaHoraria: dto.cargaHoraria,
      disciplinas: dto.disciplinas?.map( d => this.discRepo.create({ nome: d.nome })) ?? [],
    });
    return this.cursoRepo.save( curso );
  }

  findAll() {
    return this.cursoRepo.find({ relations: [ 'disciplinas' ] });
  }

  async findOne( id: number ) {
    const curso = await this.cursoRepo.findOne({ where: { id }, relations: ['disciplinas'] });
    if ( !curso ) throw new NotFoundException('Curso não encontrado');
    return curso;
  }

  async update(id: number, dto: UpdateCursoDto) {
    const curso = await this.findOne(id);
    if ( dto.nome !== undefined ) curso.nome = dto.nome;
    if ( dto.cargaHoraria !== undefined ) curso.cargaHoraria = dto.cargaHoraria;

    if (dto.disciplinas) {
      // estratégia simples: substitui todas as disciplinas
      await this.discRepo.delete({ curso: { id } });
      curso.disciplinas = dto.disciplinas.map(d => this.discRepo.create({ nome: d.nome, curso }));
    }

    return this.cursoRepo.save(curso);
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.cursoRepo.delete(id);
    return { deleted: true };
  }

  async addDisciplina(cursoId: number, nome: string) {
    const curso = await this.cursoRepo.findOneBy({ id: cursoId });
    if (!curso) throw new NotFoundException('Curso não encontrado');
    const disciplina = this.discRepo.create({ nome, curso });
    return this.discRepo.save(disciplina);
  }

  async removeDisciplina(cursoId: number, disciplinaId: number) {
    const disciplina = await this.discRepo.findOne({ where: { id: disciplinaId }, relations: ['curso'] });
    if (!disciplina || disciplina.curso.id !== cursoId) {
      throw new NotFoundException('Disciplina não pertence a este curso');
    }
    await this.discRepo.delete(disciplinaId);
    return { deleted: true };
  }
}
