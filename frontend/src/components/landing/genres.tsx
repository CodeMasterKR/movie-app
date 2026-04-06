// src/components/landing/genres.tsx
import { 
  Sword, 
  Heart, 
  Laugh, 
  Ghost, 
  Rocket, 
  Music,
  Globe,
  Trophy
} from 'lucide-react'

const GENRES = [
  { id: 1, name: "Action",    icon: Sword,  color: "bg-red-500/10    border-red-500/20    text-red-400"    },
  { id: 2, name: "Romance",   icon: Heart,  color: "bg-pink-500/10   border-pink-500/20   text-pink-400"   },
  { id: 3, name: "Comedy",    icon: Laugh,  color: "bg-yellow-500/10 border-yellow-500/20 text-yellow-400" },
  { id: 4, name: "Horror",    icon: Ghost,  color: "bg-purple-500/10 border-purple-500/20 text-purple-400" },
  { id: 5, name: "Sci-Fi",    icon: Rocket, color: "bg-blue-500/10   border-blue-500/20   text-blue-400"   },
  { id: 6, name: "Musical",   icon: Music,  color: "bg-green-500/10  border-green-500/20  text-green-400"  },
  { id: 7, name: "Drama",     icon: Globe,  color: "bg-orange-500/10 border-orange-500/20 text-orange-400" },
  { id: 8, name: "Sport",     icon: Trophy, color: "bg-cyan-500/10   border-cyan-500/20   text-cyan-400"   },
]

export const Genres = () => {
  return (
    <section id="genres" className="bg-zinc-950 py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-1 h-8 bg-emerald-500 rounded-full" />
          <h2 className="text-3xl font-bold text-white">Janrlar</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {GENRES.map((genre) => {
            const Icon = genre.icon
            return (
              <div
                key={genre.id}
                className={`
                  flex flex-col items-center justify-center gap-3 
                  p-6 rounded-xl border cursor-pointer
                  hover:scale-105 transition duration-300
                  ${genre.color}
                `}
              >
                <Icon size={32} />
                <span className="text-white text-sm font-medium">
                  {genre.name}
                </span>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}