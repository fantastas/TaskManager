import { TaskModule } from './tasks/tasks.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListModule } from './lists/lists.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/TaskManager'),
    ListModule,
    TaskModule,
  ],
  controllers: [AppController], // handle http requests
  providers: [AppService],
})
export class AppModule {}