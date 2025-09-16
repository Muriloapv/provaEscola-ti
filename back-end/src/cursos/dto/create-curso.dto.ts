import { IsArray, IsInt, IsNotEmpty, IsOptional, IsString, Min, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

class DisciplinaInlineDto {
  @IsString()
  @IsNotEmpty()
  nome: string;
}
export class CreateCursoDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({example: 'Engenharia de Software'})
  nome: string;

  @IsInt()
  @Min(1)
  @ApiProperty({example: 380 })
  cargaHoraria: number;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @ApiProperty({ example:[] })
  @Type(() => DisciplinaInlineDto)
  disciplinas?: DisciplinaInlineDto[];
}

// {
//   "nome": "Engenharia de Software teste array",
//   "cargaHoraria":  400,
//   "disciplinas": [
//     { "nome": "Algoritmos e Programação" },
//     { "nome": "Banco de Dados" },
//     { "nome": "Engenharia de Requisitos" },
//     { "nome": "Arquitetura de Software" },
//     { "nome": "Testes de Software" },
//     { "nome": "Gestão de Projetos" }
// ]
// }
