// src/components/landing/hero.tsx
import Link from 'next/link'
import { Search, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/original/628Dep6AxEtDxjZoGP78TsOxYbK.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Eng yaxshi <span className="text-emerald-500">filmlarni</span> kashf eting
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10">
          Minglab filmlar, seriallar va ko'proq narsalar bir joyda. Hoziroq boshlang!
        </p>

        {/* Search */}
        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 max-w-xl mx-auto mb-8">
          <Search className="text-gray-400" size={20} />
          <Input
            placeholder="Film qidiring..."
            className="bg-transparent border-none outline-none text-white placeholder:text-gray-400 focus-visible:ring-0"
          />
          <Button className="rounded-full bg-emerald-500 hover:bg-emerald-600 text-white px-6">
            Qidirish
          </Button>
        </div>

        {/* CTA */}
        <div className="flex items-center justify-center gap-4">
          <Link href="/login">
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-6 text-lg rounded-full">
              <Play size={20} className="mr-2" />
              Boshlash
            </Button>
          </Link>
          <Link href="#featured">
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full">
              Filmlarni ko'rish
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-3 bg-white/60 rounded-full" />
        </div>
      </div>

    </section>
  )
}