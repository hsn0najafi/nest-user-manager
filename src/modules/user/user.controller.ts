import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    HttpStatus,
    HttpCode,
    Query,
} from '@nestjs/common';

import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller({
    path: 'user',
    version: '1',
})
export class UserController {
    constructor(private readonly userService: UserService) {}

    @HttpCode(HttpStatus.CREATED)
    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }

    @HttpCode(HttpStatus.OK)
    @Get()
    findAll(@Query() paginationDto: unknown) {
        return this.userService.findAll(paginationDto);
    }

    @HttpCode(HttpStatus.OK)
    @Get(':id')
    findOne(@Param('id') id: any) {
        return this.userService.findOne(id);
    }

    @HttpCode(HttpStatus.NO_CONTENT)
    @Patch(':id')
    update(@Param('id') id: any, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.update(id, updateUserDto);
    }

    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete(':id')
    remove(@Param('id') id: any) {
        return this.userService.remove(id);
    }
}
