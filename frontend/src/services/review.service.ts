import api from '@/lib/axios'
import { Review, CreateReviewDto, UpdateReviewDto } from '@/types/review.types'

export const reviewService = {

  // get by movie
  async getByMovie(movieId: string): Promise<Review[]> {
    const res = await api.get<Review[]>(`/reviews/movie/${movieId}`)
    return res.data
  },

  // create
  async create(data: CreateReviewDto): Promise<Review> {
    const res = await api.post<Review>('/reviews', data)
    return res.data
  },

  // update
  async update(id: string, data: UpdateReviewDto): Promise<Review> {
    const res = await api.patch<Review>(`/reviews/${id}`, data)
    return res.data
  },

  // delete
  async delete(id: string): Promise<void> {
    await api.delete(`/reviews/${id}`)
  },

}