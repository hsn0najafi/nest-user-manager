import { Injectable } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
    create(createUserDto: CreateUserDto) {}

    findAll(paginationDto: unknown) {}

    findOne(id: string) {}

    update(id: string, updateUserDto: UpdateUserDto) {}

    remove(id: string) {}
}
