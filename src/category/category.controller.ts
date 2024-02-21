import { Body, Controller, Post, Get } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Prisma } from '@prisma/client';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}
  @Post()
  createCategory(@Body() body: Prisma.CategoryCreateInput) {
    return this.categoryService.createCategory(body);
  }

  @Get()
  findAllCategory(): object {
    return this.categoryService.findAll();
  }
}
