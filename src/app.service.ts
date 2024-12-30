import { Injectable } from '@nestjs/common';
import { HealthCheckResponse } from './interfaces/health-check-response.interface';

@Injectable()
export class AppService {
  healthCheck(): HealthCheckResponse {
    return {
      status: 'UP',
      message: 'Service is running',
    };
  }
}
