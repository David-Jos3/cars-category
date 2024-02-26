import { Injectable } from '@nestjs/common';
import { CreateCarsDto } from 'src/dtos/car.dto';
import { CarRespository } from 'src/repositories/car.repository';

@Injectable()
export class CarService {
  constructor(private carRepository: CarRespository) {}

  async create(data: CreateCarsDto): Promise<void> {
    await this.carRepository.create(data);
  }

  async filterAllByPages(page: number, pageSize: number): Promise<void> {
    return this.carRepository.findByPages(page, pageSize);
  }

  async filterAllByBrand(name: string): Promise<object> {
    return this.carRepository.findByBrand(name);
  }

  async findById(id: number): Promise<object> {
    return this.carRepository.findById(id);
  }

  async update(id: number, data: CreateCarsDto): Promise<void> {
    await this.carRepository.update(id, data);
  }

  async delete(id: number): Promise<void> {
    await this.carRepository.delete(id);
  }
}
