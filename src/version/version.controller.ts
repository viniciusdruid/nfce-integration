import { Controller, Get, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller('version')
export class VersionController {
  private readonly logger = new Logger(VersionController.name);
  constructor(private configService: ConfigService) {}
  @Get()
  getVersion(): { version: string } {
    const result = {
      version: this.configService.get<string>('APP_VERSION'),
    };

    this.logger.log('Fetching app version - ' + JSON.stringify(result));

    return result;
  }
}
