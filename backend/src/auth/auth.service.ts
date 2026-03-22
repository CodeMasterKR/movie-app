import {
  Injectable,
  UnauthorizedException,
  ConflictException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  // ==================== REGISTER ====================
  async register(dto: RegisterDto) {
    const existing = await this.usersService.findByEmail(dto.email);

    if (existing) {
      throw new ConflictException('Bu email band');
    }

    const user = await this.usersService.create(dto);
    const tokens = await this.generateTokens(user.id, user.email);

    await this.usersService.updateRefreshToken(user.id, tokens.refreshToken);

    return { user, ...tokens };
  }

  // ==================== LOGIN ====================
  async login(dto: LoginDto) {
    const user = await this.usersService.findByEmail(dto.email);

    if (!user) {
      throw new UnauthorizedException('Email yoki parol noto\'g\'ri');
    }

    const isPasswordValid = await bcrypt.compare(dto.password, user.passwordHash);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Email yoki parol noto\'g\'ri');
    }

    const tokens = await this.generateTokens(user.id, user.email);
    await this.usersService.updateRefreshToken(user.id, tokens.refreshToken);

    const { passwordHash, refreshToken, ...safeUser } = user;

    return { user: safeUser, ...tokens };
  }

  // ==================== REFRESH ====================
  async refresh(userId: string, refreshToken: string) {
    const user = await this.usersService.findById(userId);
    const dbUser = await this.usersService.findByEmail(user.email);

    if (!dbUser?.refreshToken) {
      throw new UnauthorizedException('Refresh token topilmadi');
    }

    const isValid = await bcrypt.compare(refreshToken, dbUser.refreshToken);

    if (!isValid) {
      throw new UnauthorizedException('Refresh token noto\'g\'ri');
    }

    const tokens = await this.generateTokens(user.id, user.email);
    await this.usersService.updateRefreshToken(user.id, tokens.refreshToken);

    return tokens;
  }

  // ==================== LOGOUT ====================
  async logout(userId: string) {
    await this.usersService.updateRefreshToken(userId, null);
    return { message: 'Muvaffaqiyatli chiqildi' };
  }

  // ==================== GENERATE TOKENS ====================
  private async generateTokens(userId: string, email: string) {
    const payload = { sub: userId, email };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: process.env.JWT_ACCESS_SECRET,
        expiresIn: '15m',
      }),
      this.jwtService.signAsync(payload, {
        secret: process.env.JWT_REFRESH_SECRET,
        expiresIn: '7d',
      }),
    ]);

    const hashedRefreshToken = await bcrypt.hash(refreshToken, 10);
    await this.usersService.updateRefreshToken(userId, hashedRefreshToken);

    return { accessToken, refreshToken };
  }
}