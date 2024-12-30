import { Module } from '@nestjs/common';
import { NfceController } from './nfce.controller';
import { NfceService } from './nfce.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PrismaModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        timeout: configService.get<number>('HTTP_TIMEOUT') || 5000,
        maxRedirects: configService.get<number>('HTTP_MAX_REDIRECTS') || 5,
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [NfceController],
  providers: [NfceService, ConfigService],
  exports: [NfceService],
})
export class NfceModule {}
