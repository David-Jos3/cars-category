import { CreateCategoryDto } from 'src/dtos/category.dto';

export abstract class CategoryRespository {
  abstract create(data: CreateCategoryDto): Promise<void>;
  abstract findAllPage(
    page: number,
    pageSize: number,
  ): Promise<CreateCategoryDto[]>;
  abstract findById(id: number): Promise<CreateCategoryDto>;
  abstract findByName(name: string): Promise<CreateCategoryDto>;
  abstract update(id: number, data: CreateCategoryDto): Promise<void>;
  abstract delete(id: number): Promise<void>;
}
