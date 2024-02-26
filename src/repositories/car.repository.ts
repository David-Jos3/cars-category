import { CreateCarsDto } from 'src/dtos/car.dto';

export abstract class CarRespository {
  abstract create(data: CreateCarsDto): Promise<void>;
  abstract findByPages(page: number, pageSize: number): Promise<void>;
  abstract findByBrand(brand: string);
  abstract findById(id: number);
  abstract update(id: number, data: CreateCarsDto): Promise<void>;
  abstract delete(id: number): Promise<void>;
}
