import { Module } from '@nestjs/common';
import { BetService } from './bet.service';
import { BetController } from './bet.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersSchema } from '../users/users.model';
import { BetSchema } from './bet.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Bet', schema: BetSchema },
      { name: 'User', schema: UsersSchema },
    ]),
  ],
  controllers: [BetController],
  providers: [BetService],
})
export class BetModule {}
