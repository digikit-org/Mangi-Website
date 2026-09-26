import React, { useState } from 'react';
import { Phone, Mail, Send, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { siteConfig } from '../data/siteData';

export default function ContactSection() {
  const { contactSection } = siteConfig;
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    location: '',
    area: '',
    projectType: 'Corporate & Office Interiors',
    details: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch (err) {}

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        company: '',
        location: '',
        area: '',
        projectType: 'Corporate & Office Interiors',
        details: '',
      });
    }, 4000);
  };

  return (
    <section id="contact" className="w-full py-10 sm:py-14 bg-[#fdfbf7] border-t border-[#eae3d5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Contact & Intro from Google Doc */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#8c6d3b] block mb-3">
                {contactSection.badge}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#141413] tracking-tight mb-4">
                {contactSection.title}
              </h2>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed whitespace-pre-line">
                {contactSection.subtext}
              </p>
            </div>

            {/* Direct Contact Cards from Google Doc */}
            <div className="bg-white rounded-2xl p-6 border border-[#e8ded0] space-y-4 shadow-sm">
              <h3 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#8c6d3b]">
                Prefer to Talk Directly?
              </h3>

              <div className="space-y-3">
                <a
                  href={`tel:${contactSection.directCall.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-stone-50 hover:bg-[#faf6ee] text-stone-800 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-white border border-stone-200 flex items-center justify-center text-[#8c6d3b]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-500 uppercase font-bold block">Direct Call</span>
                    <strong className="text-sm">{contactSection.directCall}</strong>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${contactSection.directWhatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-emerald-50/60 hover:bg-emerald-50 text-stone-800 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-white border border-emerald-200 flex items-center justify-center text-emerald-600">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] text-emerald-700 uppercase font-bold block">WhatsApp Instant</span>
                    <strong className="text-sm">{contactSection.directWhatsapp}</strong>
                  </div>
                </a>

                <a
                  href={`mailto:${contactSection.directEmail}`}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-stone-50 hover:bg-[#faf6ee] text-stone-800 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-white border border-stone-200 flex items-center justify-center text-[#8c6d3b]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-500 uppercase font-bold block">Corporate Inquiries</span>
                    <strong className="text-xs sm:text-sm break-all">{contactSection.directEmail}</strong>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Google Doc Full Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#e8ded0] shadow-md">
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#141413] mb-2">
                {contactSection.formTitle}
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 mb-6">
                Fill out the form below. Our commercial project team will review and get in touch within 24 hours.
              </p>

              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center justify-center">
                  <CheckCircle2 className="w-16 h-16 text-emerald-600 mb-3 animate-bounce" />
                  <h4 className="font-serif text-2xl font-semibold text-[#141413] mb-1">
                    Inquiry Successfully Received
                  </h4>
                  <p className="text-sm text-stone-600 max-w-md">
                    Thank you! Our lead architectural project manager will contact you shortly to schedule your free consultation.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3.5 py-2.5 text-sm text-stone-900 focus:outline-none focus:border-[#8c6d3b] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 80881 96750"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3.5 py-2.5 text-sm text-stone-900 focus:outline-none focus:border-[#8c6d3b] focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3.5 py-2.5 text-sm text-stone-900 focus:outline-none focus:border-[#8c6d3b] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="Business / Organization name"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3.5 py-2.5 text-sm text-stone-900 focus:outline-none focus:border-[#8c6d3b] focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                        Project Location
                      </label>
                      <input
                        type="text"
                        placeholder="City, Area (e.g. Bengaluru, Whitefield)"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3.5 py-2.5 text-sm text-stone-900 focus:outline-none focus:border-[#8c6d3b] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                        Approx. Area (Sq.Ft)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 15,000 sq.ft"
                        value={formData.area}
                        onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                        className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3.5 py-2.5 text-sm text-stone-900 focus:outline-none focus:border-[#8c6d3b] focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                      Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3.5 py-2.5 text-sm text-stone-900 focus:outline-none focus:border-[#8c6d3b] focus:bg-white"
                    >
                      <option value="Corporate & Office Interiors">Corporate & Office Interiors</option>
                      <option value="Retail Interiors">Retail Interiors</option>
                      <option value="Hospitality Interiors">Hospitality Interiors</option>
                      <option value="Healthcare Interiors">Healthcare Interiors</option>
                      <option value="Commercial Interiors">Commercial Interiors</option>
                      <option value="Turnkey Interior Solutions">Turnkey Interior Solutions</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                      Tell Us About Your Project
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Brief details regarding space requirements, timeline, or current shell status..."
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3.5 py-2.5 text-sm text-stone-900 focus:outline-none focus:border-[#8c6d3b] focus:bg-white"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full gold-btn py-3.5 rounded-lg font-semibold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                    >
                      <span>{contactSection.submitText}</span>
                      <Send className="w-4 h-4" />
                    </button>
                    <p className="text-[11px] text-stone-400 text-center mt-2.5">
                      No spam. No obligations. Just straightforward expert interior advice.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
