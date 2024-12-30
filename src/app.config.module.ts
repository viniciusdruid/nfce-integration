import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from '@hapi/joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      validationSchema: Joi.object({
        URL_NFCE: Joi.string().required(),
        TOKEN_NFCE: Joi.string().required(),
      }),
    }),
  ],
})
export class AppConfigModule {}
