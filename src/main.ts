import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // removes properties that are not in the DTO
      transform: true, // transforms the payload to the DTO type
      forbidNonWhitelisted: true, // throws an error if a property that is not in the DTO is sent
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}

void bootstrap();
