import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ProfileService } from './profile.service';
import { Profile } from 'aws-sdk/clients/mediapackage';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post()
  create(@Body() data: Profile) {
    return this.profileService.create(data);
  }

  @Get()
  findAll() {
    return this.profileService.findAll();
  }
  @Get('byUser/:id')
  findUser(@Param('id') id: string) {
    return this.profileService.findUser(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profileService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Profile) {
    return this.profileService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.profileService.remove(id);
  }
}
