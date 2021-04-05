import { Delete } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';
import { Types } from 'mongoose';
import { Task } from '../schemas/task.schema';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}
  // @Get()
  // public async findAll(): Promise<Task[]> {
  //   return await this.taskService.findAll();
  // }

  // @Delete('/:id')
  // public async deleteOld(@Param('id') id: Types.ObjectId) {
  //   return await this.taskService.deleteOld(id);
  // }
}
