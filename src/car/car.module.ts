import { CarRespository } from 'src/repositories/car.repository';
import { Module } from '@nestjs/common';
import { CarService } from './car.service';
import { CarController } from './car.controller';
import { PrismaService } from 'src/databases/PrismaService';
import { PrismaCarRepository } from 'src/repositories/prisma/prisma.car.repository';

@Module({
  controllers: [CarController],
  providers: [
    CarService,
    PrismaService,
    { provide: CarRespository, useClass: PrismaCarRepository },
  ],
})
export class CarModule {}
