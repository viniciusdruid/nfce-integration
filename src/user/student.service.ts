import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class StudentService {
  private readonly logger = new Logger(StudentService.name);
  constructor(private prisma: PrismaService) {}

  async getStudentById(studentId: number) {
    try {
      const result = await this.prisma.students.findUnique({
        where: { id: studentId },
      });

      this.logger.log(
        `Fetching student with ID: ${studentId} - ${JSON.stringify(result)}`,
      );

      return result;
    } catch (error) {
      this.logger.error(
        `Error fetching student with ID: ${studentId} - ${error.message}`,
        error.stack,
      );
    }
  }

  async updateStudentBalance(studentId: number, newBalance: number) {
    try {
      this.logger.log(
        `Updating student balance with ID: ${studentId} to: ${newBalance}`,
      );
      await this.prisma.students.update({
        where: { id: studentId },
        data: { current_balance: newBalance },
      });
    } catch (error) {
      this.logger.error(
        `Error updating student balance: ${error.message}`,
        error.stack,
      );
    }
  }
}
