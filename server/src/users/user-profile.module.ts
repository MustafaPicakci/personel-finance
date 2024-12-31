import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserProfileController } from './user-profile.controller';
import { UserProfile, UserProfileSchema } from './user-profile.entity';
import { UserProfileService } from './user-profile.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UserProfile.name, schema: UserProfileSchema },
    ]),
  ],
  providers: [UserProfileService],
  controllers: [UserProfileController],
})
export class UserProfileModule {}
