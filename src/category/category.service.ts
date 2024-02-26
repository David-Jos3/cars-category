import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from 'src/dtos/category.dto';
import { CategoryRespository } from 'src/repositories/category.repository';

@Injectable()
export class CategoryService {
  constructor(private categoryRepository: CategoryRespository) {}

  async createCategory(data: CreateCategoryDto): Promise<void> {
    await this.categoryRepository.create(data);
  }

  async findAllByPages(
    page: number,
    pageSize: number,
  ): Promise<CreateCategoryDto[]> {
    return await this.categoryRepository.findAllPage(page, pageSize);
  }

  async findByName(name: string): Promise<CreateCategoryDto> {
    return await this.categoryRepository.findByName(name);
  }

  async findById(id: number): Promise<CreateCategoryDto> {
    return await this.categoryRepository.findById(id);
  }

  async updateCategory(id: number, data: CreateCategoryDto): Promise<void> {
    await this.categoryRepository.update(id, data);
  }

  async delete(id: number): Promise<void> {
    await this.categoryRepository.delete(id);
  }
}
