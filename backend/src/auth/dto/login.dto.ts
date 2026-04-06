import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    example: 'kamron@gmail.com',
    description: 'Foydanaluvchi email manzili',
  })
  @IsEmail()
  email!: string;

  @ApiProperty({ 
    example: '123456',
    description: 'Foydalanuvchi paroli',
    minLength: 6
  })
  @IsString()
  @MinLength(6)
  password!: string;
}
