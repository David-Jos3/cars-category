import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from 'src/dtos/category.dto';
import { PrismaService } from 'src/databases/PrismaService';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async createCategory(data: CreateCategoryDto): Promise<object> {
    const carsExists = this.prisma.category.findFirst({
      where: { name: data.name },
    });

    if (carsExists) {
      throw new Error('Category already exists');
    }

    return await this.prisma.category.create({
      data,
    });
  }

  async findAll(page: number, pageSize: number): Promise<object> {
    const skip = (page - 1) * pageSize;
    return await this.prisma.category.findMany({
      skip,
      take: pageSize,
      include: {
        cars: true,
      },
    });
  }

  async findByName(name: string): Promise<object> {
    return await this.prisma.category.findFirst({
      where: { name: name },
      include: {
        cars: true,
      },
    });
  }

  async findById(id: number): Promise<object> {
    return await this.prisma.category.findUnique({
      where: { id: Number(id) },
      include: {
        cars: true,
      },
    });
  }

  async updateCategory(id: number, data: CreateCategoryDto): Promise<object> {
    return await this.prisma.category.update({
      where: { id: Number(id) },
      data: { name: data.name, description: data.description },
    });
  }

  async delete(id: number): Promise<object> {
    return await this.prisma.category.delete({
      where: { id: Number(id) },
    });
  }
}
