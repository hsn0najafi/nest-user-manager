import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';

import { AppModule } from './app.module';

const configService: ConfigService = new ConfigService();
const logger = new Logger('----- APP -----');

async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(
        AppModule,
        new FastifyAdapter({
            logger: true,
            trustProxy: true,
        }),
    );

    const port = +configService.getOrThrow('PORT');
    await app.listen(port, '0.0.0.0');

    logger.verbose('Running ...');
}
bootstrap();
