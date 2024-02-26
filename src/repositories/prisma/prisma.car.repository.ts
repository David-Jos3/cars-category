import { CreateCarsDto } from 'src/dtos/car.dto';
import { CarRespository } from '../car.repository';
import { PrismaService } from 'src/databases/PrismaService';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaCarRepository implements CarRespository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateCarsDto): Promise<void> {
    const carsExists = await this.prisma.car.findMany({
      where: { name: data.name, year: data.year, model: data.model },
    });
    if (carsExists) {
      throw new Error('Car already exists');
    }
    await this.prisma.car.create({
      data,
    });
  }
  async findByPages(page: number, pageSize: number): Promise<any> {
    const skip = (page - 1) * pageSize;
    return await this.prisma.car.findMany({
      skip,
      take: pageSize,
    });
  }
  async findByBrand(name: string): Promise<object> {
    return await this.prisma.car.findFirst({
      where: { name: name },
    });
  }

  async findById(id: number): Promise<object> {
    return await this.prisma.car.findUnique({
      where: { id: Number(id) },
    });
  }

  async update(id: number, data: CreateCarsDto): Promise<void> {
    await this.prisma.car.update({
      where: { id: Number(id) },
      data,
    });
  }

  async delete(id: number): Promise<void> {
    await this.prisma.car.delete({
      where: { id: Number(id) },
    });
  }
}
