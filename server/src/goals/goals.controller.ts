import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Goal } from './goal.entity';
import { GoalsService } from './goals.service';

@Controller('goals')
export class GoalsController {
  constructor(private readonly goalsService: GoalsService) {}

  @Post()
  create(@Body() createGoalDto: any): Promise<Goal> {
    return this.goalsService.create(createGoalDto);
  }

  @Get(':userId')
  findAll(@Param('userId') userId: string): Promise<Goal[]> {
    return this.goalsService.findAll(userId);
  }
}
