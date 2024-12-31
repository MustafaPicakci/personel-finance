import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
import { BudgetsModule } from './budgets/budgets.module';
import { CategoriesModule } from './categories/categories.module';
import { GoalsModule } from './goals/goals.module';
import { ReportsModule } from './reports/reports.module';
import { UsersModule } from './users/users.module';

dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI),
    UsersModule,
    BudgetsModule,
    CategoriesModule,
    GoalsModule,
    ReportsModule,
  ],
})
export class AppModule {}
