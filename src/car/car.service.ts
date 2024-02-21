import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/databases/PrismaService';

@Injectable()
export class CarService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.CarCreateInput): Promise<object> {
    return await this.prisma.car.create({
      data,
    });
  }

  async findAll(): Promise<object> {
    return await this.prisma.car.findMany();
  }
}
