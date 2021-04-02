import { Prop } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { List } from 'src/schemas/list.schema';

export class CreateTaskDto {
  @Prop({ required: true })
  title: string;
  @Prop({ required: true })
  _listId: Types.ObjectId;
}
