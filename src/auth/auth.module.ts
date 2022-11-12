import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
      ConfigModule,
      UsersModule,
      JwtModule.registerAsync({
          imports: [ConfigModule],
          inject: [ConfigService],
          useFactory: (configService: ConfigService) => ({
              secret: configService.get('SECRET_KEY'),
              signOptions: {expiresIn: configService.get('JWT_EXPIRES')}
          })
      })
  ],
  providers: [
      AuthService,
      LocalStrategy,
      JwtStrategy
  ],
  controllers: [AuthController]
})
export class AuthModule {}
