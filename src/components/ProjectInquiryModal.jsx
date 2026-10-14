import React, { useState } from "react";
import { X, Send, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";
import { siteConfig } from "../data/siteData";

export default function ProjectInquiryModal({
  isOpen,
  onClose,
  initialContext = "",
}) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    location: "",
    area: "",
    projectType: "Corporate & Office Interiors",
    details: "",
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
      });
    } catch (err) {}

    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3200);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#2e2721]/50 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-[#e8ded0] overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header — Light Beige Theme */}
        <div className="bg-[#f5efe6] border-b border-[#e7e0d4] px-6 py-5 text-[#2e2721] flex items-center justify-between shrink-0">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#8c6d3b] block">
              Mangi Interiors — Consultation
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-semibold">
              Let's Discuss Your Project
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#fdfbf7] hover:bg-[#ede5d6] border border-[#e5dcd0] flex items-center justify-center text-[#2e2721] transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form
          action={
            "https://mail.digikit.in/forms/mangi/website/consultation.php"
          }
          method="POST"
          className="p-6 sm:p-8 space-y-4 overflow-y-auto"
        >
          {initialContext && (
            <div className="bg-[#fcf8f0] border border-[#e8ded0] rounded-lg px-3 py-2 text-xs text-[#8c6d3b]">
              Inquiry Context: <strong>{initialContext}</strong>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#4a4036] mb-1">
                Name *
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                minLength={2}
                maxLength={60}
                autoComplete="name"
                placeholder="Your full name"
                className="w-full bg-[#faf8f5] border border-[#e5dcd0] rounded-lg px-3.5 py-2.5 text-sm text-[#2e2721] focus:outline-none focus:border-[#8c6d3b] focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#4a4036] mb-1">
                Phone / WhatsApp *
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                required
                maxLength={17}
                autoComplete="tel"
                placeholder="+91 80881 96750"
                className="w-full bg-[#faf8f5] border border-[#e5dcd0] rounded-lg px-3.5 py-2.5 text-sm text-[#2e2721] focus:outline-none focus:border-[#8c6d3b] focus:bg-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#4a4036] mb-1">
                Email Address *
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                maxLength={254}
                autoComplete="email"
                placeholder="you@company.com"
                className="w-full bg-[#faf8f5] border border-[#e5dcd0] rounded-lg px-3.5 py-2.5 text-sm text-[#2e2721] focus:outline-none focus:border-[#8c6d3b] focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#4a4036] mb-1">
                Company Name
              </label>
              <input
                id="contact-company"
                name="company"
                type="text"
                required
                minLength={2}
                maxLength={100}
                autoComplete="organization"
                placeholder="Business / Organization"
                className="w-full bg-[#faf8f5] border border-[#e5dcd0] rounded-lg px-3.5 py-2.5 text-sm text-[#2e2721] focus:outline-none focus:border-[#8c6d3b] focus:bg-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#4a4036] mb-1">
                Project Location
              </label>
              <input
                id="contact-location"
                name="location"
                type="text"
                required
                minLength={3}
                maxLength={100}
                autoComplete="address-level2"
                placeholder="City, Area (e.g. Bengaluru, Whitefield)"
                className="w-full bg-[#faf8f5] border border-[#e5dcd0] rounded-lg px-3.5 py-2.5 text-sm text-[#2e2721] focus:outline-none focus:border-[#8c6d3b] focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#4a4036] mb-1">
                Approx. Area
              </label>
              <input
                id="contact-area"
                name="area"
                type="text"
                required
                maxLength={30}
                placeholder="e.g. 15,000 sq.ft"
                className="w-full bg-[#faf8f5] border border-[#e5dcd0] rounded-lg px-3.5 py-2.5 text-sm text-[#2e2721] focus:outline-none focus:border-[#8c6d3b] focus:bg-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#4a4036] mb-1">
              Project Type
            </label>
            <select
              id="contact-project"
              name="project"
              required
              defaultValue=""
              className="w-full bg-[#faf8f5] border border-[#e5dcd0] rounded-lg px-3.5 py-2.5 text-sm text-[#2e2721] focus:outline-none focus:border-[#8c6d3b] focus:bg-white"
            >
              <option value="" disabled>
                Select Project Type
              </option>
              <option value="Corporate & Office Interiors">
                Workplaces & Office Interiors
              </option>
              <option value="Healthcare Interiors">Healthcare Interiors</option>
              <option value="Hospitality Interiors">
                Hospitality Interiors
              </option>
              <option value="Retail Interiors">Retail Interiors</option>
              <option value="Commercial Interiors">Commercial Interiors</option>
              <option value="Turnkey Interior Solutions">
                Turnkey Interior Solutions
              </option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#4a4036] mb-1">
              Tell Us About Your Project
            </label>
            <textarea
              id="contact-details"
              name="details"
              rows={3}
              required
              minLength={10}
              maxLength={1000}
              placeholder="Brief details regarding space requirements, timeline, or current shell status..."
              className="w-full bg-[#faf8f5] border border-[#e5dcd0] rounded-lg px-3.5 py-2.5 text-sm text-[#2e2721] focus:outline-none focus:border-[#8c6d3b] focus:bg-white"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full gold-btn py-3.5 rounded-lg font-semibold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <span>Submit & Get a Free Consultation</span>
              <Send className="w-4 h-4" />
            </button>
            <p className="text-[11px] text-[#8c8275] text-center mt-2">
              Direct:{" "}
              <a
                href="tel:+918088196750"
                className="text-[#3a322a] font-semibold underline"
              >
                +91 80881 96750
              </a>{" "}
              |{" "}
              <a
                href="mailto:bapanmistry@mangiinteriors.com"
                className="text-[#3a322a] font-semibold underline"
              >
                bapanmistry@mangiinteriors.com
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
