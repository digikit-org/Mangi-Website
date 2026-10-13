import React, { useEffect } from 'react';
import {
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  Home,
  Clock,
  ShieldCheck,
  Calendar,
  Sparkles,
  Building2,
  HeartPulse,
  UtensilsCrossed,
  ShoppingBag,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { siteConfig } from '../data/siteData';

export default function ThankYouPage({ submissionData, onBackHome }) {
  const { brand } = siteConfig;

  useEffect(() => {
    // Fire celebratory confetti on mount
    try {
      confetti({
        particleCount: 110,
        spread: 75,
        origin: { y: 0.4 },
        colors: ['#c5a059', '#caa368', '#b38f47', '#ede5d6', '#a67c3d'],
      });
    } catch (e) {}
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const clientName = submissionData?.name || '';
  const clientService = submissionData?.service || submissionData?.projectType || '';

  const coreSectors = [
    { name: 'Healthcare', icon: HeartPulse, desc: 'Clinics & hospitals' },
    { name: 'Hospitality', icon: UtensilsCrossed, desc: 'Dining & hotels' },
    { name: 'Workplaces', icon: Building2, desc: 'Corporate spaces' },
    { name: 'Retail', icon: ShoppingBag, desc: 'Boutiques & showrooms' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5] text-[#2e2721]">
      {/* 1. Dedicated Light Beige Header */}
      <header className="sticky top-0 z-40 bg-[#faf6ee]/95 backdrop-blur-md border-b border-[#e7e0d4] shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onBackHome();
            }}
            className="flex items-center gap-3 group"
          >
            <img
              src="/images/logo_dark.png"
              alt="Mangi Interiors logo"
              className="h-10 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href={`tel:${brand.contact.phone.replace(/\s+/g, '')}`}
              className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-[#4a4036] hover:text-[#8c6d3b] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>{brand.contact.phone}</span>
            </a>

            <button
              onClick={() => onBackHome()}
              className="gold-btn-outline inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider cursor-pointer"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Return Home</span>
            </button>
          </div>
        </div>
      </header>

      {/* 2. Main Thank You Hero & Next Steps */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        {/* Top Status Card */}
        <div className="bg-white rounded-3xl p-7 sm:p-12 border border-[#e8ded0] shadow-sm text-center relative overflow-hidden">
          {/* Subtle warm accent bar */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#d4a373] via-[#caa368] to-[#c5a059]" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f4efe6] border border-[#e5dcd0] text-[#8c6d3b] text-xs font-bold tracking-[0.2em] uppercase mb-5 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Consultation Request Confirmed</span>
          </div>

          {/* Success Check Icon */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#f4efe6] border border-[#e8ded0] flex items-center justify-center mx-auto mb-5 text-[#8c6d3b] shadow-xs">
            <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 stroke-[1.8]" />
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#2e2721] tracking-tight mb-4">
            Thank You for Choosing Mangi Interiors.
          </h1>

          {/* Personalized or General Message */}
          <p className="font-sans text-[#5c5349] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-6">
            {clientName ? (
              <>
                Thank you, <strong className="text-[#2e2721] font-semibold">{clientName}</strong>!{' '}
                We have received your project details
                {clientService ? (
                  <>
                    {' '}for <strong className="text-[#8c6d3b] font-semibold">{clientService}</strong>
                  </>
                ) : null}
                .
              </>
            ) : (
              'Your commercial interior consultation request has been successfully submitted.'
            )}{' '}
            Our lead architectural team is already reviewing your space requirements.
          </p>

          {/* Guarantee Badges */}
          <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-4 border-t border-[#f1ede5] text-xs text-[#6e6459]">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#c5a059]" />
              <span>Response Within 24 Business Hours</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
              <span>Zero-Obligation Expert Advice</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#c5a059]" />
              <span>Direct Architect Assignment</span>
            </div>
          </div>
        </div>

        {/* 3. "What Happens Next" 3-Step Process */}
        <div className="mt-10 sm:mt-12">
          <div className="text-center mb-8">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#8c6d3b] block mb-1.5">
              Next Steps
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#2e2721]">
              What Happens Next in Your Project Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {/* Step 01 */}
            <div className="bg-white rounded-2xl p-6 border border-[#e8ded0] shadow-xs relative flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-[#8c6d3b] px-2.5 py-1 rounded-md bg-[#faf6ee] border border-[#e8ded0]">
                    STEP 01
                  </span>
                  <Clock className="w-4 h-4 text-[#c5a059]" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#2e2721] mb-2">
                  Requirement Audit
                </h3>
                <p className="text-xs sm:text-sm text-[#5c5349] leading-relaxed">
                  Our commercial design leads review your floorplate dimensions, shell status, timeline, and industry codes.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#f1ede5] text-[11px] font-medium text-[#8c6d3b]">
                Within 12 Hours
              </div>
            </div>

            {/* Step 02 */}
            <div className="bg-white rounded-2xl p-6 border border-[#e8ded0] shadow-xs relative flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-[#8c6d3b] px-2.5 py-1 rounded-md bg-[#faf6ee] border border-[#e8ded0]">
                    STEP 02
                  </span>
                  <Phone className="w-4 h-4 text-[#c5a059]" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#2e2721] mb-2">
                  Discovery Call
                </h3>
                <p className="text-xs sm:text-sm text-[#5c5349] leading-relaxed">
                  A 15-minute introductory call with our principal interior architect to discuss workflow needs, brand identity, and budgets.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#f1ede5] text-[11px] font-medium text-[#8c6d3b]">
                Personalized Consultation
              </div>
            </div>

            {/* Step 03 */}
            <div className="bg-white rounded-2xl p-6 border border-[#e8ded0] shadow-xs relative flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-[#8c6d3b] px-2.5 py-1 rounded-md bg-[#faf6ee] border border-[#e8ded0]">
                    STEP 03
                  </span>
                  <Sparkles className="w-4 h-4 text-[#c5a059]" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#2e2721] mb-2">
                  Concept & Turnkey Roadmap
                </h3>
                <p className="text-xs sm:text-sm text-[#5c5349] leading-relaxed">
                  We prepare tailored 2D spatial zoning layouts, material moodboards, and a phased turnkey execution timeline.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#f1ede5] text-[11px] font-medium text-[#8c6d3b]">
                Ready for Execution
              </div>
            </div>
          </div>
        </div>

        {/* 4. Need Immediate Assistance? Direct Contact Box */}
        <div className="mt-10 sm:mt-12 bg-[#f4efe6] rounded-2xl p-6 sm:p-8 border border-[#e5dcd0] flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xs">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#8c6d3b] block mb-1">
              Direct Contact
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#2e2721]">
              Need to Discuss Urgent Timelines?
            </h3>
            <p className="text-xs sm:text-sm text-[#5c5349] mt-1 max-w-lg">
              Feel free to call or WhatsApp our project desk directly for immediate assistance.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${brand.contact.phone.replace(/\s+/g, '')}`}
              className="gold-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider shadow-md"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call: {brand.contact.phone}</span>
            </a>

            <a
              href={`https://wa.me/${brand.contact.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider bg-white border border-[#ded4c3] text-[#2e2721] hover:border-[#c5a059] transition-colors shadow-xs"
            >
              <svg className="w-3.5 h-3.5 fill-current text-emerald-600" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
              </svg>
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

        {/* 5. Return Actions */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onBackHome()}
            className="w-full sm:w-auto gold-btn px-8 py-3.5 rounded-lg text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </button>

          <button
            onClick={() => onBackHome('#projects')}
            className="w-full sm:w-auto gold-btn-outline px-8 py-3.5 rounded-lg text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Explore Completed Projects</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </main>

      {/* 6. Streamlined Footer */}
      <footer className="w-full bg-[#fdfbf7] border-t border-[#eae3d5] py-6 text-center text-xs text-[#78716c]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>{siteConfig.brand.name} • Commercial Interior Design & Turnkey Execution</p>
          <p>{siteConfig.brand.copyright}</p>
        </div>
      </footer>
    </div>
  );
}
