import api from '@/lib/axios'
import { Movie, MovieListItem, CreateMovieDto, UpdateMovieDto } from '@/types'

export const movieService = {

  // get all
  async getAll(): Promise<MovieListItem[]> {
    const res = await api.get<MovieListItem[]>('/movies')
    return res.data
  },

  // get by id
  async getById(id: string): Promise<Movie> {
    const res = await api.get<Movie>(`/movies/${id}`)
    return res.data
  },

  // create
  async create(data: CreateMovieDto): Promise<Movie> {
    const res = await api.post<Movie>('/movies', data)
    return res.data
  },

  // update
  async update(id: string, data: UpdateMovieDto): Promise<Movie> {
    const res = await api.patch<Movie>(`/movies/${id}`, data)
    return res.data
  },

  // delete
  async delete(id: string): Promise<void> {
    await api.delete(`/movies/${id}`)
  },

}