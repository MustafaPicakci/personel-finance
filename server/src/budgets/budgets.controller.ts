import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Budget } from './budget.entity';
import { BudgetsService } from './budgets.service';

@Controller('budgets')
export class BudgetsController {
  constructor(private readonly budgetsService: BudgetsService) {}

  @Post()
  create(@Body() createBudgetDto: any): Promise<Budget> {
    return this.budgetsService.create(createBudgetDto);
  }

  @Get(':userId')
  findAll(@Param('userId') userId: string): Promise<Budget[]> {
    return this.budgetsService.findAll(userId);
  }
}
