import api from '@/lib/axios'
import { Genre, CreateGenreDto } from '@/types/genre.types'

export const genreService = {

  // get all
  async getAll(): Promise<Genre[]> {
    const res = await api.get<Genre[]>('/genres')
    return res.data
  },

  // get by id
  async getById(id: string): Promise<Genre> {
    const res = await api.get<Genre>(`/genres/${id}`)
    return res.data
  },

  // create
  async create(data: CreateGenreDto): Promise<Genre> {
    const res = await api.post<Genre>('/genres', data)
    return res.data
  },

  // delete
  async delete(id: string): Promise<void> {
    await api.delete(`/genres/${id}`)
  },

}