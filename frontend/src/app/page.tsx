import { Navbar } from '@/components/landing/navbar'
import { Hero } from '@/components/landing/hero'
import { FeaturedMovies } from '@/components/landing/featured-movies'
import { Genres } from '@/components/landing/genres'
import { TopRated } from '@/components/landing/top-rated'
import { Footer } from '@/components/landing/footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeaturedMovies />
      <Genres />
      <TopRated />
      <Footer />
    </main>
  )
}