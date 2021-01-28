import { Injectable, HttpStatus } from '@nestjs/common';
import { Transfer } from 'aws-sdk';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Http } from '@sentry/node/dist/integrations';

@Injectable()
export class TransferService {
  Transfers: Transfer[] = [];
  constructor(
    @InjectModel('Transfer') private readonly transferModel: Model<any>,
  ) {}
  public async create(data: Transfer) {
    var transfer = await this.transferModel.create(data);
    return {
      response_code: HttpStatus.OK,
      response_data: transfer,
    };
  }

  public async findAll() {
    var transfer = await this.transferModel.find();
    return {
      response_code: HttpStatus.OK,
      response_data: transfer,
    };
  }
  public async findUser(id: string) {
    var transfer = await this.transferModel.find({ user: id });
    return {
      response_code: HttpStatus.OK,
      response_data: transfer,
    };
  }

  public async findOne(id: string) {
    var transfer = await this.transferModel.findById(id);
    return {
      response_code: HttpStatus.OK,
      response_data: transfer,
    };
  }

  public async update(id: string, data: Transfer) {
    var transfer = await this.transferModel.findByIdAndUpdate(id, data);
    return {
      response_code: HttpStatus.OK,
      response_data: transfer,
    };
  }

  public async remove(id: string) {
    var transfer = await this.transferModel.findByIdAndDelete(id);
    return {
      response_code: HttpStatus.OK,
      response_data: 'deleted transfer',
    };
  }
}
