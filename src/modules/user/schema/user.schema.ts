import { IsEmail, IsEnum, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { Roles } from '../enum';

export class UserSchema {
    @ApiProperty({
        type: String,
        example: 'b3ffa268-796a-48c0-a02a-3c045ab9d307',
    })
    id: string;

    @ApiProperty({
        type: String,
        minLength: 2,
        maxLength: 12,
        example: 'Hossein',
    })
    @MinLength(2)
    @MaxLength(12)
    @IsString()
    @IsNotEmpty()
    firstName: string;

    @ApiProperty({
        type: String,
        minLength: 2,
        maxLength: 12,
        example: 'Najafi',
    })
    @MinLength(2)
    @MaxLength(12)
    @IsString()
    @IsNotEmpty()
    lastName: string;

    @ApiProperty({
        type: String,
        enum: Roles,
        example: Roles.MEMBER,
    })
    @IsEnum(Roles)
    @IsNotEmpty()
    role: Roles;

    @ApiProperty({
        type: String,
        uniqueItems: true,
        example: 'hsn0najafi@gmail.com',
    })
    @IsEmail()
    @IsString()
    @IsNotEmpty()
    email: string;
}
