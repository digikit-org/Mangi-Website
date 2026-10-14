import React from "react";
import { Phone, Mail, Send } from "lucide-react";
import { siteConfig } from "../data/siteData";

export default function ContactSection() {
  const { contactSection } = siteConfig;

  const handleSubmit = (e) => {
    const form = e.currentTarget;

    const name = form.elements.namedItem("name").value.trim();
    const phone = form.elements.namedItem("phone").value.trim();
    const email = form.elements.namedItem("email").value.trim();
    const company = form.elements.namedItem("company").value.trim();
    const location = form.elements.namedItem("location").value.trim();
    const area = form.elements.namedItem("area").value.trim();
    const project = form.elements.namedItem("project").value;
    const details = form.elements.namedItem("details").value.trim();

    // Clear previous custom validation messages.
    Array.from(form.elements).forEach((field) => {
      if (typeof field.setCustomValidity === "function") {
        field.setCustomValidity("");
      }
    });

    const showError = (fieldName, message) => {
      e.preventDefault();
      const field = form.elements.namedItem(fieldName);
      field.setCustomValidity(message);
      field.reportValidity();
      field.focus();
    };

    const nameRegex = /^[\p{L}\p{M}][\p{L}\p{M}\s'.-]*$/u;
    const phoneRegex = /^(?:\+91[\s-]?)?[6-9]\d{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const areaRegex = /^\d[\d,]*(?:\.\d+)?(?:\s*(?:sq\.?\s*ft\.?|sqft))?$/i;

    if (name.length < 2 || name.length > 60 || !nameRegex.test(name)) {
      return showError("name", "Enter a valid name using 2–60 characters.");
    }

    const normalizedPhone = phone.replace(/[\s-]/g, "");

    if (!phoneRegex.test(normalizedPhone)) {
      return showError(
        "phone",
        "Enter a valid Indian mobile number, such as 8088196750 or +91 8088196750.",
      );
    }

    if (email.length > 254 || !emailRegex.test(email)) {
      return showError("email", "Enter a valid email address.");
    }

    if (company.length < 2 || company.length > 100) {
      return showError(
        "company",
        "Company name must contain 2–100 characters.",
      );
    }

    if (location.length < 3 || location.length > 100) {
      return showError(
        "location",
        "Enter a project location between 3 and 100 characters.",
      );
    }

    const numericArea = Number(
      area.replace(/,/g, "").match(/^\d+(?:\.\d+)?/)?.[0],
    );

    if (
      !areaRegex.test(area) ||
      !Number.isFinite(numericArea) ||
      numericArea <= 0
    ) {
      return showError(
        "area",
        "Enter a positive area, for example 15000 or 15,000 sq.ft.",
      );
    }

    const allowedProjects = [
      "Corporate & Office Interiors",
      "Healthcare Interiors",
      "Hospitality Interiors",
      "Retail Interiors",
      "Commercial Interiors",
      "Turnkey Interior Solutions",
    ];

    if (!allowedProjects.includes(project)) {
      return showError("project", "Please select a project type.");
    }

    if (details.length < 10 || details.length > 1000) {
      return showError(
        "details",
        "Project details must contain 10–1000 characters.",
      );
    }

    // All fields are valid. Allow the browser to submit the form
    // normally to consultation.php using POST.
  };

  return (
    <section
      id="contact"
      className="w-full py-10 sm:py-14 bg-[#fdfbf7] border-t border-[#eae3d5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Contact */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#8c6d3b] block mb-3">
                {contactSection.badge}
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#2e2721] tracking-tight mb-4">
                {contactSection.title}
              </h2>

              <p className="text-sm sm:text-base text-[#6d665e] leading-relaxed whitespace-pre-line">
                {contactSection.subtext}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#e8ded0] space-y-4 shadow-sm">
              <h3 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#8c6d3b]">
                Prefer to Talk Directly?
              </h3>

              <div className="space-y-3">
                <a
                  href={`tel:${contactSection.directCall.replace(/\s+/g, "")}`}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-[#faf8f5] hover:bg-[#f4efe6] text-[#3a322a] transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-white border border-[#e8ded0] flex items-center justify-center text-[#8c6d3b]">
                    <Phone className="w-4 h-4" />
                  </div>

                  <div>
                    <span className="text-[10px] text-[#8c8275] uppercase font-bold block">
                      Direct Call
                    </span>
                    <strong className="text-sm">
                      {contactSection.directCall}
                    </strong>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${contactSection.directWhatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-emerald-50/60 hover:bg-emerald-50 text-[#3a322a] transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-white border border-emerald-200 flex items-center justify-center text-emerald-600">
                    <svg
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.347-.57-.347m8.413-6.994A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                    </svg>
                  </div>

                  <div>
                    <span className="text-[10px] text-emerald-700 uppercase font-bold block">
                      WhatsApp Instant
                    </span>
                    <strong className="text-sm">
                      {contactSection.directWhatsapp}
                    </strong>
                  </div>
                </a>

                <a
                  href={`mailto:${contactSection.directEmail}`}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-[#faf8f5] hover:bg-[#f4efe6] text-[#3a322a] transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-white border border-[#e8ded0] flex items-center justify-center text-[#8c6d3b]">
                    <Mail className="w-4 h-4" />
                  </div>

                  <div>
                    <span className="text-[10px] text-[#8c8275] uppercase font-bold block">
                      Corporate Inquiries
                    </span>
                    <strong className="text-xs sm:text-sm break-all">
                      {contactSection.directEmail}
                    </strong>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#e8ded0] shadow-md">
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#2e2721] mb-2">
                {contactSection.formTitle}
              </h3>

              <p className="text-xs sm:text-sm text-[#6e6459] mb-6">
                Fill out the form below. Our commercial project team will review
                and get in touch within 24 hours.
              </p>

              <form
                action="https://mail.digikit.in/forms/mangi/website/consultation.php"
                method="POST"
                onSubmit={handleSubmit}
                onInput={(e) => {
                  if (typeof e.target.setCustomValidity === "function") {
                    e.target.setCustomValidity("");
                  }
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold text-[#4a4036] uppercase tracking-wider mb-1"
                    >
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
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-semibold text-[#4a4036] uppercase tracking-wider mb-1"
                    >
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
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold text-[#4a4036] uppercase tracking-wider mb-1"
                    >
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
                    <label
                      htmlFor="contact-company"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#4a4036] mb-1"
                    >
                      Company Name *
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
                    <label
                      htmlFor="contact-location"
                      className="block text-xs font-semibold text-[#4a4036] uppercase tracking-wider mb-1"
                    >
                      Project Location *
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
                    <label
                      htmlFor="contact-area"
                      className="block text-xs font-semibold text-[#4a4036] uppercase tracking-wider mb-1"
                    >
                      Approx. Area (Sq.Ft) *
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
                  <label
                    htmlFor="contact-project"
                    className="block text-xs font-semibold text-[#4a4036] uppercase tracking-wider mb-1"
                  >
                    Project Type *
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
                    <option value="Healthcare Interiors">
                      Healthcare Interiors
                    </option>
                    <option value="Hospitality Interiors">
                      Hospitality Interiors
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
                  <label
                    htmlFor="contact-details"
                    className="block text-xs font-semibold text-[#4a4036] uppercase tracking-wider mb-1"
                  >
                    Tell Us About Your Project *
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
                    <span>{contactSection.submitText}</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-[#8c8275] text-center mt-2.5">
                    No spam. No obligations. Just straightforward expert
                    interior advice.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
