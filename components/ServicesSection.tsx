import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    title: 'Premier Property Management',
    description: 'Our staff is dedicated to providing a hands-off, full-service STR management experience for homeowners, investors, vacation property owners, and remote operators — a concierge-level experience so you can focus on your day-to-day living.',
    points: ['Listing management', 'Guest messaging', 'Pricing optimization', 'Booking coordination', 'Maintenance oversight', 'Cleaning schedules'],
    image: '/images/airbnb.jpg',
  },
  {
    title: 'Streamlined Rentals',
    description: 'Our team identifies scalable opportunities in high-demand STR markets — luxury travel destinations, corporate travel regions, and insurance housing partnerships providing temporary refuge to families displaced by catastrophic events.',
    points: ['Acquisition strategies', 'High occupancy locations', 'Revenue-focused operations'],
    image: '/images/revenue.jpg',
  },
  {
    title: 'Property Optimization',
    description: 'We transform properties into premium hospitality experiences that attract discerning guests and command the highest expectations from our company, our staff, and our luxury locations.',
    points: ['Interior design guidance', 'Luxury amenity upgrades', 'Smart home integration', 'Guest-experience enhancement'],
    image: '/images/interior-living.jpg',
  },
  {
    title: 'Cleaning Operations',
    description: 'Our highest priority is to create a safe and clean environment — removing any worry from our guests and ensuring their health is held with the utmost importance while staying in any property we manage.',
    points: ['Hotel-level presentation', 'Safe, fast & friendly turnovers', 'QA inspections after every stay', 'Restocking systems'],
    image: '/images/cleaning.jpg',
  },
  {
    title: 'Dynamic Pricing',
    description: 'Market-based pricing systems designed to maximize revenue across occupancy, seasonal rates, and events — spanning short-term, mid-term, corporate, and insurance housing.',
    points: ['Occupancy optimization / Short-Term Rentals', 'Seasonal rate strategy / Mid-Term Rentals', 'Event-driven & weekend revenue', 'Corporate & executive housing', 'Insurance housing assistance'],
    image: '/images/interior-kitchen.jpg',
  },
  {
    title: 'Investor Partnerships',
    description: 'Strategic co-investment opportunities for partners seeking passive income and scalable STR portfolio growth.',
    points: ['Passive income & generational wealth opportunities', 'STR market acquisition & expansion', 'Multi-state portfolio scaling', 'Long-term investments'],
    image: '/images/partnership.jpg',
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8 bg-gold-500" />
              <span className="text-gold-600 text-xs font-bold uppercase tracking-[0.25em]">What We Do</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Services</h2>
          </div>
          <Link
            href="/services"
            className="text-gold-600 hover:text-gold-500 text-sm font-semibold flex items-center gap-1 transition-colors"
          >
            View All Services
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-gold-400/50 hover:shadow-lg transition-all"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={svc.image}
                  alt={svc.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              {/* Content */}
              <div className="p-6">
                <h3 className="text-slate-900 font-bold text-lg mb-2">{svc.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{svc.description}</p>
                <ul className="space-y-1.5">
                  {svc.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2 text-xs text-slate-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
