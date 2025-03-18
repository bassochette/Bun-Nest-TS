import { Logger } from '@nestjs/common';
import { NestApplication, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const app = await NestFactory.create<NestApplication>(AppModule);

app.enableCors();

const port = process.env.PORT || 3000;
await app.listen(port);

Logger.log(`🦊 API：started on port ${port} 🦊`);
