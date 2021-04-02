import { TasksService } from './../tasks/tasks.service';
import { UpdateTaskDto } from './../dto/update-task.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { List } from '../schemas/list.schema';
import { ListsService } from './lists.service';
import { CreateListDto } from '../dto/create-list.dto';
import { CreateTaskDto } from 'src/dto/create-task.dto';
import { Types } from 'mongoose';

@Controller('lists')
export class ListsController {
  constructor(private readonly listService: ListsService) {}

  @Get()
  public async getLists(): Promise<List[]> {
    return await this.listService.findAll();
  }

  @Post()
  public async addList(@Res() res, @Body() createListDto: CreateListDto) {
    return await this.listService.create(res, createListDto);
  }

  @Post('/:listId/tasks')
  public async addTask(
    @Param('listId') listId: Types.ObjectId,
    @Body() createTaskDto: CreateTaskDto,
  ) {
    return await this.listService.createTask(listId, createTaskDto);
  }

  @Patch('/:listId/tasks/:id')
  public async editTask(
    @Param('listId') listId: Types.ObjectId,
    @Param('id') id: Types.ObjectId,
    @Body() updateTaskDto: UpdateTaskDto,
  ) {
    return await this.listService.updateTask(listId, id, updateTaskDto);
  }

  @Delete('/:listId/tasks/:id')
  public async deleteTask(
    @Param('listId') listId: Types.ObjectId,
    @Param('id') id: Types.ObjectId,
  ) {
    return await this.listService.deleteTask(listId, id);
  }

  @Delete('/:id')
  public async deleteList(@Res() res, @Param('id') listId: string) {
    return await this.listService.remove(res, listId);
  }
}
