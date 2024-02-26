import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Put,
  Delete,
  Query,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from 'src/dtos/category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}
  @Post()
  async createCategory(@Body() data: CreateCategoryDto): Promise<void> {
    await this.categoryService.createCategory(data);
  }

  @Get()
  async findAllCategory(
    @Query('name') name: string,
    @Query('page') page: number = 1,
    @Query('pageSize') pageSize: number = 5,
  ): Promise<CreateCategoryDto[] | CreateCategoryDto> {
    if (name) return await this.categoryService.findByName(name);
    else if (page)
      return await this.categoryService.findAllByPages(page, pageSize);
  }

  @Get(':id')
  async findCategoryById(@Param('id') id: number): Promise<CreateCategoryDto> {
    return await this.categoryService.findById(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() data: CreateCategoryDto,
  ): Promise<void> {
    await this.categoryService.updateCategory(id, data);
  }

  @Delete(':id')
  async deleteCategory(@Param('id') id: number): Promise<void> {
    await this.categoryService.delete(id);
  }
}
