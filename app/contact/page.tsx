import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact | QCB Global',
  description: 'Get in touch with QCB Global. We are here to help you maximize your property through elite STR management.',
};

const contactDetails = [
  {
    label: 'Email', value: 'joey-natasha@qcbglobal.com',
    icon: <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
  },
  {
    label: 'Phone', value: '(307) 620-0485\n(307) 395-9282',
    icon: <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
  },
  {
    label: 'Office Hours', value: 'Mon – Fri: 8AM – 6PM EST\nSat – Sun: 10AM – 4PM EST',
    icon: <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  },
  {
    label: 'Headquarters', value: '30 N Gould St., STE. R\nSheridan, WY 82891 USA\nOperating in 8+ Markets',
    icon: <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  },
];

export default function ContactPage() {
  return (
    <div className="pt-20">
      <div className="bg-slate-50 border-b border-slate-200 py-20 px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="h-px w-8 bg-gold-500" />
          <span className="text-gold-600 text-xs font-bold uppercase tracking-[0.25em]">Reach Out</span>
          <div className="h-px w-8 bg-gold-500" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Contact QCB Global</h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          Ready to transform your property? Our team is here to guide you every step of the way.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Get in Touch</h2>
            <div className="space-y-6 mb-10">
              {contactDetails.map((item) => (
                <div key={item.label} className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-amber-50 border border-gold-400/30 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">{item.label}</p>
                    <p className="text-slate-500 text-sm whitespace-pre-line mt-0.5">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="aspect-video w-full bg-slate-100 border border-slate-200 rounded-2xl flex flex-col items-center justify-center gap-3">
              <svg className="w-12 h-12 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <p className="text-slate-400 text-sm">Map Placeholder</p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Send a Message</h2>
            <p className="text-slate-500 text-sm mb-8">Fill out the form and we&apos;ll respond within one business day.</p>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
