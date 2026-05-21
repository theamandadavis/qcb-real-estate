import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row pt-20">
      {/* Text side */}
      <div className="flex-1 flex items-center justify-center px-8 md:px-14 py-16 lg:py-24 bg-white order-2 lg:order-1">
        <div className="max-w-xl w-full">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-gold-500" />
            <span className="text-gold-600 text-xs font-bold uppercase tracking-[0.3em]">
              Luxury STR Management
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl xl:text-[58px] font-bold text-slate-900 leading-[1.08] mb-6">
            Scaling Luxury
            <br />
            Short-Term Rentals
            <br />
            <span className="text-gold-gradient">Through Elite</span>
            <br />
            <span className="text-gold-gradient">Hospitality</span>
          </h1>

          <p className="text-slate-500 text-lg leading-relaxed mb-10 max-w-lg">
            QCB Global delivers premium property management, luxury guest experiences, and revenue-driven STR
            solutions designed for investors, homeowners, and strategic partners.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              href="/revenue-projections"
              className="px-8 py-4 bg-gold-500 hover:bg-gold-400 text-white font-bold text-base rounded-xl transition-colors shadow-md shadow-gold-500/20 text-center"
            >
              Get Revenue Projections
            </Link>
            <Link
              href="/partner"
              className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-base rounded-xl transition-colors text-center"
            >
              Partner With QCB
            </Link>
          </div>

          {/* Stats strip */}
          <div className="flex gap-8 pt-8 border-t border-slate-100">
            {[
              { value: '75–90%', label: 'Target Occupancy' },
              { value: '5★', label: 'Guest Rating Goal' },
              { value: '8+', label: 'Markets Served' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-slate-900 text-2xl font-bold">{stat.value}</p>
                <p className="text-slate-400 text-xs mt-0.5 uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image side */}
      <div className="relative lg:w-[54%] h-72 sm:h-96 lg:h-auto min-h-[400px] order-1 lg:order-2">
        <Image
          src="/images/hero.jpg"
          alt="Luxury QCB Global property with pool"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 1024px) 100vw, 54vw"
        />
        {/* Subtle left-edge fade into white on desktop */}
        <div className="hidden lg:block absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
      </div>
    </section>
  );
}
