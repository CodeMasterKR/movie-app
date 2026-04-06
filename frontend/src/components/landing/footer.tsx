// src/components/landing/footer.tsx
import Link from 'next/link'
// footer.tsx — import qatorini o'zgartiring
import { Film, Globe, Mail, MapPin } from 'lucide-react'

const LINKS = {
  company: [
    { name: "Biz haqimizda", href: "#" },
    { name: "Bog'lanish", href: "#" },
    { name: "Karyera", href: "#" },
  ],
  explore: [
    { name: "Filmlar", href: "#featured" },
    { name: "Janrlar", href: "#genres" },
    { name: "Top filmlar", href: "#top-rated" },
  ],
  legal: [
    { name: "Maxfiylik siyosati", href: "#" },
    { name: "Foydalanish shartlari", href: "#" },
  ],
}

export const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-white/10 pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Logo & Description */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-white font-bold text-xl mb-4">
              <Film className="text-emerald-500" size={28} />
              <span>MovieApp</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Eng yaxshi filmlarni bir joyda toping. Minglab filmlar, seriallar va ko'proq.
            </p>

            {/* Social */}
            {/* Social */}
<div className="flex items-center gap-3 mt-6">
  <a href="#" className="text-gray-400 hover:text-white transition">
    <Globe size={20} />
  </a>
  <a href="#" className="text-gray-400 hover:text-white transition">
    <Mail size={20} />
  </a>
  <a href="#" className="text-gray-400 hover:text-white transition">
    <MapPin size={20} />
  </a>
</div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kompaniya</h4>
            <ul className="space-y-2">
              {LINKS.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-emerald-400 text-sm transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kashf etish</h4>
            <ul className="space-y-2">
              {LINKS.explore.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-emerald-400 text-sm transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Huquqiy</h4>
            <ul className="space-y-2">
              {LINKS.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-emerald-400 text-sm transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 MovieApp. Barcha huquqlar himoyalangan.
          </p>
          <p className="text-gray-500 text-sm">
            Made with ❤️ by{' '}
            <span className="text-emerald-400 font-medium">CodeMasterKR</span>
          </p>
        </div>

      </div>
    </footer>
  )
}