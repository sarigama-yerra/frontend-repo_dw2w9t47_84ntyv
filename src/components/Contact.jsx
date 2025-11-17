import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const backend = import.meta.env.VITE_BACKEND_URL || '';
      const res = await fetch(`${backend}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        }),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('Thanks! I will get back to you soon.');
      e.target.reset();
    } catch (err) {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold text-white tracking-tight">Contact</h2>
        <p className="mt-2 text-slate-300">Have a project or need a custom Tekla tool? Let’s talk.</p>

        <form onSubmit={onSubmit} className="mt-8 grid gap-4 max-w-xl">
          <input name="name" required placeholder="Your name" className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
          <input name="email" type="email" required placeholder="Email" className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
          <textarea name="message" required rows="5" placeholder="Tell me about your project" className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
          <button type="submit" className="inline-flex items-center rounded-md bg-gradient-to-r from-blue-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-blue-500/25 transition-shadow w-fit">Send Message</button>
          <p className="text-sm text-slate-300 h-5">{status}</p>
        </form>
      </div>
    </section>
  );
}
