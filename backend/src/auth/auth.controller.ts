import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  UseGuards,
  Req,
  Get,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtRefreshGuard } from '@/common/guards/jwt-refresh.guard';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { Public } from '@/common/decorators/public.decorator';
import { Request } from 'express';

interface RequestWithUser extends Request {
  user: {
    id: string;
    email: string;
    refreshToken?: string;
  };
}

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // ==================== REGISTER ====================
  @Public()
  @Post('register')
  @ApiOperation({ summary: "Yangi foydalanuvchi ro'ylxatdan o'tishi" })
  @ApiResponse({
    status: 201,
    description: "Muvaffaqiyatli ro'yxatdan o'tildi",
  })
  @ApiResponse({ status: 409, description: 'Email yoki username band' })
  async register(@Body() dto: RegisterDto) {
    return this.authService.register(dto);
  }

  // ==================== LOGIN ====================
  @Public()
  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Tizimga kirish' })
  @ApiResponse({ status: 200, description: 'Muvaffaqiyatli kirildi' })
  @ApiResponse({ status: 401, description: "Email yoki parol noto'g'ri" })
  async login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }

  // ==================== REFRESH ====================
  @UseGuards(JwtRefreshGuard)
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth('refresh-token')
  @ApiOperation({ summary: 'Access tokenni yangilash' })
  @ApiResponse({ status: 200, description: 'Tokenlar yangilandi' })
  @ApiResponse({ status: 401, description: "Refresh token noto'g'ri" })
  async refresh(@Req() req: RequestWithUser) {
  return this.authService.refresh(req.user.id, req.user.refreshToken!); 
}

  // ==================== LOGOUT ====================
  @UseGuards(JwtAuthGuard)
  @Post('logout')
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Tizimdan chiqish' })
  @ApiResponse({ status: 200, description: 'Muvaffaqiyatli chiqildi' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async logout(@Req() req: RequestWithUser) {
    return this.authService.logout(req.user.id);
  }

  // ME
  @UseGuards(JwtAuthGuard)
  @Get('me')
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Joriy foydalanuvchi ma\'lumotlari' })
  @ApiResponse({ status: 200, description: 'Foydalanuvchi ma\'lumotlari' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async me(@Req() req: RequestWithUser) {
    return this.authService.getMe(req.user.id); 
  }
}
