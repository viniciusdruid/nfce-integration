import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { VersionController } from './version.controller';

@Module({
  imports: [ConfigModule],
  providers: [],
  controllers: [VersionController],
  exports: [],
})
export class VersionModule {}
