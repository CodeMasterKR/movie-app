// src/components/landing/top-rated.tsx
import { Star, Clock, Trophy } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const TOP_MOVIES = [
  {
    id: 1,
    rank: 1,
    title: "The Shawshank Redemption",
    rating: 9.3,
    duration: "142 min",
    year: 1994,
    genre: "Drama",
    poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    description: "Ikki mahbus o'rtasidagi do'stlik haqida hayajonli drama.",
  },
  {
    id: 2,
    rank: 2,
    title: "The Godfather",
    rating: 9.2,
    duration: "175 min",
    year: 1972,
    genre: "Crime",
    poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsLMdL73rADFB.jpg",
    description: "Italia mafiyasi oilasining hayoti haqida epik film.",
  },
  {
    id: 3,
    rank: 3,
    title: "The Dark Knight",
    rating: 9.0,
    duration: "152 min",
    year: 2008,
    genre: "Action",
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    description: "Batman va Joker o'rtasidagi epik kurash.",
  },
  {
    id: 4,
    rank: 4,
    title: "Schindler's List",
    rating: 8.9,
    duration: "195 min",
    year: 1993,
    genre: "History",
    poster: "https://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
    description: "Ikkinchi jahon urushi davrida yahudiylarni qutqarish haqida.",
  },
  {
    id: 5,
    rank: 5,
    title: "Inception",
    rating: 8.8,
    duration: "148 min",
    year: 2010,
    genre: "Sci-Fi",
    poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    description: "Tush ichida tush — ong chegaralarini sinab ko'rish.",
  },
]

const rankColors: Record<number, string> = {
  1: "text-yellow-400",
  2: "text-gray-300",
  3: "text-orange-400",
  4: "text-emerald-400",
  5: "text-emerald-400",
}

export const TopRated = () => {
  return (
    <section id="top-rated" className="bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-1 h-8 bg-emerald-500 rounded-full" />
          <h2 className="text-3xl font-bold text-white">Top Filmlar</h2>
          <Trophy className="text-yellow-400 ml-2" size={28} />
        </div>

        {/* List */}
        <div className="flex flex-col gap-4">
          {TOP_MOVIES.map((movie) => (
            <div
              key={movie.id}
              className="group flex items-center gap-6 bg-zinc-900 hover:bg-zinc-800 rounded-xl p-4 cursor-pointer transition duration-300"
            >
              {/* Rank */}
              <span className={`text-4xl font-black w-10 text-center ${rankColors[movie.rank]}`}>
                {movie.rank}
              </span>

              {/* Poster */}
              <div className="w-16 h-24 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-white font-semibold text-lg truncate">
                    {movie.title}
                  </h3>
                  <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 text-xs">
                    {movie.genre}
                  </Badge>
                </div>
                <p className="text-gray-400 text-sm mb-2 line-clamp-1">
                  {movie.description}
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star size={14} fill="currentColor" />
                    <span>{movie.rating}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-400">
                    <Clock size={14} />
                    <span>{movie.duration}</span>
                  </div>
                  <span className="text-gray-500">{movie.year}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}