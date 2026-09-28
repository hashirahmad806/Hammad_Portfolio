import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectScope: 'Full-Stack Web App',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const directEmail = 'hammad.dev.eng@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(directEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div>
      {/* Quick Direct Email Copy Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-surface-subtle/80 border border-white/[0.06] mb-8">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-mono text-xs text-content-secondary">Direct Channel:</span>
          <span className="font-mono text-xs text-content-primary font-semibold">{directEmail}</span>
        </div>
        <button
          onClick={handleCopyEmail}
          className="px-3.5 py-1.5 rounded-full font-mono text-[11px] uppercase tracking-wider bg-white/[0.06] hover:bg-white/[0.12] text-content-primary transition-all flex items-center gap-2 border border-white/10"
        >
          {copied ? (
            <>
              <span className="text-emerald-400">✓</span>
              <span>Copied to Clipboard!</span>
            </>
          ) : (
            <>
              <span>Copy Email</span>
              <span className="text-accent-electric">⧉</span>
            </>
          )}
        </button>
      </div>

      {submitted ? (
        <div className="p-8 rounded-2xl bg-surface-subtle/50 border border-emerald-500/30 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto text-xl font-bold">
            ✓
          </div>
          <h4 className="font-display font-bold text-xl text-content-primary">
            Transmission Received
          </h4>
          <p className="text-xs font-sans text-content-secondary max-w-sm mx-auto font-light">
            Thank you for reaching out. I typically review incoming architectural inquiries within 12–24 hours.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-4 px-4 py-2 rounded-full font-mono text-xs uppercase text-accent-electric hover:underline"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-[11px] font-mono uppercase tracking-wider text-content-secondary mb-1.5">
                Your Name / Organization
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Elena Rostova"
                className="w-full px-4 py-3 rounded-xl bg-void border border-white/[0.08] text-content-primary placeholder-content-tertiary text-sm focus:outline-none focus:border-accent-electric transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-[11px] font-mono uppercase tracking-wider text-content-secondary mb-1.5">
                Work Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="elena@company.io"
                className="w-full px-4 py-3 rounded-xl bg-void border border-white/[0.08] text-content-primary placeholder-content-tertiary text-sm focus:outline-none focus:border-accent-electric transition-colors"
              />
            </div>
          </div>

          <div>
            <label htmlFor="scope" className="block text-[11px] font-mono uppercase tracking-wider text-content-secondary mb-1.5">
              Project Domain / Scope
            </label>
            <select
              id="scope"
              value={formData.projectScope}
              onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-void border border-white/[0.08] text-content-primary text-sm focus:outline-none focus:border-accent-electric transition-colors"
            >
              <option value="Full-Stack Web App">Full-Stack Web Application (MERN / Astro / Next)</option>
              <option value="AI / LLM Agent Workflow">AI / LLM Multi-Agent System (LangChain / PyTorch)</option>
              <option value="Real-Time Telemetry Platform">Real-Time Telemetry / WebSocket Dashboard</option>
              <option value="Full-Time Engineering Role">Full-Time Engineering Role Inquiry</option>
              <option value="Other Technical Advisory">Other Technical Architecture & Advisory</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-[11px] font-mono uppercase tracking-wider text-content-secondary mb-1.5">
              Project Brief / Specifications
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell me about the problem you are solving, performance expectations, and timeline..."
              className="w-full px-4 py-3 rounded-xl bg-void border border-white/[0.08] text-content-primary placeholder-content-tertiary text-sm focus:outline-none focus:border-accent-electric transition-colors resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full group pl-6 pr-2 py-2.5 rounded-full font-mono text-xs uppercase tracking-[0.15em] font-medium bg-content-primary text-void hover:bg-white transition-all flex items-center justify-between shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_25px_rgba(99,102,241,0.3)]"
          >
            <span>Transmit Inquiry</span>
            <span className="btn-nested-icon bg-void/10 text-void group-hover:bg-void/20">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </span>
          </button>
        </form>
      )}
    </div>
  );
}
