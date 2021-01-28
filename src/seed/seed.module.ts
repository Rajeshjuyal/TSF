import { MongooseModule } from '@nestjs/mongoose';
import { SeedService } from './seed.service';
import { Module, HttpService, HttpModule } from '@nestjs/common';
import { UsersSchema } from '../users/users.model';

import { SequenceSchema } from '../sequence/sequence.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Users', schema: UsersSchema },

      { name: 'Sequence', schema: SequenceSchema },
    ]),
    HttpModule,
  ],
  controllers: [],
  providers: [SeedService],
})
export class SeedModule {}
