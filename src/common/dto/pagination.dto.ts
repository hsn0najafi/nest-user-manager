import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsNumber, IsOptional, Max, Min } from 'class-validator';

import { Order, Sort } from '../enum';
import { Roles } from 'src/modules/user/enum';
import { Type } from 'class-transformer';

export class PaginationDto {
    @ApiProperty({
        type: Number,
        minimum: 1,
        example: 1,
    })
    @Type(() => Number)
    @Min(1)
    @IsNumber()
    @IsNotEmpty()
    page: number;

    @ApiProperty({
        type: Number,
        minimum: 1,
        maximum: 30,
        example: 1,
    })
    @Type(() => Number)
    @Min(1)
    @Max(30)
    @IsNumber()
    @IsNotEmpty()
    limit: number;

    @ApiProperty({
        type: Number,
        enum: Sort,
        example: Sort.EMAIL,
    })
    @IsEnum(Sort)
    @IsNotEmpty()
    sort: Sort;

    @ApiProperty({
        type: Number,
        enum: Order,
        example: Order.DESC,
    })
    @IsEnum(Order)
    @IsNotEmpty()
    order: Order;

    @ApiProperty({
        type: Number,
        enum: Roles,
        required: false,
        example: Roles.MEMBER,
    })
    @IsEnum(Roles)
    @IsOptional()
    role?: Roles;
}
