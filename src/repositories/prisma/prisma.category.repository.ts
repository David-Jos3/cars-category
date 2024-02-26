import { PrismaService } from 'src/databases/PrismaService';
import { CategoryRespository } from '../category.repository';
import { CreateCategoryDto } from 'src/dtos/category.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaCategoryRepository implements CategoryRespository {
  constructor(private prisma: PrismaService) {}

  async create(data: Omit<CreateCategoryDto, 'cars'>): Promise<void> {
    await this.prisma.category.create({
      data,
    });
  }
  async findAllPage(
    page: number,
    pageSize: number,
  ): Promise<CreateCategoryDto[]> {
    const skip = (page - 1) * pageSize;
    return await this.prisma.category.findMany({
      skip,
      take: pageSize,
      include: {
        cars: true,
      },
    });
  }

  async findById(id: number): Promise<CreateCategoryDto> {
    return await this.prisma.category.findUnique({
      where: { id: Number(id) },
      include: {
        cars: true,
      },
    });
  }

  async findByName(name: string): Promise<CreateCategoryDto> {
    return await this.prisma.category.findFirst({
      where: { name: name },
      include: {
        cars: true,
      },
    });
  }

  async update(id: number, data: CreateCategoryDto): Promise<void> {
    await this.prisma.category.update({
      where: { id: Number(id) },
      data: { name: data.name, description: data.description },
    });
  }

  async delete(id: number): Promise<void> {
    await this.prisma.category.delete({
      where: { id: Number(id) },
    });
  }
}
