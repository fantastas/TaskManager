import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ListDocument = List & Document;

@Schema()
export class List {
  @Prop({ required: true })
  title: string;
}

export const ListSchema = SchemaFactory.createForClass(List);
