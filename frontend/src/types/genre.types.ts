export interface Genre {
  id     : string
  name   : string
  tmdbId : number | null
}

export interface CreateGenreDto {
  name    : string
  tmdbId? : number
}