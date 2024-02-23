import { Injectable } from '@nestjs/common';
import { CreateCarsDto } from 'src/dtos/car.dto';
import { PrismaService } from 'src/databases/PrismaService';

@Injectable()
export class CarService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateCarsDto): Promise<object> {
    const carsExists = await this.prisma.car.findFirst({
      where: { name: data.name, year: data.year, model: data.model },
    });
    if (carsExists) {
      throw new Error('Car already exists');
    }
    return await this.prisma.car.create({
      data,
    });
  }

  async findAll(): Promise<object> {
    return await this.prisma.car.findMany();
  }

  async findById(id: number): Promise<object> {
    return await this.prisma.car.findUnique({
      where: { id: Number(id) },
    });
  }

  async update(id: number, data: CreateCarsDto): Promise<object> {
    return await this.prisma.car.update({
      where: { id: Number(id) },
      data,
    });
  }

  async delete(id: number): Promise<object> {
    return await this.prisma.car.delete({
      where: { id: Number(id) },
    });
  }
}
