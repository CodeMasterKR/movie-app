import { renderHook, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import { useMovies } from './use-movies'
import { movieService } from '@/services/movie.service'

jest.mock('@/services/movie.service') 

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  })
  return ({ children }: { children: React.ReactNode }) => (  
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

describe('useMovies', () => {
  it('movieService.getAll ni chaqirishi kerak', async () => {
    jest.mocked(movieService.getAll).mockResolvedValue([])  

    const { result } = renderHook(() => useMovies(), {
      wrapper: createWrapper(),
    })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))
    expect(movieService.getAll).toHaveBeenCalled()  
  })
})