interface PropertyCardProps {
  id: number;
  title: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
  address: string;
  type: 'For Sale' | 'For Rent';
  tag?: string;
}

const tagColors: Record<string, string> = {
  Featured: 'bg-gold-500 text-navy-900',
  New: 'bg-emerald-500 text-white',
  'Price Reduced': 'bg-red-500 text-white',
};

export default function PropertyCard({ title, price, beds, baths, sqft, address, type, tag }: PropertyCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-slate-100 transition-shadow group">
      {/* Image placeholder */}
      <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-200 to-slate-300 flex flex-col items-center justify-center gap-2">
        <svg className="w-14 h-14 text-slate-400 group-hover:text-slate-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
            d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          <polyline strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} points="9 22 9 12 15 12 15 22" />
        </svg>
        <span className="text-slate-400 text-sm">Property Photo</span>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span className={`px-2.5 py-1 text-xs font-bold rounded-full ${
            type === 'For Sale' ? 'bg-navy-900 text-white' : 'bg-navy-700 text-white'
          }`}>
            {type}
          </span>
          {tag && (
            <span className={`px-2.5 py-1 text-xs font-bold rounded-full ${tagColors[tag] ?? 'bg-slate-600 text-white'}`}>
              {tag}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-bold text-slate-900 text-lg leading-tight">{title}</h3>
          <span className="text-gold-600 font-bold text-lg whitespace-nowrap">{price}</span>
        </div>

        <p className="text-slate-500 text-sm mb-4 flex items-center gap-1">
          <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          </svg>
          {address}
        </p>

        <div className="flex items-center gap-4 text-sm text-slate-600 border-t border-slate-100 pt-4">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            {beds} bd
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
            </svg>
            {baths} ba
          </span>
          <span className="flex items-center gap-1 ml-auto text-slate-500">
            {sqft} sqft
          </span>
        </div>

        <button className="mt-4 w-full py-2.5 bg-navy-900 hover:bg-navy-700 text-white text-sm font-semibold rounded-xl transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
}
