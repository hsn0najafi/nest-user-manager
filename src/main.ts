import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';

import { AppModule } from './app.module';

const logger = new Logger('----- APP -----');

async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(
        AppModule,
        new FastifyAdapter({
            logger: true,
            trustProxy: true,
        }),
    );

    await app.listen(3000, '0.0.0.0');

    logger.verbose('Running ...');
}
bootstrap();
