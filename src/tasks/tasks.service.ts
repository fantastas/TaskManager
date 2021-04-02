import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Task, TaskDocument } from '../schemas/task.schema';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel(Task.name)
    public taskModel: Model<TaskDocument>,
  ) {}

  // async create(@Res() res, createTaskDto: CreateTaskDto): Promise<Task> {
  //   const createdTask = new this.taskModel(createTaskDto);
  //   const isCreated = this.taskModel.findOne({ name: createdTask.title });
  //   if (isCreated) {
  //     createdTask.save();
  //     return await res.status(HttpStatus.OK).json({
  //       message: 'List has been created successfully',
  //       createdTask,
  //     });
  //   } else {
  //     return await res.status(HttpStatus.BAD_REQUEST).json({
  //       message: 'Error: List was not created!',
  //       status: 400,
  //     });
  //   }
  // }

  async findAll() {
    return await this.taskModel.find().exec();
  }

  // async deleteOld(id: Types.ObjectId) {
  //   const deletedTask = await this.taskModel.findByIdAndRemove(id);
  //   return await deletedTask;
  // }
}
