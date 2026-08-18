import { Coffee } from 'src/coffees/entities/coffee.entity';
import { Flavor } from 'src/coffees/entities/flavor.entity';
import { CoffeeRefactor1786998744743 } from 'src/migrations/1786998744743-CoffeeRefactor';
import { SchemaSync1787035236738 } from 'src/migrations/1787035236738-SchemaSync';
import { DataSource } from 'typeorm';

// Create migration (build first):
// npx typeorm migration:create src/migrations/Name -d dist/typeorm-cli.config.js
//
// Run migration:
// npx typeorm migration:run
//
// Rollback migration:
// npx typeorm migration:revert -d dist/typeorm-cli.config.js
//
// Generate migration:
// npx typeorm migration:generate src/migrations/<Name> -d dist/typeorm-cli.config.js

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123456',
  database: 'ilovecoffee-postgres',
  entities: [Coffee, Flavor],
  migrations: [CoffeeRefactor1786998744743, SchemaSync1787035236738],
});
