import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiResponse({ status: 201, description: 'User registered successfully.' })
  @ApiBody({
    description: 'User registration data',
    type: AuthDto,
  })
  async register(@Body() body: AuthDto) {
    return this.authService.register(body.username, body.password);
  }

  @Post('login')
  @ApiResponse({ status: 200, description: 'User logged in successfully.' })
  @ApiBody({
    description: 'User login data',
    type: AuthDto,
  })
  async login(@Body() body: AuthDto) {
    return this.authService.login(body.username, body.password);
  }
}
