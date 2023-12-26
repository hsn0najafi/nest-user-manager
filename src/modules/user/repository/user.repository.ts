import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';

import { UserSchema } from '../schema';
import { Roles } from '../enum';
import { Errors, Order } from 'src/common/enum';

@Injectable()
export class UserRepository {
    private users: Array<UserSchema> = [];

    failIfEmailExists(email: string): void | never {
        if (this.users.some((user) => user.email === email)) {
            throw new ConflictException(Errors.EMAIL_ALREADY_EXISTS);
        }
    }

    failIfIDNotExists(id: string): void | never {
        if (!this.users.some((user) => user.id === id)) {
            throw new NotFoundException(Errors.USER_NOT_FOUND);
        }
    }

    create(data: Omit<UserSchema, 'id'>): void {
        this.users.push({
            id: crypto.randomUUID(),
            ...data,
        });
    }

    findAndCount(page: number, limit: number, sort: string, order: string, role?: Roles) {
        let users;

        if (role) {
            users = this.users.filter((user) => user.role === role);
        } else {
            users = [...this.users];
        }

        const total = users.length;

        const start = (page - 1) * limit;
        const end = start + limit;
        users = users.slice(start, end);

        users.sort((a, b) => {
            const resiult = a[sort].localeCompare(b[sort]);
            if (order === Order.ASC) {
                return resiult;
            } else {
                return 0 - resiult;
            }
        });

        return {
            data: users,
            pagination: {
                total,
                page,
                limit,
            },
        };
    }

    findOne(id: string): UserSchema {
        const user = this.users.find((user) => user.id === id);

        return user;
    }

    update(id: string, data: Partial<Omit<UserSchema, 'id'>>): void {
        const userIndex = this.users.findIndex((data) => data.id === id);

        if (userIndex !== -1) {
            Object.assign(this.users[userIndex], data);
        }
    }

    delete(id: string): void {
        const userIndex = this.users.findIndex((user) => user.id === id);

        if (userIndex !== -1) {
            delete this.users[userIndex];
        }
    }
}
