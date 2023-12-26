import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class UUIDDto {
    @ApiProperty({
        type: String,
        example: '29f09449-57b5-4e2a-8d29-ae8f87a7d60d',
    })
    @IsUUID('all')
    @IsNotEmpty()
    id: string;
}
