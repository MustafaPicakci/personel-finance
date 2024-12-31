import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Goal } from './goal.entity';
import { GoalsService } from './goals.service';

@ApiTags('Goals')
@Controller('goals')
export class GoalsController {
  constructor(private readonly goalsService: GoalsService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Goal created.' })
  @ApiBody({
    description: 'Goal data',
    type: Goal,
  })
  create(@Body() createGoalDto: Goal): Promise<Goal> {
    return this.goalsService.create(createGoalDto);
  }

  @Get(':userId')
  @ApiResponse({ status: 200, description: 'Goals retrieved.' })
  findAll(@Param('userId') userId: string): Promise<Goal[]> {
    return this.goalsService.findAll(userId);
  }
}
