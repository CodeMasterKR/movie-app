import api from '@/lib/axios'
import { AuthResponse, LoginDto, RegisterDto } from '@/types/auth.types'
import { User } from '@/types/user.types'

export const authService = {
  
  // register
  async register(data: RegisterDto): Promise<AuthResponse> {
    const res = await api.post<AuthResponse>('/auth/register', data)
    return res.data
  },

  // login
  async login(data: LoginDto): Promise<AuthResponse> {
    const res = await api.post<AuthResponse>('/auth/login', data)
    return res.data
  },

  // logout
  async logout(): Promise<void> {
    await api.post('/auth/logout')
  },

  // refresh token
  async refresh(): Promise<AuthResponse> {
    const res = await api.post<AuthResponse>('/auth/refresh')
    return res.data
  },

  // me
  async me(): Promise<User> {
    const res = await api.get<User>('/auth/me')
    return res.data
  }
}