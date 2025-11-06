import React, { useState } from 'react';

const EmailCapture = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      return;
    }
    setStatus('success');
  };

  return (
    <section className="w-full px-6 md:px-10 -mt-6 md:-mt-10">
      <div className="mx-auto max-w-2xl bg-white/80 backdrop-blur rounded-xl border border-stone-200 shadow-sm p-4 md:p-6">
        <form onSubmit={onSubmit} className="flex flex-col md:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 rounded-lg border border-stone-300 bg-white/70 px-4 py-3 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-400/30"
            aria-label="Email address"
            required
          />
          <button
            type="submit"
            className="rounded-lg bg-stone-900 text-white px-6 py-3 font-medium tracking-wide hover:bg-stone-800 transition-colors"
          >
            Notify Me
          </button>
        </form>
        <div className="mt-2 min-h-[1.25rem] text-sm">
          {status === 'success' && (
            <p className="text-emerald-600">Thanks — you'll be the first to know.</p>
          )}
          {status === 'error' && (
            <p className="text-rose-600">Please enter a valid email address.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default EmailCapture;
