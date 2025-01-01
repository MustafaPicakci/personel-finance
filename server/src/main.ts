import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as dotenv from 'dotenv';
import { AppModule } from './app.module';

dotenv.config(); // .env dosyasını yükle

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger ayarları
  const config = new DocumentBuilder()
    .setTitle('Personal Finance API')
    .setDescription('Kişisel finans ve bütçe yönetimi API dökümantasyonu')
    .setVersion('1.0')
    .addTag('finance')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document); // Swagger UI için endpoint

  // CORS'u etkinleştir
  app.enableCors({
    origin: 'http://localhost:5173', // Frontend uygulamanızın URL'si
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
