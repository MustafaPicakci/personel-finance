import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Budget } from './budget.entity';
import { BudgetsService } from './budgets.service';

@ApiTags('Budgets')
@Controller('budgets')
export class BudgetsController {
  constructor(private readonly budgetsService: BudgetsService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Budget created.' })
  @ApiBody({
    description: 'Budget data',
    type: Budget,
  })
  create(@Body() createBudgetDto: Budget): Promise<Budget> {
    return this.budgetsService.create(createBudgetDto);
  }

  @Get(':userId')
  @ApiResponse({ status: 200, description: 'Budgets retrieved.' })
  findAll(@Param('userId') userId: string): Promise<Budget[]> {
    return this.budgetsService.findAll(userId);
  }
}
