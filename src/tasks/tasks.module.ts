import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskRepository } from './task.repository';
import { Task } from './task.entity';
// import { DatabaseModule } from 'src/database/database.module';
// import { taskProviders } from './task.providers';

// @Module({
//   imports: [DatabaseModule, TypeOrmModule.forFeature([Task])],
//   controllers: [TasksController],
//   providers: [...taskProviders, TasksService, TaskRepository],
// })
// export class TasksModule {}

@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  controllers: [TasksController],
  providers: [TasksService, TaskRepository],
  exports: [TasksService],
})
export class TasksModule {}
