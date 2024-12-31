import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserProfile, UserProfileDocument } from './user-profile.entity';

@Injectable()
export class UserProfileService {
  constructor(
    @InjectModel(UserProfile.name)
    private userProfileModel: Model<UserProfileDocument>,
  ) {}

  async create(
    userId: string,
    firstName: string,
    lastName: string,
    email: string,
  ): Promise<UserProfile> {
    const newUserProfile = new this.userProfileModel({
      userId,
      firstName,
      lastName,
      email,
    });
    return newUserProfile.save();
  }

  async findByUserId(userId: string): Promise<UserProfile | null> {
    return this.userProfileModel.findOne({ userId }).exec();
  }

  async update(
    userId: string,
    updateData: Partial<UserProfile>,
  ): Promise<UserProfile | null> {
    return this.userProfileModel
      .findOneAndUpdate({ userId }, updateData, { new: true })
      .exec();
  }
}
