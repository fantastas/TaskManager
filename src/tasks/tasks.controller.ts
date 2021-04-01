import { Controller, Get } from '@nestjs/common';
import { Task } from '../schemas/task.schema';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}
  @Get()
  public async findAll(): Promise<Task[]> {
    return await this.taskService.findAll();
  }
}
