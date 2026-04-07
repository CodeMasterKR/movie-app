import api from '@/lib/axios'
import { User, UserProfile, UpdateUserDto } from '@/types/user.types'

export const userService = {

  // get all
  async getAll(): Promise<UserProfile[]> {
    const res = await api.get<UserProfile[]>('/users')
    return res.data
  },

  // get by id
  async getById(id: string): Promise<UserProfile> {
    const res = await api.get<UserProfile>(`/users/${id}`)
    return res.data
  },

  // update
  async update(id: string, data: UpdateUserDto): Promise<UserProfile> {
    const res = await api.patch<UserProfile>(`/users/${id}`, data)
    return res.data
  },

  // delete
  async delete(id: string): Promise<void> {
    await api.delete(`/users/${id}`)
  },
  
}