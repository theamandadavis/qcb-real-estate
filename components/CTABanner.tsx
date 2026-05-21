import Link from 'next/link';

export default function CTABanner() {
  return (
    <section className="bg-gold-500 py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
          Ready to Find Your Dream Home?
        </h2>
        <p className="text-navy-800 text-lg mb-10 max-w-2xl mx-auto">
          Whether you&apos;re buying, selling, or just exploring your options — our experts are ready to guide you.
          Reach out today for a free, no-obligation consultation.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 bg-navy-900 hover:bg-navy-700 text-white font-bold text-base rounded-xl transition-colors shadow-lg"
          >
            Contact Us Today
          </Link>
          <Link
            href="/listings"
            className="w-full sm:w-auto px-8 py-4 bg-white/30 hover:bg-white/50 text-navy-900 font-bold text-base rounded-xl border border-navy-900/20 transition-colors"
          >
            Browse Listings
          </Link>
        </div>
      </div>
    </section>
  );
}
