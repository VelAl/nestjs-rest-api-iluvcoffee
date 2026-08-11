import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';
import { CreateCoffeeDto, UpdateCoffeeDto } from './dto';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Shipwreck Roast',
      brand: 'Buddy Brew',
      flavors: ['chocolate', 'vanilla'],
    },
  ];

  private nextId = 2;

  findAll() {
    return this.coffees;
  }

  create(body: CreateCoffeeDto) {
    const coffee = { id: this.generateId(), ...body };
    this.coffees.push(coffee);

    return coffee;
  }

  findOne(id: number) {
    const coffee = this.coffees.find((item) => item.id === id);

    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }

    return coffee;
  }

  update(id: number, updateCoffeeDto: UpdateCoffeeDto) {
    const index = this.coffees.findIndex((item) => item.id === id);

    if (index < 0) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }

    this.coffees[index] = {
      ...this.coffees[index],
      ...updateCoffeeDto,
    };

    return this.coffees[index];
  }

  remove(id: number) {
    const coffeeIndex = this.coffees.findIndex((item) => item.id === id);

    if (coffeeIndex < 0) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }

    this.coffees.splice(coffeeIndex, 1);
  }

  private generateId(): number {
    return this.nextId++;
  }
}
