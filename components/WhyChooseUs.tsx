const features = [
  {
    icon: (
      <svg className="w-7 h-7 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Proven Track Record',
    description: 'Over 500 successful transactions and 15+ years of experience give you confidence every step of the way.',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Expert Local Agents',
    description: 'Our 50+ licensed agents bring deep neighborhood knowledge and personalized attention to every client.',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Transparent Process',
    description: 'No hidden fees, no surprises. We walk you through every document so you always know exactly where you stand.',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Fast & Efficient',
    description: 'From listing to closing, we streamline the process so your transaction moves quickly without cutting corners.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-2">
            Why work with us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            The QCB Difference
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="group p-6 rounded-2xl border border-slate-100 hover:border-gold-500/30 hover:shadow-md transition-all">
              <div className="w-14 h-14 bg-navy-900 rounded-xl flex items-center justify-center mb-5 group-hover:bg-navy-700 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-slate-900 font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
