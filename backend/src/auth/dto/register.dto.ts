import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength, MaxLength } from 'class-validator';

export class RegisterDto {
  @ApiProperty({
    example: 'kamron@gmail.com',
    description: 'Foydalanuvchi email manzili',
  })
  @IsEmail()
  email!: string;

  @ApiProperty({
    example: 'kamronbek',
    description: 'Foydalanuvchi nomi',
    minLength: 3,
    maxLength: 20,
  })
  @IsString()
  @MinLength(3)
  @MaxLength(20)
  username!: string;

  @ApiProperty({
    example: '123456',
    description: 'Foydalanuvchi paroli',
    minLength: 6,
  })
  @IsString()
  @MinLength(6)
  password!: string;
}