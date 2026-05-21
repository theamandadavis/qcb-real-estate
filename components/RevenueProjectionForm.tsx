'use client';

import { useState } from 'react';

interface FormData {
  address: string; bedrooms: string; bathrooms: string; market: string;
  currentUsage: string; revenueGoal: string; email: string; phone: string;
}

const initial: FormData = { address: '', bedrooms: '', bathrooms: '', market: '', currentUsage: '', revenueGoal: '', email: '', phone: '' };
const bedroomOptions = ['1', '2', '3', '4', '5', '6', '7', '8+'];
const bathroomOptions = ['1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5+'];
const usageOptions = ['Personal Use Only', 'Long-Term Rental', 'Currently Listed as STR', 'Vacant / Not in Use', 'Recently Purchased'];
type Status = 'idle' | 'loading' | 'success' | 'error';

export default function RevenueProjectionForm() {
  const [form, setForm] = useState<FormData>(initial);
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
      const res = await fetch('/api/revenue-projection', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? 'Something went wrong.');
      setStatus('success');
      setForm(initial);
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Failed to submit. Please try again.');
    }
  }

  const inputClass =
    'w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 transition';

  if (status === 'success') {
    return (
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-10 text-center">
        <div className="w-16 h-16 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-3">Request Received</h3>
        <p className="text-slate-500 max-w-sm mx-auto mb-6">
          Our team is reviewing your property details. You&apos;ll receive a comprehensive revenue analysis within one business day.
        </p>
        <button onClick={() => setStatus('idle')} className="text-gold-600 text-sm font-semibold hover:text-gold-500 transition-colors underline underline-offset-4">
          Submit another property
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8 space-y-5">
      <div>
        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
          Property Address <span className="text-gold-500">*</span>
        </label>
        <input name="address" type="text" required value={form.address} onChange={handleChange} placeholder="123 Example St, Las Vegas, NV 89101" className={inputClass} />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            Bedrooms <span className="text-gold-500">*</span>
          </label>
          <select name="bedrooms" required value={form.bedrooms} onChange={handleChange} className={`${inputClass} bg-slate-50`}>
            <option value="" disabled>Select</option>
            {bedroomOptions.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            Bathrooms <span className="text-gold-500">*</span>
          </label>
          <select name="bathrooms" required value={form.bathrooms} onChange={handleChange} className={`${inputClass} bg-slate-50`}>
            <option value="" disabled>Select</option>
            {bathroomOptions.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            Market Location <span className="text-gold-500">*</span>
          </label>
          <input name="market" type="text" required value={form.market} onChange={handleChange} placeholder="Las Vegas, NV" className={inputClass} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            Current Usage <span className="text-gold-500">*</span>
          </label>
          <select name="currentUsage" required value={form.currentUsage} onChange={handleChange} className={`${inputClass} bg-slate-50`}>
            <option value="" disabled>Select</option>
            {usageOptions.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
          Monthly Revenue Goal <span className="text-gold-500">*</span>
        </label>
        <input name="revenueGoal" type="text" required value={form.revenueGoal} onChange={handleChange} placeholder="e.g. $5,000/month" className={inputClass} />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            Email Address <span className="text-gold-500">*</span>
          </label>
          <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@example.com" className={inputClass} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Phone Number</label>
          <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="(555) 000-0000" className={inputClass} />
        </div>
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
          <><svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Submitting…</>
        ) : 'Request Revenue Projection'}
      </button>
      <p className="text-center text-xs text-slate-400">Free analysis delivered within one business day. No obligation.</p>
    </form>
  );
}
