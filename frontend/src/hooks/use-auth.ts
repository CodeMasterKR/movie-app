import { useMutation, useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { authService } from '@/services/auth.service'
import { useAuthStore } from '@/store/auth.store'
import { LoginDto, RegisterDto } from '@/types/auth.types'

export const useMe = () => {
  const { setUser, setToken } = useAuthStore()

  return useQuery({
    queryKey: ['me'],
    queryFn: async () => {
      const user = await authService.me()
      setUser(user)
      return user
    },
    retry: false,
    staleTime: 1000 * 60 * 5, 
  })
}

export const useLogin = () => {
  const router = useRouter()
  const { setUser, setToken } = useAuthStore()
   
  return useMutation({
    mutationFn: (data: LoginDto) => authService.login(data),
    onSuccess: (data) => {
      
      setToken(data.access_token)
      setUser(data.user)
      router.push('/')
    },
  })
}

export const useRegister = () => {
  const router = useRouter()

  return useMutation({
    mutationFn: (data: RegisterDto) => authService.register(data),
    onSuccess: () => {
      router.push('/login')
    },
  })
}

export const useLogout = () => {
  const router = useRouter()
  const { logout } = useAuthStore()

  return useMutation({
    mutationFn: () => authService.logout(),
    onSuccess: () => {
      logout()
      router.push('/login')
    },
  })
}