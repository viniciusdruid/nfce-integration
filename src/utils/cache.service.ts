import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class CacheService {
  private readonly logger = new Logger(CacheService.name);
  private cache = new Map<string, any>();

  set(key: string, value: any, ttl: number): void {
    this.cache.set(key, { value, expiry: ttl });
  }

  get(key: string): any {
    const item = this.cache.get(key);
    if (!item) {
      this.logger.log('Cache Token not found');
      return null;
    }

    return item.value;
  }

  delete(key: string): void {
    this.cache.delete(key);
  }
}
