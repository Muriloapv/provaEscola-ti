import { Body, Controller, Get, Post } from '@nestjs/common';
import { CursoDto } from './dto/curso.dto';

@Controller('curso')
export class CursoController {


    @Post()
    addDisciplina( @Body() cursoDTO: CursoDto ){
    
    }


}
