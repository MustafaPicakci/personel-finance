import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type UserProfileDocument = UserProfile & Document;

@Schema()
export class UserProfile {
  @ApiProperty({ description: 'The user ID associated with the profile' })
  @Prop({ required: true })
  userId: string;

  @ApiProperty({ description: 'The first name of the user' })
  @Prop()
  firstName: string;

  @ApiProperty({ description: 'The last name of the user' })
  @Prop()
  lastName: string;

  @ApiProperty({ description: 'The email address of the user' })
  @Prop()
  email: string;
}

export const UserProfileSchema = SchemaFactory.createForClass(UserProfile);
