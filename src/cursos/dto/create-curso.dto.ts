import { IsArray, IsInt, IsNotEmpty, IsOptional, IsString, Min, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class DisciplinaInlineDto {
  @IsString()
  @IsNotEmpty()
  nome: string;
}
export class CreateCursoDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsInt()
  @Min(1)
  cargaHoraria: number;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DisciplinaInlineDto)
  disciplinas?: DisciplinaInlineDto[];
}
