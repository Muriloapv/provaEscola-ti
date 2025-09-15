import { Module } from '@nestjs/common';
import { CursoModule } from './curso/curso.module';
import { DisciplinaModule } from './disciplina/disciplina.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config'
import { Disciplina } from './disciplina/disciplina.entity';
import { Curso } from './curso/curso.entity';


@Module({
  imports: [ 
  ConfigModule.forRoot({
    envFilePath: '.env', 
    isGlobal: true  
  }),
  TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DB_HOST,
      // port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [ Disciplina, Curso ],
      migrations: [__dirname + '/database/migrations/*{.js,.ts}'],
      synchronize: false,
  }),
  CursoModule, DisciplinaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

