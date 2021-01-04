import { Module } from '@nestjs/common';
import { LibraryService } from './library.service';
import { LibraryController } from './library.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LibrarySchema } from './library.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Library', schema: LibrarySchema }]),
  ],

  controllers: [LibraryController],
  providers: [LibraryService],
})
export class LibraryModule {}
