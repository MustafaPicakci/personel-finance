import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Card, CardDocument } from './card.entity';

@Injectable()
export class CardsService {
  constructor(@InjectModel(Card.name) private cardModel: Model<CardDocument>) {}

  async create(createCardDto: any): Promise<Card> {
    const createdCard = new this.cardModel(createCardDto);
    return createdCard.save();
  }

  async findAll(userId: string): Promise<Card[]> {
    return this.cardModel.find({ userId }).exec();
  }
}
