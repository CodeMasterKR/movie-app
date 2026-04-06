'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Film, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const NAV_LINKS = [
  { name: "Filmlar",     href: "#featured"  },
  { name: "Janrlar",     href: "#genres"    },
  { name: "Top filmlar", href: "#top-rated" },
]

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen]         = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-7 left-20 right-20 z-50 transition-all duration-300 rounded-[20px] ${
      isScrolled
        ? 'bg-black/15 backdrop-blur-md shadow-lg shadow-black/20 border-emerald-500 border'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-white font-bold text-xl">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
            <Film size={18} className="text-white" />
          </div>
          <span className="tracking-tight">
            Movie<span className="text-emerald-400">App</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/auth/login">
            <Button
              variant="ghost"
              className="text-gray-300 hover:text-white hover:bg-white/10"
            >
              Kirish
            </Button>
          </Link>
          <Link href="/auth/register">
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg px-5">
              Ro'yxatdan o'tish
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10 px-4 py-4 flex flex-col gap-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition"
            >
              {link.name}
            </Link>
          ))}
          <div className="border-t border-white/10 pt-3 mt-1 flex flex-col gap-2">
            <Link href="/auth/login" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full text-gray-300 hover:text-white hover:bg-white/10">
                Kirish
              </Button>
            </Link>
            <Link href="/auth/register" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">
                Ro'yxatdan o'tish
              </Button>
            </Link>
          </div>
        </div>
      )}

    </nav>
  )
}