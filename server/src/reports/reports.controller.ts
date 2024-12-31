import { Controller, Get, Param } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ReportsService } from './reports.service';

@ApiTags('Reports')
@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get('income-expense/:userId')
  @ApiResponse({
    status: 200,
    description: 'Income and expense report retrieved.',
  })
  getIncomeExpenseReport(@Param('userId') userId: string) {
    return this.reportsService.getIncomeExpenseReport(userId);
  }
}
