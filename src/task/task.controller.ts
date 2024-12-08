import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from 'src/dto/create-task.dto';
import { UpdateTaskDto } from 'src/dto/update-task.dto';

@Controller('task')
export class TaskController {
    constructor(private readonly taskService: TaskService){}

    @Get()
    findAll(){
        return this.taskService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number){
        return this.taskService.findOne(+id);
    }

    @Post()
    create(@Body() createTaskDto: CreateTaskDto) {
        return this.taskService.create(createTaskDto);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() updateRaskDto: UpdateTaskDto){
        return this.taskService.update(+id, updateRaskDto);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.taskService.delete(+id);
    }


}
