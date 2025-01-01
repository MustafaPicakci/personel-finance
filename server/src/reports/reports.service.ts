import { Injectable } from '@nestjs/common';
import { BudgetsService } from '../budgets/budgets.service';
import { GoalsService } from '../goals/goals.service';

@Injectable()
export class ReportsService {
  constructor(
    private readonly budgetsService: BudgetsService,
    private readonly goalsService: GoalsService,
  ) {}

  async getIncomeExpenseReport(userId: string) {
    const budgets = await this.budgetsService.findAll(userId);
    const totalIncome = budgets.reduce((acc, budget) => acc + budget.income, 0);
    const totalExpenses = budgets.reduce(
      (acc, budget) => acc + budget.expenses.reduce((a, b) => a + b.amount, 0),
      0,
    );

    return {
      totalIncome,
      totalExpenses,
      balance: totalIncome - totalExpenses,
    };
  }
}
