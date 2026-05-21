import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About QCB Global | Luxury STR Management',
  description: 'Learn about QCB Global — our mission, values, and commitment to luxury short-term rental excellence.',
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <div className="bg-slate-50 border-b border-slate-200 py-20 px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="h-px w-8 bg-gold-500" />
          <span className="text-gold-600 text-xs font-bold uppercase tracking-[0.25em]">Our Story</span>
          <div className="h-px w-8 bg-gold-500" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">About QCB Global</h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          Built on Quality, Consistency, and Brilliance — we exist to redefine luxury short-term rental management.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">
        <div>
          <p className="text-gold-600 text-xs font-bold uppercase tracking-widest mb-3">Our Mission</p>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Scaling Luxury Through Operational Precision</h2>
          <div className="space-y-4 text-slate-500 text-base leading-relaxed">
            <p>QCB Global was founded on a simple belief: every property has the potential to become a high-performing luxury hospitality asset. We exist to unlock that potential for investors, homeowners, and strategic partners across the United States.</p>
            <p>Our approach combines elite hospitality standards with data-driven revenue strategies and white-glove operational systems — delivering 5-star guest experiences while maximizing owner returns.</p>
            <p>We don&apos;t just manage properties. We transform them into premium hospitality brands that command higher rates, attract repeat guests, and scale sustainably across markets.</p>
          </div>
        </div>

        {/* Real photo */}
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
          <Image src="/images/consultation.jpg" alt="QCB Global team consultation" fill className="object-cover" sizes="(max-width: 896px) 100vw, 896px" />
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { letter: 'Q', title: 'Quality', desc: 'Luxury-level presentation and elite hospitality at every touchpoint.' },
            { letter: 'C', title: 'Consistency', desc: 'Structured systems and standardized operations that scale reliably.' },
            { letter: 'B', title: 'Brilliance', desc: 'Strategic growth and revenue intelligence that outperforms expectations.' },
          ].map((p) => (
            <div key={p.letter} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-gold-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-black text-xl">{p.letter}</span>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{p.title}</h3>
              <p className="text-slate-500 text-sm">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/partner" className="inline-flex px-8 py-4 bg-gold-500 hover:bg-gold-400 text-white font-bold text-base rounded-xl transition-colors shadow-md shadow-gold-500/20">
            Partner With QCB Global
          </Link>
        </div>
      </div>
    </div>
  );
}
