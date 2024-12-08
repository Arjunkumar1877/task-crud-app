import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskService } from './task/task.service';
import { TaskModule } from './task/task.module';

@Module({
  imports: [
   TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '7025',
    database: 'db_test',
    autoLoadEntities: true,
    synchronize: true   
   }),
   TaskModule
  ]
})
export class AppModule {}
