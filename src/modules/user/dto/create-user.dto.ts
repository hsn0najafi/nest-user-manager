import { PickType } from '@nestjs/swagger';

import { UserSchema } from '../schema';

export class CreateUserDto extends PickType(UserSchema, [
    'firstName',
    'lastName',
    'role',
    'email',
]) {}
