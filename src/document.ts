import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const setupDocumentation = (app: INestApplication, route: string) => {
    const configDocument = new DocumentBuilder()
        .setTitle('Swagger API Documentation')
        .setDescription('Nest User Manager')
        .setVersion('1.0')
        .build();

    const document = SwaggerModule.createDocument(app, configDocument);

    SwaggerModule.setup(route, app, document);
};
