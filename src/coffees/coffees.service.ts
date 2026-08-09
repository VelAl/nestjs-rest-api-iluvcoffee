import { Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

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

  findAll() {
    return this.coffees;
  }

  create(body: Record<string, unknown>) {
    return body;
  }

  findOne(id: string) {
    return this.coffees.find((item) => item.id === +id);
  }

  update(id: string, updateCoffeeDto: Partial<Coffee>) {
    const existingCoffee = this.findOne(id);

    if (existingCoffee) {
      console.log('updateCoffeeDto ===>', updateCoffeeDto);
      // update the existing entity
    }
  }

  remove(id: string) {
    const coffeeIndex = this.coffees.findIndex((item) => item.id === +id);

    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
