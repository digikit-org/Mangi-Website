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

        {/* Content */}
        {submitted ? (
          <div className="p-8 sm:p-12 text-center flex flex-col items-center justify-center">
            <CheckCircle2 className="w-16 h-16 text-emerald-600 mb-4 animate-bounce" />
            <h4 className="font-serif text-2xl font-semibold text-[#2e2721] mb-2">
              Inquiry Received!
            </h4>
            <p className="text-sm text-[#5c5349] max-w-md leading-relaxed">
              Thank you for reaching out to Mangi Interiors. Our commercial
              project team will review your requirements and get in touch within
              24 business hours.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
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
                  type="text"
                  required
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-[#faf8f5] border border-[#e5dcd0] rounded-lg px-3.5 py-2.5 text-sm text-[#2e2721] focus:outline-none focus:border-[#8c6d3b] focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#4a4036] mb-1">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 80881 96750"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
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
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-[#faf8f5] border border-[#e5dcd0] rounded-lg px-3.5 py-2.5 text-sm text-[#2e2721] focus:outline-none focus:border-[#8c6d3b] focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#4a4036] mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Business / Organization"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
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
                  type="text"
                  placeholder="City / Region"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  className="w-full bg-[#faf8f5] border border-[#e5dcd0] rounded-lg px-3.5 py-2.5 text-sm text-[#2e2721] focus:outline-none focus:border-[#8c6d3b] focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#4a4036] mb-1">
                  Approx. Area
                </label>
                <input
                  type="text"
                  placeholder="e.g. 15,000 sq.ft"
                  value={formData.area}
                  onChange={(e) =>
                    setFormData({ ...formData, area: e.target.value })
                  }
                  className="w-full bg-[#faf8f5] border border-[#e5dcd0] rounded-lg px-3.5 py-2.5 text-sm text-[#2e2721] focus:outline-none focus:border-[#8c6d3b] focus:bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#4a4036] mb-1">
                Project Type
              </label>
              <select
                value={formData.projectType}
                onChange={(e) =>
                  setFormData({ ...formData, projectType: e.target.value })
                }
                className="w-full bg-[#faf8f5] border border-[#e5dcd0] rounded-lg px-3.5 py-2.5 text-sm text-[#2e2721] focus:outline-none focus:border-[#8c6d3b] focus:bg-white"
              >
                <option value="Healthcare Interiors">
                  Healthcare Interiors
                </option>
                <option value="Hospitality Interiors">
                  Hospitality Interiors
                </option>
                <option value="Corporate & Office Interiors">
                  Workplaces & Office Interiors
                </option>
                <option value="Retail Interiors">Retail Interiors</option>
                <option value="Commercial Interiors">
                  Commercial Interiors
                </option>
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
                rows={3}
                placeholder="Share space objectives, target timelines, or specific design preferences..."
                value={formData.details}
                onChange={(e) =>
                  setFormData({ ...formData, details: e.target.value })
                }
                className="w-full bg-[#faf8f5] border border-[#e5dcd0] rounded-lg px-3.5 py-2 text-sm text-[#2e2721] focus:outline-none focus:border-[#8c6d3b] focus:bg-white"
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
        )}
      </div>
    </div>
  );
}
