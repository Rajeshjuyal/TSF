import { Injectable, HttpStatus } from '@nestjs/common';
import { Profile } from 'aws-sdk/clients/mediapackage';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProfileService {
  Profiles: Profile[] = [];
  constructor(
    @InjectModel('Profile') private readonly profileModel: Model<any>,
  ) {}
  public async create(data: Profile) {
    var profile = await this.profileModel.create(data);
    return {
      response_code: HttpStatus.OK,
      response_data: profile,
    };
  }

  public async findAll() {
    var profile = await this.profileModel.find();
    return {
      response_code: HttpStatus.OK,
      response_data: profile,
    };
  }
  public async findUser(id: string) {
    var profile = await this.profileModel.find({ user: id });
    return {
      response_code: HttpStatus.OK,
      response_data: profile,
    };
  }

  public async findOne(id: string) {
    var profiles = await this.profileModel.findById(id);
    return {
      response_code: HttpStatus.OK,
      response_data: profiles,
    };
  }

  public async update(id: string, data: Profile) {
    var profiles = await this.profileModel.findByIdAndUpdate(id, data);
    return {
      response_code: HttpStatus.OK,
      response_data: profiles,
    };
  }

  public async remove(id: string) {
    var profiles = await this.profileModel.findByIdAndDelete(id);
    return {
      response_code: HttpStatus.OK,
      response_data: profiles,
    };
  }
}
