import { Menu, Search, ShoppingCart, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <button className="md:hidden p-2 text-white/80 hover:text-white"><Menu size={22} /></button>
            <a href="#home" className="text-lg font-extrabold tracking-tight text-white">
              Asia’s Afro Shop
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#shop" className="hover:text-white">Shop</a>
            <a href="#b2b" className="hover:text-white">B2B / Großhandel</a>
            <a href="#brands" className="hover:text-white">Marken</a>
            <a href="#offers" className="hover:text-white">Angebote</a>
            <a href="#about" className="hover:text-white">Über uns</a>
            <a href="#blog" className="hover:text-white">Blog</a>
            <a href="#contact" className="hover:text-white">Kontakt</a>
            <a href="#login" className="hover:text-white">Händler-Login</a>
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center bg-white/10 border border-white/10 rounded-full px-3 py-1.5">
              <Search size={18} className="text-white/60" />
              <input
                placeholder="Suche Produkte, Marken..."
                className="bg-transparent text-sm text-white placeholder-white/60 outline-none px-2 w-56"
              />
            </div>
            <button className="p-2 text-white/80 hover:text-white"><User size={22} /></button>
            <button className="p-2 text-white/80 hover:text-white relative">
              <ShoppingCart size={22} />
              <span className="absolute -top-1 -right-1 text-[10px] bg-red-600 text-white rounded-full px-1.5 py-0.5">0</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
