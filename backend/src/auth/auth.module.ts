import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from '../users/users.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { StringValue } from 'ms';
import { JwtAccessStrategy } from '@/common/strategies/jwt-access.strategy';
import { JwtRefreshStrategy } from '@/common/strategies/jwt-refresh.strategy';


@Module({
  imports: [
    UsersModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
      secret: config.get<string>('JWT_SECRET'),
      signOptions: {
        expiresIn: config.get<string>('JWT_EXPIRES_IN', '15m') as StringValue,
      },
}),
    }),
  ],
  providers: [AuthService, JwtAccessStrategy, JwtRefreshStrategy,],
  controllers: [AuthController],
})
export class AuthModule {}