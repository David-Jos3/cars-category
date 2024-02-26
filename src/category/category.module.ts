import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { PrismaService } from 'src/databases/PrismaService';
import { CategoryRespository } from 'src/repositories/category.repository';
import { PrismaCategoryRepository } from 'src/repositories/prisma/prisma.category.repository';

@Module({
  controllers: [CategoryController],
  providers: [
    CategoryService,
    PrismaService,
    { provide: CategoryRespository, useClass: PrismaCategoryRepository },
  ],
})
export class CategoryModule {}
