import { Role } from './enums'

export interface User {
  id           : string
  email        : string
  username     : string
  passwordHash : string
  avatar       : string | null
  role         : Role
  refreshToken : string | null
  createdAt    : string
  updatedAt    : string
}

export interface UpdateUserDto {
  username? : string
  avatar?   : string
}

export type UserProfile = Omit<User, 'passwordHash' | 'refreshToken'>