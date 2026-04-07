import { Movie } from './movie.types'

export interface Favorite {
  id        : string
  userId    : string
  movieId   : string
  movie     : Movie
  createdAt : string
}