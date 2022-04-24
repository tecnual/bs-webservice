import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { ApiCustomDefaultResponse } from './shared/decorators/api.custom-default.response';
import { DefaultResponse } from './models/responses/default.response.class';
import { Status } from './models/status.class';
/**
 * Main Application Controller
 */
@ApiTags('Home')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * Application status
   * @returns  {DefaultResponse<Status>}
   */
  @Get()
  @ApiCustomDefaultResponse(Status)
  @ApiOperation({ summary: 'Application status' })
  getStatus(): DefaultResponse<Status> {
    return new DefaultResponse<Status>(this.appService.getStatus());
  }
}
