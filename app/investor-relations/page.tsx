import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Investor Relations | QCB Global',
  description: 'Explore investment opportunities with QCB Global. Passive income, STR market expansion, and scalable long-term hospitality investments.',
};

const opportunities = [
  {
    title: 'Passive Income Portfolio',
    description: 'Partner with QCB Global to generate hands-off STR revenue from your existing property or new acquisitions we identify together.',
    points: ['Professional management included', 'Monthly revenue reporting', 'Dynamic pricing optimization', 'White-glove operational support'],
  },
  {
    title: 'STR Market Expansion',
    description: 'Leverage QCB Global\'s market intelligence and operational infrastructure to scale into high-demand STR destinations.',
    points: ['Market analysis and site selection', 'Property acquisition guidance', 'Rapid operational deployment', 'Multi-market scalability'],
  },
  {
    title: 'Strategic Co-Investment',
    description: 'Join QCB Global as a co-investment partner in curated luxury STR properties identified through our proprietary market research.',
    points: ['Deal-by-deal investment structure', 'QCB Global co-invests alongside partners', 'Transparent performance reporting', 'Exit strategy planning'],
  },
];

export default function InvestorRelationsPage() {
  return (
    <div className="pt-20">
      <div className="bg-slate-50 border-b border-slate-200 py-20 px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="h-px w-8 bg-gold-500" />
          <span className="text-gold-600 text-xs font-bold uppercase tracking-[0.25em]">Investment Opportunities</span>
          <div className="h-px w-8 bg-gold-500" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Investor Relations</h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          Strategic partners seeking passive income, STR market expansion, portfolio scaling, and long-term hospitality investments.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Hero image */}
        <div className="relative aspect-[21/6] w-full rounded-2xl overflow-hidden mb-14 border border-slate-200 shadow-sm">
          <Image src="/images/interior-living.jpg" alt="Luxury property investment" fill className="object-cover object-center" sizes="100vw" />
          <div className="absolute inset-0 bg-slate-900/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white text-2xl md:text-3xl font-bold text-center px-6">Build a Scalable Luxury STR Portfolio</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {opportunities.map((opp) => (
            <div key={opp.title} className="bg-white border border-slate-200 hover:border-gold-400/50 hover:shadow-md rounded-2xl p-8 transition-all">
              <h3 className="text-slate-900 font-bold text-xl mb-3">{opp.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">{opp.description}</p>
              <ul className="space-y-2">
                {opp.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-2 text-sm text-slate-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-amber-50 border border-gold-400/30 rounded-2xl p-10 text-center">
          <p className="text-gold-600 text-xs font-bold uppercase tracking-widest mb-3">Get In Touch</p>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Interested in Partnering With QCB Global?</h2>
          <p className="text-slate-500 mb-8 max-w-lg mx-auto text-sm">
            Reach out to explore how QCB Global can help you build and scale a high-performing luxury STR portfolio.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="px-8 py-3.5 bg-gold-500 hover:bg-gold-400 text-white font-bold text-sm rounded-xl transition-colors">Contact Our Team</Link>
            <Link href="/revenue-projections" className="px-8 py-3.5 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm rounded-xl border border-slate-200 transition-colors">Get Revenue Projections</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
