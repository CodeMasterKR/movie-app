import { create } from 'zustand'
import { User } from '@/types/user.types'

interface AuthStore {
  user: User | null
  access_token: string | null

  setUser: (user: User | null) => void
  setToken: (token: string | null) => void
  logout: () => void
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  access_token: null,

  setUser: (user) => set({ user }),
  setToken: (token) => set({ access_token: token }),
  logout: () => set({ user: null, access_token: null }),
}))