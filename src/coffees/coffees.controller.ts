import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto, PaginationQueryDto, UpdateCoffeeDto } from './dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Get()
  getAll(@Query() query: PaginationQueryDto) {
    return this.coffeesService.findAll(query);
  }

  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.coffeesService.findOne(id);
  }

  @Post()
  create(@Body() body: CreateCoffeeDto) {
    return this.coffeesService.create(body);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateCoffeeDto) {
    return this.coffeesService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.coffeesService.remove(id);
  }
}
