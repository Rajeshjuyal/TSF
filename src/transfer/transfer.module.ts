import { Module } from '@nestjs/common';
import { TransferService } from './transfer.service';
import { TransferController } from './transfer.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TransferSchema } from './transfer.model';
import { UsersSchema } from 'src/users/users.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Transfer', schema: TransferSchema },
      { name: 'User', schema: UsersSchema },
    ]),
  ],
  controllers: [TransferController],
  providers: [TransferService],
})
export class TransferModule {}
