import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import OwnerLeadForm from '@/components/OwnerLeadForm';

export const metadata: Metadata = {
  title: 'Partner With QCB Global | STR Management',
  description: 'Partner with QCB Global for elite STR management. Elite hospitality standards, revenue optimization, and operational precision.',
};

const reasons = [
  { number: '01', title: 'Elite Hospitality Standards', points: ['Higher nightly rates', 'Repeat bookings', 'Stronger reviews', 'Increased occupancy'] },
  { number: '02', title: 'Revenue Optimization Systems', points: ['Occupancy maximization', 'ADR improvement', 'Seasonal pricing', 'Long-term scalability'] },
  { number: '03', title: 'Operational Precision', points: ['Guest communication', 'Cleaning coordination', 'Maintenance management', '24/7 support'] },
  { number: '04', title: 'Brand-Level Presentation', points: ['Luxury hospitality positioning', 'Higher booking conversions', 'Guest satisfaction', 'Property value perception'] },
  { number: '05', title: 'Scalable Growth Strategy', points: ['Sustainable expansion', 'Low operational friction', 'Market analysis', 'Strategic acquisition opportunities'] },
];

export default function PartnerPage() {
  return (
    <div className="pt-20">
      {/* Hero with image */}
      <div className="relative h-64 md:h-80">
        <Image src="/images/partnership.jpg" alt="Partner with QCB Global" fill className="object-cover object-top" sizes="100vw" priority />
        <div className="absolute inset-0 bg-slate-900/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-gold-400" />
            <span className="text-gold-400 text-xs font-bold uppercase tracking-[0.25em]">Strategic Partnership</span>
            <div className="h-px w-8 bg-gold-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Partner With QCB Global</h1>
          <p className="text-white/70 text-lg max-w-xl">Owners stay hands-off with our white-glove service while their revenues scale.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
          {reasons.map((r) => (
            <div key={r.number} className="bg-white border border-slate-200 hover:border-gold-400/50 hover:shadow-md rounded-2xl p-7 transition-all">
              <span className="text-slate-200 text-4xl font-black">{r.number}</span>
              <h3 className="text-slate-900 font-bold text-lg mt-2 mb-4">{r.title}</h3>
              <ul className="space-y-2">
                {r.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-2 text-sm text-slate-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="bg-amber-50 border border-gold-400/40 rounded-2xl p-7 flex flex-col justify-between">
            <div>
              <p className="text-gold-600 text-xs font-bold uppercase tracking-widest mb-3">First Step</p>
              <h3 className="text-slate-900 font-bold text-lg mb-3">Get Revenue Projections</h3>
              <p className="text-slate-500 text-sm mb-6">See what your property could earn with a free, no-obligation analysis.</p>
            </div>
            <Link href="/revenue-projections" className="block text-center py-3 bg-gold-500 hover:bg-gold-400 text-white font-bold text-sm rounded-xl transition-colors">
              Get Free Projection
            </Link>
          </div>
        </div>

        <OwnerLeadForm />
      </div>
    </div>
  );
}
