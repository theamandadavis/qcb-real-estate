const testimonials = [
  {
    name: 'Sarah & Michael T.',
    role: 'First-Time Home Buyers',
    quote:
      "QCB Real Estate made buying our first home an absolute dream. Our agent was patient, knowledgeable, and always available to answer our questions. We couldn't have done it without them!",
    initials: 'SM',
  },
  {
    name: 'David R.',
    role: 'Property Investor',
    quote:
      "I've worked with several agencies over the years, and QCB is by far the most professional. They sold my rental property well above asking price in under two weeks. Phenomenal service.",
    initials: 'DR',
  },
  {
    name: 'Jennifer K.',
    role: 'Home Seller',
    quote:
      "The team at QCB handled everything from staging advice to negotiating with buyers. I felt supported the entire time and walked away very happy. I'll recommend them to everyone I know.",
    initials: 'JK',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-navy-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-2">
            What our clients say
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Client Testimonials</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                {/* Avatar placeholder */}
                <div className="w-11 h-11 rounded-full bg-gold-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-navy-900 font-bold text-xs">{t.initials}</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-slate-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
