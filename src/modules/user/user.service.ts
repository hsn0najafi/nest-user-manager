import { Injectable } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './repository';
import { Roles } from './enum';

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) {}

    create(createUserDto: CreateUserDto) {
        this.userRepository.failIfEmailExists(createUserDto.email);
        return this.userRepository.create(createUserDto);
    }

    findAll(page: number, limit: number, sort: string, order: string, role?: Roles) {
        return this.userRepository.findAndCount(page, limit, sort, order, role);
    }

    findOne(id: string) {
        this.userRepository.failIfIDNotExists(id);
        return this.userRepository.findOne(id);
    }

    update(id: string, updateUserDto: UpdateUserDto) {
        this.userRepository.failIfIDNotExists(id);

        if (updateUserDto.email) {
            this.userRepository.failIfEmailExists(updateUserDto.email);
        }

        return this.userRepository.update(id, updateUserDto);
    }

    remove(id: string) {
        this.userRepository.failIfIDNotExists(id);
        return this.userRepository.delete(id);
    }
}
