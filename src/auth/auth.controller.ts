import { LoginDto, RegisterDto } from '@database/dtos/auth.dto';
import { Body, Controller, Post, Request } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Request() req, @Body() loginInput: LoginDto) {
    return this.authService.login(loginInput);
  }

  @Post('register')
  async register(@Request() req, @Body() registerInput: RegisterDto) {
    return this.authService.register(registerInput);
  }
}
