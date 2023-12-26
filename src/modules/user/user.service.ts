import { Injectable } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './repository';

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) {}

    create(createUserDto: CreateUserDto) {
        this.userRepository.failIfEmailExists(createUserDto.email);
        return this.userRepository.create(createUserDto);
    }

    findAll(paginationDto: unknown) {
        return this.userRepository.findAndCount(paginationDto);
    }

    findOne(id: string) {
        this.userRepository.failIfIDNotExists(id);
        return this.userRepository.findOne(id);
    }

    update(id: string, updateUserDto: UpdateUserDto) {
        this.userRepository.failIfIDNotExists(id);

        return this.userRepository.update(id, updateUserDto);
    }

    remove(id: string) {
        this.userRepository.failIfIDNotExists(id);
        return this.userRepository.delete(id);
    }
}
