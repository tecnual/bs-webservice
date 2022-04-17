import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { DefaultResponse } from './models/responses/default.response.class';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getStatus(): DefaultResponse<Status> {
    return new DefaultResponse<Status>(this.appService.getStatus());
  }
}
