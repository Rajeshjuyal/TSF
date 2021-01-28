import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { TransferService } from './transfer.service';
import { Transfer } from 'aws-sdk';

@Controller('transfer')
export class TransferController {
  constructor(private readonly transferService: TransferService) {}

  @Post()
  create(@Body() data: Transfer) {
    return this.transferService.create(data);
  }

  @Get()
  findAll() {
    return this.transferService.findAll();
  }
  @Get('byUser/:id')
  findUser(@Param('id') id: string) {
    return this.transferService.findUser(id);
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transferService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Transfer) {
    return this.transferService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transferService.remove(id);
  }
}
