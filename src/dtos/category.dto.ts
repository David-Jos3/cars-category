import {
  IsString,
  IsInt,
  Length,
  ValidateNested,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateCarsDto } from './car.dto';

export class CreateCategoryDto {
  @IsInt()
  @IsOptional()
  id: number;

  @IsString()
  @IsNotEmpty()
  @Length(2, 50)
  name: string;

  @IsString()
  @Length(5, 200)
  @IsOptional()
  description?: string;

  @ValidateNested({ each: true })
  @Type(() => CreateCarsDto)
  @IsOptional()
  cars: CreateCarsDto[];
}
