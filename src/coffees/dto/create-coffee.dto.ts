import { ArrayNotEmpty, IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreateCoffeeDto {
  @IsString()
  @IsNotEmpty()
  readonly name!: string;

  @IsString()
  @IsNotEmpty()
  readonly brand!: string;

  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  readonly flavors!: string[];
}
