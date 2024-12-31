import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserProfile } from './user-profile.entity';
import { UserProfileService } from './user-profile.service';

@ApiTags('User Profile')
@Controller('user-profile')
export class UserProfileController {
  constructor(private readonly userProfileService: UserProfileService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'User profile created.' })
  @ApiBody({
    description: 'User profile data',
    type: UserProfile,
  })
  create(
    @Body()
    body: {
      userId: string;
      firstName: string;
      lastName: string;
      email: string;
    },
  ): Promise<UserProfile> {
    return this.userProfileService.create(
      body.userId,
      body.firstName,
      body.lastName,
      body.email,
    );
  }

  @Get(':userId')
  @ApiResponse({ status: 200, description: 'User profile retrieved.' })
  findByUserId(@Param('userId') userId: string): Promise<UserProfile | null> {
    return this.userProfileService.findByUserId(userId);
  }

  @Put(':userId')
  @ApiResponse({ status: 200, description: 'User profile updated.' })
  @ApiBody({
    description: 'User profile update data',
    type: UserProfile,
  })
  update(
    @Param('userId') userId: string,
    @Body() updateData: Partial<UserProfile>,
  ): Promise<UserProfile | null> {
    return this.userProfileService.update(userId, updateData);
  }
}
