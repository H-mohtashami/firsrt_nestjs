import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { HttpHandlerInterceptor } from './http.handler.interceptor';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), UsersModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: HttpHandlerInterceptor,
    },
  ],
})
export class AppModule {}
