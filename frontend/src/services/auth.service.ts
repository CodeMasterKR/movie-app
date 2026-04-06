import api from '@/lib/axios'
import { AuthResponse, LoginDto, RegisterDto, User } from '@/types/auth.types'

export const authService = {
  // Register
  async register(data: RegisterDto): Promise<AuthResponse> {
    const res = await api.post<AuthResponse>('/auth/register', data)
    return res.data
  },

  // Login
  async login(data: LoginDto): Promise<AuthResponse> {
    const res = await api.post<AuthResponse>('/auth/login', data)
    return res.data
  },

  // Logout
  async logout(): Promise<void> {
    await api.post('/auth/logout')
  },

  // Refresh token
  async refresh(): Promise<AuthResponse> {
    const res = await api.post<AuthResponse>('/auth/refresh')
    return res.data
  },

  // Me
  async me(): Promise<User> {
    const res = await api.get<User>('/auth/me')
    return res.data
  },
}