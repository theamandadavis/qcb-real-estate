const pillars = [
  {
    letter: 'Q',
    title: 'Quality',
    tagline: 'The foundation of every experience we create.',
    description:
      'QCB Global is committed to luxury-level presentation, elite hospitality standards, and professional operational systems that deliver exceptional guest experiences at every touchpoint.',
    points: ['Stronger reviews', 'Higher revenue', 'Long-term trust', 'Brand loyalty'],
    closing: 'Every property reflects our commitment to excellence.',
  },
  {
    letter: 'C',
    title: 'Consistency',
    tagline: 'Consistency drives scalable success.',
    description:
      'QCB Global operates through structured systems, standardized operations, and proven hospitality procedures that allow us to maintain excellence across every market we serve.',
    points: ['Predictable guest satisfaction', 'Stable operational performance', 'Reliable owner experiences', 'Scalable growth across markets'],
    closing: 'Our systems are designed to maintain excellence at every level.',
  },
  {
    letter: 'B',
    title: 'Brilliance',
    tagline: 'Innovation, vision, and elevated execution.',
    description:
      'QCB Global focuses on strategic growth, revenue intelligence, and market leadership to redefine what modern short-term rental management can become.',
    points: ['Strategic growth', 'Revenue intelligence', 'Market leadership', 'Luxury hospitality innovation'],
    closing: 'Creating experiences and operations that outperform expectations.',
  },
];

export default function MissionSection() {
  return (
    <section className="bg-slate-900 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 bg-gold-500/60" />
            <span className="text-gold-400 text-xs font-bold uppercase tracking-[0.25em]">Our Philosophy</span>
            <div className="h-px w-8 bg-gold-500/60" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">The QCB Global Mission</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <div
              key={p.letter}
              className="relative bg-slate-800/60 border border-white/10 hover:border-gold-500/30 rounded-2xl p-8 overflow-hidden transition-all group"
            >
              {/* Large decorative letter */}
              <div className="absolute -top-4 -right-2 text-[160px] font-black text-gold-500/5 group-hover:text-gold-500/10 leading-none select-none transition-colors pointer-events-none">
                {p.letter}
              </div>

              <div className="relative z-10">
                <div className="w-12 h-12 bg-gold-500 rounded-xl flex items-center justify-center mb-5">
                  <span className="text-slate-900 font-black text-2xl">{p.letter}</span>
                </div>

                <p className="text-gold-400 text-xs font-bold uppercase tracking-widest mb-1">
                  {p.letter} — {p.title.toUpperCase()}
                </p>
                <p className="text-white font-bold text-xl mb-3">{p.tagline}</p>
                <p className="text-white/50 text-sm leading-relaxed mb-5">{p.description}</p>

                <ul className="space-y-2 mb-5">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2 text-sm text-white/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>

                <p className="text-white/25 text-xs italic border-t border-white/10 pt-4">{p.closing}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
