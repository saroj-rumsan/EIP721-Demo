import { NestApplication, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { Logger, VersioningType } from '@nestjs/common';
import Constants from './utils/constants';

async function bootstrap() {
  const _logger = new Logger(NestApplication?.name);
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: false }),
  );

  app
    .setGlobalPrefix('api')
    .enableVersioning({ type: VersioningType?.URI, defaultVersion: '1' });

  await app.listen(Constants?.port, Constants?.host, () => {
    _logger.log(
      `Application is running on: ${Constants?.host}:${Constants?.port}/api/v1`,
    );
  });
}
bootstrap();
