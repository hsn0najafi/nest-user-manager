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
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PaginationDto, UUIDDto } from 'src/common/dto';

@ApiTags('User')
@Controller({
    path: 'user',
    version: '1',
})
export class UserController {
    constructor(private readonly userService: UserService) {}

    @ApiOperation({ summary: 'Create new user' })
    @HttpCode(HttpStatus.CREATED)
    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }

    @ApiOperation({ summary: 'Get users by pagination' })
    @HttpCode(HttpStatus.OK)
    @Get()
    findAll(@Query() paginationDto: PaginationDto) {
        return this.userService.findAll(
            paginationDto.page,
            paginationDto.limit,
            paginationDto.sort,
            paginationDto.order,
            paginationDto.role,
        );
    }

    @ApiOperation({ summary: 'Get one user by ID' })
    @HttpCode(HttpStatus.OK)
    @Get(':id')
    findOne(@Param() { id }: UUIDDto) {
        return this.userService.findOne(id);
    }

    @ApiOperation({ summary: 'Update user by ID' })
    @HttpCode(HttpStatus.NO_CONTENT)
    @Patch(':id')
    update(@Param() { id }: UUIDDto, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.update(id, updateUserDto);
    }

    @ApiOperation({ summary: 'Delete user by ID' })
    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete(':id')
    remove(@Param() { id }: UUIDDto) {
        return this.userService.remove(id);
    }
}
