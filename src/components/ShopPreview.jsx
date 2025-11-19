export default function ShopPreview() {
  const categories = [
    { key: 'asia', title: 'Asia', img: 'https://images.unsplash.com/photo-1583031214058-8d5b07a285ee?q=80&w=1200&auto=format&fit=crop' },
    { key: 'afro', title: 'Afro', img: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?q=80&w=1200&auto=format&fit=crop' },
    { key: 'reis', title: 'Reis', img: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?q=80&w=1200&auto=format&fit=crop' },
    { key: 'saucen', title: 'Saucen', img: 'https://images.unsplash.com/photo-1604908554049-1e4d373d89f0?q=80&w=1200&auto=format&fit=crop' },
    { key: 'snacks', title: 'Snacks', img: 'https://images.unsplash.com/photo-1583308433637-2d0067630aeb?q=80&w=1200&auto=format&fit=crop' },
    { key: 'drinks', title: 'Drinks', img: 'https://images.unsplash.com/photo-1527169402691-feff5539e52c?q=80&w=1200&auto=format&fit=crop' },
  ];

  return (
    <section id="shop" className="relative bg-[#0B0B0B] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Shop-Kategorien</h2>
          <a href="#" className="text-[#CBA135] text-sm hover:underline">Alle ansehen</a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map(cat => (
            <a key={cat.key} href={`#/shop/${cat.key}`} className="group relative rounded-xl overflow-hidden border border-white/10 bg-white/5">
              <img src={cat.img} alt={cat.title} className="w-full h-28 object-cover group-hover:scale-105 transition" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-2 left-2 text-white font-semibold">{cat.title}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
