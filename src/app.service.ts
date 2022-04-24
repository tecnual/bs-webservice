import { Injectable } from '@nestjs/common';
import { version } from '../package.json';
import { Status } from './models/status.class';
/**
 * Main application service
 */
@Injectable()
export class AppService {
  /**
   * Obtain status properties
   * @returns {Status} Status object
   */
  getStatus(): Status {

    const status = new Status('API RestFull Bootstrap', version);
    return status;
  }
}
