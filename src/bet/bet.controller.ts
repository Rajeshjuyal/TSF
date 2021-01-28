import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { BetService } from './bet.service';
import { Bet } from './bet.model';

@Controller('bet')
export class BetController {
  constructor(private readonly betService: BetService) {}

  @Post()
  create(@Body() data: Bet) {
    return this.betService.create(data);
  }

  @Get()
  findAll() {
    return this.betService.findAll();
  }
  @Get('byUser/:id')
  finduser(@Param('id') id: string) {
    return this.betService.findUser(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.betService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Bet) {
    return this.betService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.betService.remove(id);
  }
}
