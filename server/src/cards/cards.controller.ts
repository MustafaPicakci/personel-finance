import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Card } from './card.entity';
import { CardsService } from './cards.service';

@ApiTags('Cards')
@Controller('cards')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Card created.' })
  @ApiBody({
    description: 'Card data',
    type: Card,
  })
  create(@Body() createCardDto: Card): Promise<Card> {
    return this.cardsService.create(createCardDto);
  }

  @Get(':userId')
  @ApiResponse({ status: 200, description: 'Cards retrieved.' })
  findAll(@Param('userId') userId: string): Promise<Card[]> {
    return this.cardsService.findAll(userId);
  }
}
