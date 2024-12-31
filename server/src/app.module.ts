import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
import { AuthModule } from './auth/auth.module';
import { BudgetsModule } from './budgets/budgets.module';
import { CategoriesModule } from './categories/categories.module';
import { GoalsModule } from './goals/goals.module';
import { ReportsModule } from './reports/reports.module';
import { UserProfileModule } from './users/user-profile.module';
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
    AuthModule,
    UserProfileModule,
  ],
})
export class AppModule {}
