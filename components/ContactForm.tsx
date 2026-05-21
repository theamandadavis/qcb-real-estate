'use client';

import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}

const initialForm: FormData = { name: '', email: '', phone: '', interest: '', message: '' };

const interestOptions = [
  'Airbnb Management', 'Rental Arbitrage', 'Property Optimization',
  'Dynamic Pricing', 'Investor Partnership', 'Revenue Projections', 'General Inquiry',
];

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? 'Something went wrong.');
      setStatus('success');
      setForm(initialForm);
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Failed to send. Please try again.');
    }
  }

  const inputClass =
    'w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 transition';

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
        <div className="w-16 h-16 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-slate-900">Message Sent</h3>
        <p className="text-slate-500 max-w-xs">Thank you for reaching out to QCB Global. We will be in touch within one business day.</p>
        <button onClick={() => setStatus('idle')} className="mt-2 text-sm text-gold-600 font-semibold hover:text-gold-500 transition-colors">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            Full Name <span className="text-gold-500">*</span>
          </label>
          <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Jane Smith" className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            Email <span className="text-gold-500">*</span>
          </label>
          <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="jane@example.com" className={inputClass} />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Phone</label>
          <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="(555) 000-0000" className={inputClass} />
        </div>
        <div>
          <label htmlFor="interest" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            I&apos;m Interested In <span className="text-gold-500">*</span>
          </label>
          <select id="interest" name="interest" required value={form.interest} onChange={handleChange} className={`${inputClass} bg-slate-50`}>
            <option value="" disabled>Select an option</option>
            {interestOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
          Message <span className="text-gold-500">*</span>
        </label>
        <textarea id="message" name="message" required rows={5} value={form.message} onChange={handleChange} placeholder="Tell us about your property or inquiry…" className={`${inputClass} resize-none`} />
      </div>
      {status === 'error' && (
        <div className="flex items-start gap-2 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
          <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          {errorMsg}
        </div>
      )}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-4 bg-gold-500 hover:bg-gold-400 disabled:opacity-60 text-white font-bold text-sm rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md shadow-gold-500/20"
      >
        {status === 'loading' ? (
          <><svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Sending…</>
        ) : 'Send Message'}
      </button>
      <p className="text-center text-xs text-slate-400">We typically respond within one business day.</p>
    </form>
  );
}
