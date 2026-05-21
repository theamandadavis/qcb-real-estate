import Link from 'next/link';
import Image from 'next/image';

const columns = [
  {
    heading: 'Services',
    links: [
      { href: '/services', label: 'Airbnb Management' },
      { href: '/services', label: 'Rental Arbitrage' },
      { href: '/services', label: 'Property Optimization' },
      { href: '/services', label: 'Dynamic Pricing' },
      { href: '/services', label: 'Cleaning Operations' },
      { href: '/services', label: 'Investor Partnerships' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { href: '/about', label: 'About QCB' },
      { href: '/markets', label: 'Markets Served' },
      { href: '/portfolio', label: 'Luxury Portfolio' },
      { href: '/investor-relations', label: 'Investor Relations' },
      { href: '/partner', label: 'Partner With Us' },
      { href: '/contact', label: 'Contact' },
    ],
  },
  {
    heading: 'Get Started',
    links: [
      { href: '/revenue-projections', label: 'Revenue Projections' },
      { href: '/partner', label: 'Owner Inquiry' },
      { href: '/investor-relations', label: 'Investment Opportunities' },
    ],
  },
];

const markets = [
  'Las Vegas, NV', 'Orlando, FL', 'Charleston, SC', 'Myrtle Beach, SC',
  'Charlotte, NC', 'Gatlinburg, TN', 'Nashville, TN', 'Palmas Del Mar, PR',
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo-footer.png"
                alt="QCB Global LLC"
                width={100}
                height={100}
                className="object-contain"
              />
            </Link>

            <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs">
              Scaling luxury short-term rentals through elite hospitality and operational precision. Premium STR
              management for investors, homeowners, and strategic partners.
            </p>

            <div className="mb-6">
              <p className="text-white/20 text-xs uppercase tracking-widest mb-3">Markets</p>
              <div className="flex flex-wrap gap-2">
                {markets.map((city) => (
                  <span key={city} className="text-xs text-white/40 border border-white/10 rounded-full px-2.5 py-1">
                    {city}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              {['FB', 'IG', 'LI', 'TW'].map((s) => (
                <div
                  key={s}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-xs text-white/30 hover:border-gold-500/50 hover:text-gold-400 transition-colors cursor-pointer"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-white/25 text-xs font-semibold uppercase tracking-widest mb-5">{col.heading}</h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/45 hover:text-gold-400 text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/20">
          <p>&copy; {new Date().getFullYear()} QCB Global LLC. All rights reserved.</p>
          <div className="flex gap-5">
            <span className="hover:text-white/40 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white/40 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
