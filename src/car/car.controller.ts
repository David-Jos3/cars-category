import { Body, Controller, Get, Post } from '@nestjs/common';
import { CarService } from './car.service';
import { Prisma } from '@prisma/client';

@Controller('cars')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Post()
  create(@Body() body: Prisma.CarCreateInput) {
    return this.carService.create(body);
  }

  @Get()
  findAll(): object {
    return this.carService.findAll();
  }
}
