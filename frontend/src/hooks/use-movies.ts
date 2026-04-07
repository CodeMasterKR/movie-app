import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { movieService } from '@/services/movie.service'
import { CreateMovieDto, UpdateMovieDto } from '@/types/movie.types'


// GET all
export const useMovies = () => {
  return useQuery({
    queryKey: ['movies'],
    queryFn: movieService.getAll,
  })
}

// // GET by id
// export const useMovie = (id: string) => {
//   return useQuery({
//     queryKey: ['movies', id],
//     queryFn:  () => movieService.getById(id),
//   })
// }


// POST
export const useCreateMovie = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: CreateMovieDto) => movieService.create(data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['movies'] }),
  })
}

// PATCH
export const useUpdateMovie = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateMovieDto }) =>
      movieService.update(id, data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['movies'] }),
  })
}

// DELETE
export const useDeleteMovie = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (id: string) => movieService.delete(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['movies'] }),
  })
}