import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';

import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller()
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }

    @Get()
    findAll(@Query() paginationDto: unknown) {
        return this.userService.findAll(paginationDto);
    }

    @Get(':id')
    findOne(@Param('id') id: any) {
        return this.userService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: any, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.update(id, updateUserDto);
    }

    @Delete(':id')
    remove(@Param('id') id: any) {
        return this.userService.remove(id);
    }
}
