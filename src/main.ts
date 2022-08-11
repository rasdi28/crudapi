import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder().setTitle('CRUD API NEST')
                .setDescription("Belajar API Nest Js")
                .setVersion('v1')
                .addTag('CRUD')
                .build();
  
  const document = SwaggerModule.createDocument(app,config);
  SwaggerModule.setup('api',app,document);
  await app.listen(3000);
}
bootstrap();
