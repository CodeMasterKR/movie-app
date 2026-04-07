import { WatchStatus } from './enums'
import { Movie }       from './movie.types'

export interface Watchlist {
  id        : string
  status    : WatchStatus
  userId    : string
  movieId   : string
  movie     : Movie
  createdAt : string
  updatedAt : string
}

export interface AddWatchlistDto {
  movieId : string
  status  : WatchStatus
}

export interface UpdateWatchlistDto {
  status : WatchStatus
}