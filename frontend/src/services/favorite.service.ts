import api from '@/lib/axios'
import { Favorite } from '@/types/favorite.types'

export const favoriteService = {

  // get all
  async getAll(): Promise<Favorite[]> {
    const res = await api.get<Favorite[]>('/favorites')
    return res.data
  },

  // add
  async add(movieId: string): Promise<Favorite> {
    const res = await api.post<Favorite>('/favorites', { movieId })
    return res.data
  },

  // remove
  async remove(movieId: string): Promise<void> {
    await api.delete(`/favorites/${movieId}`)
  },

}