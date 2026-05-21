import type { Metadata } from 'next';
import Link from 'next/link';
import PropertyShowcase from '@/components/PropertyShowcase';

export const metadata: Metadata = {
  title: 'Luxury Portfolio | QCB Global',
  description: 'Browse the QCB Global luxury property portfolio — pool homes, modern interiors, luxury cabins, and city penthouses.',
};

export default function PortfolioPage() {
  return (
    <div className="pt-20">
      <div className="bg-slate-50 border-b border-slate-200 py-20 px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="h-px w-8 bg-gold-500" />
          <span className="text-gold-600 text-xs font-bold uppercase tracking-[0.25em]">Premium Properties</span>
          <div className="h-px w-8 bg-gold-500" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Luxury Portfolio</h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          Each QCB Global property is positioned as a luxury hospitality asset — not just another short-term rental.
        </p>
      </div>

      <PropertyShowcase />

      <div className="bg-white border-t border-slate-100 py-16 text-center">
        <Link href="/partner" className="inline-flex px-8 py-3.5 bg-gold-500 hover:bg-gold-400 text-white font-bold text-sm rounded-xl transition-colors">
          List Your Property With QCB Global
        </Link>
      </div>
    </div>
  );
}
