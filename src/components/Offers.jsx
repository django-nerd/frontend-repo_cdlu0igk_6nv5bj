export default function Offers() {
  const offers = [
    {
      title: 'Tilda Basmati Reis 5kg',
      badge: 'Bestseller',
      price: '22,90 €',
      img: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'FOCO Kokoswasser 330ml',
      badge: 'Best Price',
      price: '1,49 €',
      img: 'https://images.unsplash.com/photo-1542444459-db63c96c8f1b?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Khanum Ghee 1kg',
      badge: 'Angebot',
      price: '14,90 €',
      img: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  return (
    <section id="offers" className="bg-[#0B0B0B] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Angebote & Bestseller</h2>
          <a href="#" className="text-[#C62828] text-sm hover:underline">Mehr Deals</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((o, i) => (
            <div key={i} className="rounded-2xl overflow-hidden bg-white/5 border border-white/10">
              <div className="relative">
                <img src={o.img} alt={o.title} className="w-full h-56 object-cover" />
                <span className="absolute top-3 left-3 text-xs bg-[#C62828] text-white px-2 py-1 rounded">{o.badge}</span>
              </div>
              <div className="p-4">
                <h3 className="text-white font-semibold mb-1">{o.title}</h3>
                <p className="text-[#CBA135] font-bold">{o.price}</p>
                <button className="mt-3 w-full rounded-full bg-[#CBA135] text-black font-semibold py-2 hover:brightness-95">In den Warenkorb</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
