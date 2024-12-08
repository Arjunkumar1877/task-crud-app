import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { CreateTaskDto } from 'src/dto/create-task.dto';
import { UpdateTaskDto } from 'src/dto/update-task.dto';

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(Task)
        private taskRepository: Repository<Task>,
    ){}

    async findOne(id: number): Promise<Task>{
        const task = await this.taskRepository.findOne({where: {id}});

        if(!task){
            throw new NotFoundException(`Task with ID ${id} not found`);
        }
     return task;
    }
  
  async create(createTaskDto: CreateTaskDto): Promise<Task>{
    const task = this.taskRepository.create(createTaskDto);
    return this.taskRepository.save(task);
  }

  async update(id: number, updateTaskDto: UpdateTaskDto): Promise<Task>{
    const task = await this.findOne(id);
    Object.assign(task,  updateTaskDto);
    return this.taskRepository.save(task);
  }

  async delete(id: number): Promise<void>{
    const result = await  this.taskRepository.delete(id);
    if(result.affected  === 0){
        throw new NotFoundException(`Task with ID ${id} not fount`)
    }
  }

}
