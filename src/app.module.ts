import { Global, HttpModule, Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { UploadModule } from './upload/upload.module';
import { AppController } from './app.controller';
import { ScheduleModule } from 'nest-schedule';
import { AppGateway } from './app.gateway';
import { SeedModule } from './seed/seed.module';
import { SequenceModule } from './sequence/sequence.module';
import { MongooseModule } from '@nestjs/mongoose';
import { BetModule } from './bet/bet.module';
import { TransferModule } from './transfer/transfer.module';
import { ProfileModule } from './profile/profile.module';

@Global()
@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri:
          process.env.NODE_ENV == 'production'
            ? process.env.MONGO_DB_PRODUCTION_URL
            : process.env.MONGO_DB_TESTING_URL,
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      }),
    }),
    UsersModule,
    UploadModule,
    ScheduleModule.register(),
    SeedModule,
    SequenceModule,
    BetModule,
    TransferModule,
    ProfileModule,
  ],
  controllers: [AppController],
  providers: [AppGateway],
  exports: [AppGateway],
})
export class AppModule {}
