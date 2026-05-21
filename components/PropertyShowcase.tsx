import Link from 'next/link';
import Image from 'next/image';

const properties = [
  {
    category: 'Luxury Pool Homes',
    description: 'Modern outdoor living with resort-style experiences.',
    image: '/images/pool-home.jpg',
  },
  {
    category: 'Modern Interiors',
    description: 'Elegant furnishing, luxury finishes, and guest-focused comfort.',
    image: '/images/interior-living.jpg',
  },
  {
    category: 'Luxury Cabins',
    description: 'Warm, cinematic environments designed for unforgettable stays.',
    image: '/images/cabin.jpg',
  },
  {
    category: 'City Penthouses',
    description: 'High-rise luxury experiences for business and leisure travelers.',
    image: '/images/interior-bedroom.jpg',
  },
];

export default function PropertyShowcase() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8 bg-gold-500" />
              <span className="text-gold-600 text-xs font-bold uppercase tracking-[0.25em]">Portfolio</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Featured Luxury Experiences</h2>
          </div>
          <Link
            href="/portfolio"
            className="text-gold-600 hover:text-gold-500 text-sm font-semibold flex items-center gap-1 transition-colors"
          >
            View Full Portfolio
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {properties.map((prop) => (
            <div
              key={prop.category}
              className="group relative rounded-2xl overflow-hidden border border-slate-200 hover:border-gold-400/50 hover:shadow-xl transition-all cursor-pointer"
            >
              {/* Real image */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={prop.image}
                  alt={prop.category}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                {/* Gradient overlay for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                {/* Category label on image */}
                <div className="absolute bottom-4 left-4">
                  <span className="bg-gold-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                    {prop.category}
                  </span>
                </div>
              </div>
              {/* Card footer */}
              <div className="bg-white p-5">
                <h3 className="text-slate-900 font-bold text-lg mb-1 group-hover:text-gold-600 transition-colors">
                  {prop.category}
                </h3>
                <p className="text-slate-500 text-sm">{prop.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
