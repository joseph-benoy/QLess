import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { signUpDto } from './dto';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('/signup')
  async signUp(
    @Body() dto: signUpDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const access_token = await this.authService.signUp(dto);
    res.cookie('access_token', access_token.access_token);
    return access_token;
  }
}
