import { IsNumber, IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationQueryDto {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  limit?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  offset?: number;
}
