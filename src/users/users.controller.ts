import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/:email')
  public async getUser(@Param('email') email: string) {
    return await this.usersService.findOne(email);
  }

  @Post()
  public async addUser(@Res() res, @Body() createUserDto: CreateUserDto) {
    const newList = await this.usersService.create(res, createUserDto);
    res.status(200).json(newList);
  }
}
