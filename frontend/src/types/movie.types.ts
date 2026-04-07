import { Genre }   from './genre.types'
import { Review }  from './review.types'

export interface Movie {
  id          : string
  tmdbId      : number | null
  title       : string
  overview    : string
  poster      : string | null
  backdrop    : string | null
  releaseDate : string | null
  duration    : number | null
  rating      : number
  ratingCount : number
  genres      : Genre[]
  reviews     : Review[]
  createdAt   : string
  updatedAt   : string
}

export type MovieListItem = Omit<Movie, 'reviews' | 'genres'>

export interface CreateMovieDto {
  tmdbId?      : number
  title        : string
  overview     : string
  poster?      : string
  backdrop?    : string
  releaseDate? : string
  duration?    : number
}

export interface UpdateMovieDto extends Partial<CreateMovieDto> {}