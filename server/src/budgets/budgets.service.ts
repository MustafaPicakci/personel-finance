import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Budget, BudgetDocument } from './budget.entity';

@Injectable()
export class BudgetsService {
  constructor(
    @InjectModel(Budget.name) private budgetModel: Model<BudgetDocument>,
  ) {}

  async create(createBudgetDto: any): Promise<Budget> {
    const createdBudget = new this.budgetModel(createBudgetDto);
    return createdBudget.save();
  }

  async findAll(userId: string): Promise<Budget[]> {
    return this.budgetModel.find({ userId }).exec();
  }
}
