import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DefaultResponse } from './models/responses/default.response.class';
import { version } from '../package.json';
import { AppModule } from './app.module';
import { Status } from './models/status.class';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
      controllers: [AppController],
      providers: [AppService]
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return status version"', () => {
      const status: Status = {
        message: "API RestFull Bootstrap",
        version
      };
      const res = new DefaultResponse(status);
      expect(appController.getStatus()).toMatchObject(res);
    });
  });
});
