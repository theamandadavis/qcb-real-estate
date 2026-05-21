import Link from 'next/link';
import PropertyCard from './PropertyCard';

const properties = [
  {
    id: 1,
    title: 'Modern Family Home',
    price: '$485,000',
    beds: 4,
    baths: 3,
    sqft: '2,400',
    address: '456 Oak Avenue, Springfield',
    type: 'For Sale' as const,
    tag: 'Featured',
  },
  {
    id: 2,
    title: 'Downtown Luxury Condo',
    price: '$2,800/mo',
    beds: 2,
    baths: 2,
    sqft: '1,100',
    address: '789 City Center Blvd, Metro',
    type: 'For Rent' as const,
    tag: 'New',
  },
  {
    id: 3,
    title: 'Charming Starter Home',
    price: '$285,000',
    beds: 3,
    baths: 2,
    sqft: '1,650',
    address: '321 Maple Lane, Riverside',
    type: 'For Sale' as const,
    tag: 'Price Reduced',
  },
];

export default function FeaturedListings() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-2">
              Hand-picked for you
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Featured Listings</h2>
          </div>
          <Link
            href="/listings"
            className="text-navy-700 font-semibold text-sm hover:text-navy-500 transition-colors flex items-center gap-1"
          >
            View All Listings
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
}
