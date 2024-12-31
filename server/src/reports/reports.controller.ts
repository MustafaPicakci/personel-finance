import { Controller, Get, Param } from '@nestjs/common';
import { ReportsService } from './reports.service';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get('income-expense/:userId')
  getIncomeExpenseReport(@Param('userId') userId: string) {
    return this.reportsService.getIncomeExpenseReport(userId);
  }
}
