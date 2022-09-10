import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class HttpHandlerInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        console.log(context.switchToHttp().getResponse());
        return {
          data,
          message: context.switchToHttp().getResponse()?.statusMessage,
          success: !!data,
        };
      }),
    );
  }
}
