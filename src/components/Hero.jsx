import React, { useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Award,
} from "lucide-react";
import confetti from "canvas-confetti";
import { siteConfig } from "../data/siteData";

export default function Hero({ onOpenConsultation }) {
  const { hero } = siteConfig;

  const [bookingData, setBookingData] = useState({
    name: "",
    phone: "",
    service: "Healthcare",
    area: "",
  });
  const [isBooked, setIsBooked] = useState(false);

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setIsBooked(true);
    try {
      confetti({
        particleCount: 85,
        spread: 65,
        origin: { y: 0.5 },
      });
    } catch (err) {}

    setTimeout(() => {
      setIsBooked(false);
      setBookingData({
        name: "",
        phone: "",
        service: "Healthcare",
        area: "",
      });
    }, 4000);
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-[100svh] pt-28 sm:pt-32 pb-12 flex flex-col justify-between overflow-hidden bg-[#faf8f5]"
    >
      {/* Background Architectural Image Layer with Light Beige Overlays — NO BLACK */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-[center_right] sm:bg-center"
        style={{
          backgroundImage: `url('${hero.bgImage}')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#faf8f5] via-[#faf8f5]/40 to-[#faf8f5]/65 w-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#faf8f5] via-transparent to-[#faf8f5]/0" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headlines & Specialized Commercial Sectors */}
          <div className="lg:col-span-7 space-y-5">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f4efe6] border border-[#e5dcd0] text-[#8c6d3b] text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>{hero.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.12] font-medium text-[#2e2721] tracking-tight">
              Commercial Interiors,
              <br />
              Designed to Perform.
            </h1>

            {/* Description */}
            <p className="font-sans text-black text-sm sm:text-base leading-relaxed max-w-xl font-normal">
              {hero.description}
            </p>

            {/* Specialized Commercial Sectors — Healthcare comes FIRST and HIGHLIGHTED */}
            <div>
              <span className="text-[11px] font-sans font-bold uppercase tracking-[0.22em] text-[#8c6d3b] block mb-2.5">
                SPECIALIZED COMMERCIAL SECTORS
              </span>
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                {hero.sectorChips.map((chip) => {
                  const isHealthcare = chip === "Healthcare";
                  return (
                    <span
                      key={chip}
                      className={`inline-flex items-center px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        isHealthcare
                          ? "bg-[#c5a059] text-white border border-[#b38f47] shadow-md ring-2 ring-[#c5a059]/35 font-bold scale-[1.03]"
                          : "bg-white/90 border border-[#e2d8c7] text-[#3a322a] shadow-xs hover:border-[#c5a059]"
                      }`}
                    >
                      {isHealthcare && (
                        <Sparkles className="w-3.5 h-3.5 mr-1.5 text-white animate-pulse" />
                      )}
                      {chip}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
              <a
                href="#projects"
                className="gold-btn-outline inline-flex items-center gap-2 px-6 py-3 rounded-lg font-sans font-semibold text-xs tracking-wide cursor-pointer"
              >
                <span>{hero.secondaryButton}</span>
              </a>
            </div>

            {/* Quick Trust Highlights */}
          </div>

          {/* Right Column: Prominent Booking Form On The First Page */}
          <div className="lg:col-span-5">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-[#e8ded0] shadow-xl">
              <div className="flex items-center justify-between mb-3 border-b border-[#f1ede5] pb-3">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#8c6d3b] block">
                    Fast Response
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#2e2721]">
                    Book a Free Consultation
                  </h3>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#f4efe6] text-[#8c6d3b] text-[10px] font-bold uppercase tracking-wider border border-[#eae3d5]">
                  Instant
                </span>
              </div>

              <p className="text-xs text-[#6e6459] mb-4">
                Schedule an architectural consultation for your commercial
                space.
              </p>

              <form
                action={"https://mail.digikit.in/forms/mangi/contact.php"}
                method="POST"
                className="space-y-3.5"
              >
                <div>
                  <label className="block text-[11px] font-semibold text-[#423c36] uppercase tracking-wider mb-1">
                    Full Name *
                  </label>

                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Your Full Name"
                    minLength={2}
                    maxLength={60}
                    pattern="[A-Za-z\u00C0-\u024F]+(?:[ '-][A-Za-z\u00C0-\u024F]+)*"
                    title="Enter a valid name using letters, spaces, apostrophes, or hyphens."
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(
                        /[^A-Za-z\u00C0-\u024F '\-]/g,
                        "",
                      );
                    }}
                    className="w-full px-3 py-2 bg-white border border-[#dcd3c3] rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#c5a059] transition-all text-[#1c1917]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#423c36] uppercase tracking-wider mb-1">
                    Phone / WhatsApp *
                  </label>

                  <input
                    name="phone"
                    type="tel"
                    required
                    placeholder="Enter 10-digit mobile number"
                    minLength={10}
                    maxLength={10}
                    pattern="[0-9]{10}"
                    inputMode="numeric"
                    onInput={(e) => {
                      e.target.value = e.target.value
                        .replace(/\D/g, "")
                        .slice(0, 10);
                    }}
                    title="Please enter exactly 10 digits."
                    className="w-full px-3 py-2 bg-white border border-[#dcd3c3] rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#c5a059] transition-all text-[#1c1917]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#423c36] uppercase tracking-wider mb-1">
                    Service Required *
                  </label>

                  <select
                    name="service"
                    required
                    defaultValue=""
                    className="w-full px-2.5 py-2 bg-white border border-[#dcd3c3] rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-[#c5a059] text-[#1c1917]"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="Healthcare">
                      Healthcare (Clinics/Hospitals)
                    </option>
                    <option value="Hospitality">
                      Hospitality (Hotels/Lounges)
                    </option>
                    <option value="Workplaces">
                      Workplaces (Offices/Corporate)
                    </option>
                    <option value="Retail">Retail (Stores/Showrooms)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#423c36] uppercase tracking-wider mb-1">
                    Approx. Area *
                  </label>

                  <select
                    name="area"
                    required
                    defaultValue=""
                    className="w-full px-2.5 py-2 bg-white border border-[#dcd3c3] rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-[#c5a059] text-[#1c1917]"
                  >
                    <option value="" disabled>
                      Select an area
                    </option>
                    <option value="Under 3,000 sq.ft.">
                      &lt; 3,000 sq.ft.
                    </option>
                    <option value="3,000 – 10,000 sq.ft.">
                      3,000 – 10,000 sq.ft.
                    </option>
                    <option value="10,000 – 25,000 sq.ft.">
                      10,000 – 25,000 sq.ft.
                    </option>
                    <option value="25,000+ sq.ft.">25,000+ sq.ft.</option>
                  </select>
                </div>

                <div className="pt-1.5">
                  <button
                    type="submit"
                    className="w-full gold-btn py-3 rounded-lg font-semibold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    Book Free Consultation
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[10px] text-[#8c8275] text-center mt-2">
                    Zero obligations • Direct response from our project team
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 flex items-center justify-between border-t border-[#eae3d5]/70">
        <a
          href="#about"
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#6e6459] hover:text-[#2e2721] transition-colors group cursor-pointer"
        >
          <span>Scroll Down</span>
          <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1 text-[#c5a059]" />
        </a>

        <div className="text-right text-xs text-[#78716c] font-mono tracking-wider">
          <span className="text-[#8c6d3b] font-bold">MANGI</span> / COMMERCIAL
          INTERIORS
        </div>
      </div>
    </section>
  );
}
