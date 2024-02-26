import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CarService } from './car.service';
import { CreateCarsDto } from 'src/dtos/car.dto';

@Controller('cars')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Post()
  async create(@Body() data: CreateCarsDto): Promise<void> {
    await this.carService.create(data);
  }

  @Get()
  async findAll(
    @Query('name') name: string,
    @Query('page') page: number = 1,
    @Query('pageSize') pageSize: number = 10,
  ): Promise<object | void> {
    if (name) return await this.carService.filterAllByBrand(name);
    else if (page)
      return await this.carService.filterAllByPages(page, pageSize);
  }

  @Get(':id')
  async findByIdCar(@Param('id') id: number): Promise<object> {
    return await this.carService.findById(id);
  }

  @Put(':id')
  async updateDataCars(
    @Param('id') id: number,
    @Body() data: CreateCarsDto,
  ): Promise<void> {
    await this.carService.update(id, data);
  }

  @Delete(':id')
  async deleteDataCars(@Param('id') id: number): Promise<void> {
    await this.carService.delete(id);
  }
}
