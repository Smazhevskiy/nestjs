import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty } from 'class-validator'



export class CreateUserDto {

    @ApiProperty({ example: 'user@gmail.com', description: 'Почтовый адрес' })
    @IsEmail()
    readonly email: string

    @ApiProperty({ example: '12345678', description: 'Почтовый адрес' })
    @IsNotEmpty()
    readonly password: string

}