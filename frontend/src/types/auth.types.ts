export type Role = 'USER' | 'ADMIN'

export interface User {
  id: string
  email: string
  username: string
  avatar: string | null
  role: Role
  createdAt: string
  updatedAt: string
}

export interface LoginDto {
  email: string
  password: string
}

export interface RegisterDto {
  email: string
  username: string
  password: string
}

export interface AuthResponse {
  access_token: string
  user: User
}