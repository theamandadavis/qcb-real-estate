import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section className="bg-gold-500 py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Transform Your Property Into A
          <br />
          High-Performing Luxury
          <br />
          Hospitality Asset
        </h2>

        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-12">
          Whether you&apos;re an investor seeking passive income, a homeowner ready to maximize your property, or a
          strategic partner looking to scale — QCB Global is your elite hospitality operator.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 font-bold text-base rounded-xl transition-colors shadow-lg"
          >
            Schedule Consultation
          </Link>
          <Link
            href="/revenue-projections"
            className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold text-base rounded-xl transition-colors"
          >
            Get Revenue Projection
          </Link>
          <Link
            href="/partner"
            className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/10 text-white font-semibold text-base rounded-xl border-2 border-white/40 hover:border-white/60 transition-colors"
          >
            Partner With QCB Global
          </Link>
        </div>
      </div>
    </section>
  );
}
