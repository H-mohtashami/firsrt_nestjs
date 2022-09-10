import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {HttpHandlerInterceptor} from "./http.handler.interceptor";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  app.useGlobalInterceptors(new HttpHandlerInterceptor());
}
bootstrap();
