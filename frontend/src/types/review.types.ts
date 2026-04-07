export interface Review {
  id        : string
  rating    : number
  comment   : string | null
  userId    : string
  movieId   : string
  createdAt : string
  updatedAt : string
}


export interface CreateReviewDto {
  rating   : number
  comment? : string
  movieId  : string
}

export interface UpdateReviewDto {
  rating?  : number
  comment? : string
}