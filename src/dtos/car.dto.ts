import {
  IsString,
  IsInt,
  IsNotEmpty,
  IsOptional,
  Length,
} from 'class-validator';

export class CreateCarsDto {
  @IsInt()
  @IsOptional()
  id: number;

  @IsString()
  @IsNotEmpty()
  @Length(2, 50)
  name: string;

  @IsInt()
  @IsNotEmpty()
  year: number;

  @IsString()
  @IsNotEmpty()
  @Length(2, 50)
  model: string;

  @IsInt()
  @IsOptional()
  categoryId?: number;
}
