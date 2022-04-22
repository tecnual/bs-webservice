import { Injectable } from '@nestjs/common';
import { version } from '../package.json';
import { Status } from './models/status.class';

@Injectable()
export class AppService {
  getStatus(): Status {

    const status = new Status('API RestFull Bootstrap', version);
    return status;
  }
}
