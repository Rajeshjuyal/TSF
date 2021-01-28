import { Injectable, HttpStatus } from '@nestjs/common';
import { Bet } from './bet.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Http } from '@sentry/node/dist/integrations';

@Injectable()
export class BetService {
  Bets: Bet[] = [];
  constructor(@InjectModel('Bet') private readonly betModel: Model<any>) {}
  public async create(data: Bet) {
    var bets = await this.betModel.create(data);
    return {
      response_code: HttpStatus.OK,
      response_data: bets,
    };
  }

  public async findAll() {
    var bets = await this.betModel.find();
    return {
      response_code: HttpStatus.OK,
      response_data: bets,
    };
  }

  public async findOne(id: string) {
    var bets = await this.betModel.findById(id);
    return {
      response_code: HttpStatus.OK,
      response_data: bets,
    };
  }
  public async findUser(id: string) {
    var bets = await this.betModel.find({ user: id });
    return {
      response_code: HttpStatus.OK,
      response_data: bets,
    };
  }

  public async update(id: string, data: Bet) {
    var bets = await this.betModel.findByIdAndUpdate(id, data);
    return {
      response_code: HttpStatus.OK,
      response_data: bets,
    };
  }

  public async remove(id: string) {
    var bets = await this.betModel.findByIdAndDelete(id);
    return {
      response_code: HttpStatus.OK,
      response_data: 'Bets are deleted',
    };
  }
}
