import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { DefaultResponse } from './../src/models/responses/default.response.class';
import { version } from '../package.json';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule]
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    const status: Status = {
      message: "API RestFull Bootstrap",
      version
    };
    const res = new DefaultResponse(status);
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect(JSON.stringify(res));
  });
});
