import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { TransactionDto } from './dto/transaction.dto';

@Injectable()
export class TransactionService {
  private readonly logger = new Logger(TransactionService.name);
  constructor(private prisma: PrismaService) {}

  async createTransaction(transactionDto: TransactionDto) {
    try {
      const result = await this.prisma.transactions.create({
        data: transactionDto,
      });

      this.logger.log(
        `Creating transaction for user: ${JSON.stringify(result)}`,
      );
    } catch (error) {
      this.logger.error(
        `Error creating transaction: ${error.message}`,
        error.stack,
      );
    }
  }
}
