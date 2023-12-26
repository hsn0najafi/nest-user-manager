import { PickType } from '@nestjs/mapped-types';

import { UserSchema } from '../schema';

export class CreateUserDto extends PickType(UserSchema, [
    'firstName',
    'lastName',
    'role',
    'email',
]) {}
