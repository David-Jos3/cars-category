import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CarService } from './car.service';
import { CreateCarsDto } from 'src/dtos/car.dto';

@Controller('cars')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Post()
  async create(@Body() data: CreateCarsDto) {
    return await this.carService.create(data);
  }

  @Get()
  async findAll(): Promise<object> {
    return await this.carService.findAll();
  }

  @Get(':id')
  async findByIdCar(@Param('id') id: number): Promise<object> {
    return await this.carService.findById(id);
  }

  @Put(':id')
  async updateDataCars(
    @Param('id') id: number,
    @Body() data: CreateCarsDto,
  ): Promise<object> {
    return await this.carService.update(id, data);
  }

  @Delete(':id')
  async deleteDataCars(@Param('id') id: number): Promise<object> {
    return await this.carService.delete(id);
  }
}
