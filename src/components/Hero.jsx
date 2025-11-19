export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background gradient with cultural patterns hint */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-black to-[#0A0A0A]" />
      <div className="absolute inset-0 opacity-[0.07]" style={{backgroundImage: "radial-gradient(circle at 20% 20%, #C62828 2px, transparent 2px), radial-gradient(circle at 80% 30%, #1B5E20 2px, transparent 2px), radial-gradient(circle at 60% 80%, #CBA135 2px, transparent 2px)", backgroundSize: "32px 32px"}}/>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 text-white/80 rounded-full px-3 py-1 text-xs mb-4">
            <span>Originalimporte</span>
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <span>24–48h Lieferung</span>
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <span>Trusted Shop</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Authentische Asia & Afro Foods – für Zuhause, Handel & Gastro
          </h1>
          <p className="mt-4 text-white/80 max-w-2xl">
            Originalimporte, fair bepreist und blitzschnell geliefert. Von Tilda bis TRS: Qualität, auf die Sie sich verlassen können.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-white">
              <p className="font-semibold">Lieferung 24–48h</p>
              <p className="text-sm text-white/70">Schnell & zuverlässig deutschlandweit</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-white">
              <p className="font-semibold">Großhandelspreise</p>
              <p className="text-sm text-white/70">Faire Konditionen für B2C & B2B</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-white">
              <p className="font-semibold">Original-Importe</p>
              <p className="text-sm text-white/70">Markenqualität: Tilda, TRS, FOCO, Khanum</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#shop" className="inline-flex items-center justify-center rounded-full bg-[#CBA135] text-black font-semibold px-5 py-3 hover:brightness-95 transition">Jetzt einkaufen</a>
            <a href="#b2b" className="inline-flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white font-semibold px-5 py-3 hover:bg-white/20 transition">B2B anfragen</a>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-tr from-[#1B5E20]/20 via-[#CBA135]/20 to-[#C62828]/20">
            <img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop" alt="Produkt Hero" className="w-full h-full object-cover mix-blend-normal"/>
          </div>
          <div className="absolute -bottom-6 -left-6 bg-black/70 border border-white/10 text-white rounded-xl p-4">
            <p className="text-sm">Top-Marken</p>
            <p className="font-semibold">Tilda • TRS • FOCO • Khanum</p>
          </div>
        </div>
      </div>
    </section>
  );
}
