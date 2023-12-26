import { Injectable } from '@nestjs/common';

import { UserSchema } from '../schema';

@Injectable()
export class UserRepository {
    private users: Array<UserSchema> = [];

    failIfEmailExists(email: string): void | never {}

    failIfIDNotExists(id: string): void | never {}

    create(data: Omit<UserSchema, 'id'>): void {}

    findAndCount(paginationDto: unknown) {}

    findOne(id: string): UserSchema {}

    update(id: string, data: Partial<Omit<UserSchema, 'id'>>): void {}

    delete(id: string): void {}
}
