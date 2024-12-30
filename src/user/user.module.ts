import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { PrismaService } from 'nestjs-prisma';
import { PassportModule } from '@nestjs/passport';
import { TransactionService } from './transaction.service';

@Module({
  imports: [
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
  providers: [ConfigService, PrismaService, TransactionService],
  controllers: [],
  exports: [TransactionService],
})
export class UserModule {}
