import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Goal, GoalDocument } from './goal.entity';

@Injectable()
export class GoalsService {
  constructor(@InjectModel(Goal.name) private goalModel: Model<GoalDocument>) {}

  async create(createGoalDto: any): Promise<Goal> {
    const createdGoal = new this.goalModel(createGoalDto);
    return createdGoal.save();
  }

  async findAll(userId: string): Promise<Goal[]> {
    return this.goalModel.find({ userId }).exec();
  }
}
