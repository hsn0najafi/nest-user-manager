import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { map } from 'rxjs/operators';

import { RequestStatus } from '../enum';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler) {
        return next.handle().pipe(
            map((data) => ({
                status: RequestStatus.SUCCESS,
                statusCode: context.switchToHttp().getResponse().statusCode,
                result: data || {},
                timestamp: new Date(),
            })),
        );
    }
}
