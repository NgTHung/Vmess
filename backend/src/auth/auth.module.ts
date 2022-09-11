import { Module } from '@nestjs/common';
import { AuthService } from '@auth/auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from '@auth/strategy/local.strategy';
import { AuthController } from '@auth/auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '@auth/strategy/jwt.strategy';
import DataModule from '@data/data.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
@Module({
  imports: [
    JwtModule.registerAsync({
    imports: [ConfigModule],
    useFactory: (configService: ConfigService) => ({
      secret: configService.get("SECRET"),
      signOptions: {
        expiresIn: 3600
      }
    }),
    inject: [ConfigService]
  }),
   PassportModule, DataModule],
  providers: [AuthService, JwtStrategy,  LocalStrategy],
  controllers: [AuthController]
})
export class AuthModule { }
