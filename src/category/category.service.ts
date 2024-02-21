import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/databases/PrismaService';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async createCategory(data: Prisma.CategoryCreateInput) {
    return await this.prisma.category.create({
      data,
    });
  }

  async findAll() {
    return await this.prisma.category.findMany();
  }
}
