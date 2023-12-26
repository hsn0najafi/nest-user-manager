import { Catch, ExceptionFilter, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';

import { Errors } from '../enum';

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {
        const reply = host.switchToHttp().getResponse();

        let status = exception.status || HttpStatus.INTERNAL_SERVER_ERROR;
        let response = exception.response || Errors.INTERNAL_SERVER_ERROR;

        if (exception instanceof HttpException) {
            status = exception.getStatus();
            response = exception.getResponse();
        }

        reply.status(status).send({
            errors: response,
        });
    }
}
