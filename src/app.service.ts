import { Injectable } from '@nestjs/common';
import { version } from '../package.json';

@Injectable()
export class AppService {
  getStatus(): Status {
    const status = {
      message: 'API RestFull Bootstrap',
      version
    };
    return status;
  }
}
