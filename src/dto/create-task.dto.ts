import { List } from './../schemas/list.schema';
import { Prop } from '@nestjs/mongoose';

export class CreateTaskDto {
  @Prop({ required: true })
  title: string;
  @Prop({ required: true })
  _listId: List;
}
