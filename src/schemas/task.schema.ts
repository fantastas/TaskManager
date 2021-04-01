import { List } from './list.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import * as mongoose from 'mongoose';

export type TaskDocument = Task & Document;
@Schema()
export class Task {
  @Prop({ required: true })
  title: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: List.name }] })
  _listID: Types.ObjectId;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
