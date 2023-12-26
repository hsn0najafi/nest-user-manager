import { IsEmail, IsEnum, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

import { Roles } from '../enum';

export class UserSchema {
    id: string;

    @MinLength(2)
    @MaxLength(12)
    @IsString()
    @IsNotEmpty()
    firstName: string;

    @MinLength(2)
    @MaxLength(12)
    @IsString()
    @IsNotEmpty()
    lastName: string;

    @IsEnum(Roles)
    @IsNotEmpty()
    role: Roles;

    @IsEmail()
    @IsString()
    @IsNotEmpty()
    email: string;
}
