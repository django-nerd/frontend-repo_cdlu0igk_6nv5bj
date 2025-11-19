import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ShopPreview from './components/ShopPreview'
import Offers from './components/Offers'

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      <main>
        <Hero />
        <ShopPreview />
        <Offers />

        {/* B2B / Großhandel Teaser */}
        <section id="b2b" className="relative bg-gradient-to-br from-[#0B0B0B] to-black py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">Ihr Partner für Asia & Afro Großhandel</h2>
              <p className="mt-3 text-white/80">Originalimporte, stabile Lieferketten und attraktive Bulk-Preise. Konditionen in 24 Stunden.</p>
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-white/80">
                <li className="bg-white/5 border border-white/10 rounded-lg p-3">Mengenrabatte & Staffelpreise</li>
                <li className="bg-white/5 border border-white/10 rounded-lg p-3">MOQ ab 1–3 Kartons</li>
                <li className="bg-white/5 border border-white/10 rounded-lg p-3">CSV/EDI Bestelloptionen</li>
                <li className="bg-white/5 border border-white/10 rounded-lg p-3">Sortiment: Ghee, Bulk Gewürze, TK Seafood, 4,5L Saucen</li>
              </ul>
              <div className="mt-6 flex gap-3">
                <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-[#CBA135] text-black font-semibold px-5 py-3 hover:brightness-95 transition">Großhandelskonditionen erhalten</a>
                <a href="#" className="inline-flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white font-semibold px-5 py-3 hover:bg-white/20 transition">Sortiment als CSV</a>
              </div>
            </div>
            <div>
              <div className="aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                <img src="https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1600&auto=format&fit=crop" alt="B2B Sortiment" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Kontakt/CTA */}
        <section id="contact" className="bg-[#0B0B0B] py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-bold text-white">Fragen zu Sortiment, Bestellung oder B2B?</h3>
            <p className="mt-2 text-white/80">Wir antworten in der Regel innerhalb von 24 Stunden.</p>
            <div className="mt-6 grid sm:grid-cols-3 gap-3">
              <input className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/60" placeholder="Ihre E-Mail" />
              <input className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/60" placeholder="Telefon (optional)" />
              <button className="rounded-lg bg-[#CBA135] text-black font-semibold px-4 py-3 hover:brightness-95">Kontakt aufnehmen</button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <p className="text-white font-semibold">Asia’s Afro Shop</p>
            <p className="text-white/70 mt-2">Originalimporte • 24–48h Lieferung • Trusted Shop</p>
          </div>
          <div className="text-white/70">
            <p className="font-semibold text-white mb-2">Shop</p>
            <ul className="space-y-1">
              <li>Reis</li>
              <li>Nudeln</li>
              <li>Saucen</li>
              <li>Snacks & Drinks</li>
            </ul>
          </div>
          <div className="text-white/70">
            <p className="font-semibold text-white mb-2">Service</p>
            <ul className="space-y-1">
              <li>Versand & Zahlung</li>
              <li>Rückgabe</li>
              <li>FAQ</li>
              <li>Kontakt</li>
            </ul>
          </div>
          <div className="text-white/70">
            <p className="font-semibold text-white mb-2">Rechtliches</p>
            <ul className="space-y-1">
              <li>AGB</li>
              <li>Datenschutz</li>
              <li>Impressum</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-white/50">© {new Date().getFullYear()} Asia’s Afro Shop</div>
      </footer>
    </div>
  )
}

export default App
