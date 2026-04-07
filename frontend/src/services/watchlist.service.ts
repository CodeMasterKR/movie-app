import api from '@/lib/axios'
import { Watchlist, AddWatchlistDto, UpdateWatchlistDto } from '@/types/watchlist.types'

export const watchlistService = {

  // get all
  async getAll(): Promise<Watchlist[]> {
    const res = await api.get<Watchlist[]>('/watchlist')
    return res.data
  },

  // add
  async add(data: AddWatchlistDto): Promise<Watchlist> {
    const res = await api.post<Watchlist>('/watchlist', data)
    return res.data
  },

  // update
  async update(id: string, data: UpdateWatchlistDto): Promise<Watchlist> {
    const res = await api.patch<Watchlist>(`/watchlist/${id}`, data)
    return res.data
  },

  // remove
  async remove(movieId: string): Promise<void> {
    await api.delete(`/watchlist/${movieId}`)
  },

}