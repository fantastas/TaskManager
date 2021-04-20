import { AuthService } from './auth/auth.service';
import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
// import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService, // private readonly authService: AuthService,
  ) {}

  // @UseGuards(LocalAuthGuard)
  // @Post('auth/login')
  // async login(@Req() req) {
  //   return this.authService.login(req.user);
  // }

  // @UseGuards(JwtAuthGuard)
  // @Get('profile')
  // getProfile(@Req() req) {
  //   return req.user;
  // }
}
