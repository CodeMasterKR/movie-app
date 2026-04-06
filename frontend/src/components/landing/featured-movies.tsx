// src/components/landing/featured-movies.tsx
import { Star, Clock } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const MOVIES = [
  {
    id: 1,
    title: "Inception",
    rating: 8.8,
    duration: "148 min",
    genre: "Sci-Fi",
    poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
  },
  {
    id: 2,
    title: "Interstellar",
    rating: 8.6,
    duration: "169 min",
    genre: "Drama",
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  },
  {
    id: 3,
    title: "The Dark Knight",
    rating: 9.0,
    duration: "152 min",
    genre: "Action",
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  },
  {
    id: 4,
    title: "Oppenheimer",
    rating: 8.5,
    duration: "180 min",
    genre: "History",
    poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
  },
  {
    id: 5,
    title: "Dune",
    rating: 8.0,
    duration: "155 min",
    genre: "Sci-Fi",
    poster: "https://image.tmdb.org/t/p/w500/d5NXSklpcvksqAfpmEkapke8Yn.jpg",
  },
  {
    id: 6,
    title: "The Godfather",
    rating: 9.2,
    duration: "175 min",
    genre: "Crime",
    poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsLMdL73rADFB.jpg",
  },
]

export const FeaturedMovies = () => {
  return (
    <section id="featured" className="bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-1 h-8 bg-emerald-500 rounded-full" />
          <h2 className="text-3xl font-bold text-white">Mashhur Filmlar</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {MOVIES.map((movie) => (
            <div
              key={movie.id}
              className="group relative rounded-xl overflow-hidden cursor-pointer"
            >
              {/* Poster */}
              <div className="aspect-[2/3] overflow-hidden">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition duration-300">
                <h3 className="text-white font-semibold text-sm mb-1 truncate">
                  {movie.title}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-yellow-400 text-xs">
                    <Star size={12} fill="currentColor" />
                    <span>{movie.rating}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-400 text-xs">
                    <Clock size={12} />
                    <span>{movie.duration}</span>
                  </div>
                </div>
              </div>

              {/* Badge */}
              <Badge className="absolute top-2 left-2 bg-emerald-500 text-white text-xs">
                {movie.genre}
              </Badge>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}