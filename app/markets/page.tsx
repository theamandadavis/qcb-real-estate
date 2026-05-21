import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Markets Served | QCB Global',
  description: 'QCB Global operates in luxury vacation destinations, high-tourism cities, and emerging STR growth regions across the United States.',
};

const markets = [
  { city: 'Las Vegas', state: 'NV', type: 'Entertainment / Event-Driven', description: 'High-demand gaming, entertainment, and convention destination with strong year-round occupancy.' },
  { city: 'Orlando', state: 'FL', type: 'Luxury Vacation Destination', description: 'World-class theme parks and resort culture drive consistent family and leisure travel demand.' },
  { city: 'Charleston', state: 'SC', type: 'High-Tourism City', description: 'Historic charm, culinary scene, and coastal appeal attract premium short-term rental guests.' },
  { city: 'Myrtle Beach', state: 'SC', type: 'Coastal Vacation Market', description: 'Peak-season coastal demand with strong golf, beach, and family vacation traffic.' },
  { city: 'Charlotte', state: 'NC', type: 'Business Travel Market', description: 'Growing financial and corporate hub with consistent business traveler and event demand.' },
  { city: 'Gatlinburg', state: 'TN', type: 'Mountain Vacation Destination', description: 'Year-round mountain tourism with high cabin and luxury nature retreat demand.' },
  { city: 'Nashville', state: 'TN', type: 'Entertainment / Event-Driven', description: 'Music city bachelorette and event tourism drives premium nightly rates and strong occupancy.' },
  { city: 'Palmas Del Mar', state: 'PR', type: 'Emerging STR Growth Region', description: 'Tropical luxury resort community with growing high-net-worth traveler demand.' },
];

export default function MarketsPage() {
  return (
    <div className="pt-20">
      <div className="bg-slate-50 border-b border-slate-200 py-20 px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="h-px w-8 bg-gold-500" />
          <span className="text-gold-600 text-xs font-bold uppercase tracking-[0.25em]">Where We Operate</span>
          <div className="h-px w-8 bg-gold-500" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Markets Served</h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          Luxury vacation destinations, high-tourism cities, business travel markets, and emerging STR growth regions across the United States.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {markets.map((m) => (
            <div key={`${m.city}-${m.state}`} className="bg-white border border-slate-200 hover:border-gold-400/50 hover:shadow-md rounded-2xl p-6 transition-all">
              <h3 className="text-slate-900 font-bold text-lg">{m.city}</h3>
              <p className="text-gold-600 text-sm font-semibold mb-2">{m.state}</p>
              <p className="text-slate-400 text-xs uppercase tracking-wider mb-3 border-b border-slate-100 pb-3">{m.type}</p>
              <p className="text-slate-500 text-sm leading-relaxed">{m.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center bg-amber-50 border border-gold-400/30 rounded-2xl p-10">
          <p className="text-gold-600 text-xs font-bold uppercase tracking-widest mb-3">Expanding</p>
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Don&apos;t See Your Market?</h2>
          <p className="text-slate-500 mb-6 max-w-lg mx-auto text-sm">QCB Global is continuously expanding into new high-opportunity STR markets. Contact us to discuss your market.</p>
          <Link href="/contact" className="inline-flex px-8 py-3.5 bg-gold-500 hover:bg-gold-400 text-white font-bold text-sm rounded-xl transition-colors">
            Contact Our Team
          </Link>
        </div>
      </div>
    </div>
  );
}
