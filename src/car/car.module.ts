import { Module } from '@nestjs/common';
import { CarService } from './car.service';
import { CarController } from './car.controller';
import { PrismaService } from 'src/databases/PrismaService';

@Module({
  controllers: [CarController],
  providers: [CarService, PrismaService],
})
export class CarModule {}
