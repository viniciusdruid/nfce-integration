import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NfceModule } from './nfce/nfce.module';
import { WinstonModule } from 'nest-winston';
import { PrismaModule } from 'nestjs-prisma';
import { winstonConfig } from './configs/winston.config';
import { VersionModule } from './version/version.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggerInterceptor } from './interceptors/logger.interceptor';
import { AppConfigModule } from './app.config.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    AppConfigModule,
    WinstonModule.forRoot(winstonConfig),
    NfceModule,
    AuthModule,
    PrismaModule.forRoot(),
    VersionModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggerInterceptor,
    },
  ],
})
export class AppModule {}
