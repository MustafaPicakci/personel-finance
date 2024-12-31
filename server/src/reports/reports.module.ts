import { Module } from '@nestjs/common';
import { BudgetsModule } from '../budgets/budgets.module';
import { GoalsModule } from '../goals/goals.module';
import { ReportsController } from './reports.controller';
import { ReportsService } from './reports.service';

@Module({
  imports: [BudgetsModule, GoalsModule],
  controllers: [ReportsController],
  providers: [ReportsService],
})
export class ReportsModule {}
