import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getLogs(): any {
    return [
      { name: 'test', id: 1 },
      { name: 'sample', id: 2 },
    ];
  }
}
