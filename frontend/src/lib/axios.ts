import axios from 'axios'
import { useAuthStore } from '@/store/auth.store'
import { authService } from '@/services/auth.service'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true
})

// Request interceptor — har bir requestga token qo'shish
api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().access_token

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

// Response interceptor — 401 bo'lsa refresh qilish
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      try {
        const data = await authService.refresh()
        useAuthStore.getState().setToken(data.access_token)
        useAuthStore.getState().setUser(data.user)

        originalRequest.headers.Authorization = `Bearer ${data.access_token}`
        return api(originalRequest)

      } catch {
        useAuthStore.getState().logout()
        window.location.href = '/login'
      }
    }

    return Promise.reject(error)
  }
)

export default api