const markets = [
  'Las Vegas, NV', 'Orlando, FL', 'Charleston, SC', 'Myrtle Beach, SC',
  'Charlotte, NC', 'Gatlinburg, TN', 'Nashville, TN', 'Palmas Del Mar, PR',
];

const occupancyPoints = [
  'Dynamic pricing technology',
  'Seasonal demand analysis',
  'Market trend forecasting',
  'Guest behavior optimization',
];

const revenueStrategies = [
  'Professional staging',
  'High-conversion listing photography',
  'SEO listing optimization',
  'Automated guest experience systems',
  'Multi-platform exposure',
];

const ratingPillars = [
  'Fast communication',
  'Hotel-quality cleanliness',
  'Luxury presentation',
  'Seamless check-in',
  'Premium guest experiences',
];

export default function PerformanceSection() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 bg-gold-500" />
            <span className="text-gold-600 text-xs font-bold uppercase tracking-[0.25em]">Performance</span>
            <div className="h-px w-8 bg-gold-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Proven Hospitality Performance</h2>
        </div>

        {/* Three pillars */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              value: '75–90%',
              label: 'Occupancy Rates',
              desc: 'Optimized using dynamic pricing and market intelligence.',
              points: occupancyPoints,
              icon: (
                <svg className="w-6 h-6 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              ),
            },
            {
              value: 'Premium',
              label: 'Revenue Growth',
              desc: 'Focused on premium guest positioning and luxury amenity optimization.',
              points: revenueStrategies,
              icon: (
                <svg className="w-6 h-6 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              ),
            },
            {
              value: '5-Star',
              label: 'Guest Ratings',
              desc: 'Guest satisfaction drives long-term growth and repeat bookings.',
              points: ratingPillars,
              icon: (
                <svg className="w-6 h-6 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ),
            },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white border border-slate-200 rounded-2xl p-8 hover:border-gold-400/50 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-amber-50 border border-gold-400/30 rounded-xl flex items-center justify-center mb-5">
                {item.icon}
              </div>
              <div className="text-4xl font-bold text-gold-600 mb-1">{item.value}</div>
              <h3 className="text-slate-900 font-bold text-lg mb-3">{item.label}</h3>
              <p className="text-slate-500 text-sm mb-5 leading-relaxed">{item.desc}</p>
              <ul className="space-y-2">
                {item.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-sm text-slate-500">
                    <span className="text-gold-500 mt-0.5 font-bold">—</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Markets */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8">
            <div className="lg:w-60 flex-shrink-0">
              <p className="text-gold-600 text-xs font-bold uppercase tracking-widest mb-2">Where We Operate</p>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Markets Served</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Luxury vacation destinations, high-tourism cities, and emerging STR growth regions across the U.S.
              </p>
            </div>
            <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {markets.map((city) => (
                <div
                  key={city}
                  className="bg-slate-50 border border-slate-200 hover:border-gold-400/50 hover:bg-amber-50 rounded-xl px-4 py-3 text-sm text-slate-600 hover:text-gold-700 transition-colors text-center font-medium"
                >
                  {city}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
