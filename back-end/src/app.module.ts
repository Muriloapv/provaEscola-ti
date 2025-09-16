import { Module } from '@nestjs/common';
import { DisciplinaModule } from './disciplina/disciplina.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config'
import { CursosModule } from './cursos/cursos.module';
import { Curso } from './cursos/entities/curso.entity';
import { Disciplina } from './disciplina/entities/disciplina.entity';
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
      entities: [ Curso, Disciplina  ],
      migrations: [__dirname + '/database/migrations/*{.js,.ts}'],
      synchronize: true,//desabilita
      logging: ['query', 'error', 'schema'], 
      autoLoadEntities: true,
  }),
  DisciplinaModule, CursosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

