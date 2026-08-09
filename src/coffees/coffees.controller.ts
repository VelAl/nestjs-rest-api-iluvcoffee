import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  getAll() {
    return 'This action returns all coffees';
  }

  @Post()
  create(@Body() body: Record<string, unknown>) {
    return body;
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return `This action returns coffee ${id}`;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: Record<string, unknown>) {
    return `This action updates coffee ${id} with body ${JSON.stringify(body)}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes coffee ${id}`;
  }
}
