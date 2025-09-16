import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';
export class CreateDisciplinaDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: "Gestão de Projetos"})
  nome: string;

  @IsInt()
  @Min(1)
  cursoId: number;
}
