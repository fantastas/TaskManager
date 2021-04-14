import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/schemas/user.schema';

const usersFeature = MongooseModule.forFeature([
  {
    name: User.name,
    schema: UserSchema,
  },
]);

@Module({
  imports: [usersFeature],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService, usersFeature],
})
export class UsersModule {}
