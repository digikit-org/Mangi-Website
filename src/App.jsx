import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import AboutSection from './components/AboutSection';
import Services from './components/Services';
import Industries from './components/Industries';
import Projects from './components/Projects';
import WhyMangi from './components/WhyMangi';
import Process from './components/Process';
import Clients from './components/Clients';
import CallToAction from './components/CallToAction';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectInquiryModal from './components/ProjectInquiryModal';
import DetailModal from './components/DetailModal';
import ThankYouPage from './components/ThankYouPage';

export default function App() {
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [inquiryContext, setInquiryContext] = useState('');
  const [selectedDetailItem, setSelectedDetailItem] = useState(null);

  const getIsThankYouPage = () => {
    if (typeof window === 'undefined') return false;
    const pathname = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();
    return (
      pathname.includes('/thank-you') ||
      pathname.includes('thank-you') ||
      hash.includes('thank-you')
    );
  };

  const [currentPage, setCurrentPage] = useState(() => (getIsThankYouPage() ? 'thank-you' : 'home'));
  const [submissionData, setSubmissionData] = useState(null);

  useEffect(() => {
    const handleLocationChange = () => {
      if (getIsThankYouPage()) {
        setCurrentPage('thank-you');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const handleNavigateToThankYou = (data = null) => {
    setSubmissionData(data);
    setCurrentPage('thank-you');
    window.history.pushState({}, '', '#/thank-you');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = (targetHash = '') => {
    setCurrentPage('home');
    if (targetHash) {
      window.history.pushState({}, '', targetHash);
      setTimeout(() => {
        const el = document.querySelector(targetHash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.history.pushState({}, '', window.location.pathname);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenInquiry = (context = '') => {
    setInquiryContext(context);
    setIsInquiryModalOpen(true);
  };

  const handleSelectProject = (project) => {
    setSelectedDetailItem(project);
  };

  const handleSelectService = (service) => {
    setSelectedDetailItem(service);
  };

  const handleSelectIndustry = (industry) => {
    setSelectedDetailItem(industry);
  };

  if (currentPage === 'thank-you') {
    return (
      <ThankYouPage
        submissionData={submissionData}
        onBackHome={handleNavigateHome}
      />
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5] text-[#2e2721] selection:bg-[#c5a059]/25 selection:text-[#2e2721]">
      {/* 1. Header Navigation */}
      <Navbar onOpenConsultation={handleOpenInquiry} />

      {/* Main Content Flow - Google Doc Structure */}
      <main className="flex-1 w-full">
        {/* 01 — HOME / HERO */}
        <Hero
          onOpenConsultation={handleOpenInquiry}
          onNavigateToThankYou={handleNavigateToThankYou}
        />

        {/* 08 — NUMBERS / STATS */}
        <StatsBar />

        {/* INTRODUCTION & 09 — ABOUT MANGI INTERIORS */}
        <AboutSection onOpenConsultation={handleOpenInquiry} />

        {/* 02 — WHAT WE DO, 03 — OUR EXPERTISE & 10 — SERVICES */}
        <Services
          onSelectService={handleSelectService}
          onOpenConsultation={handleOpenInquiry}
        />

        {/* 04 — INDUSTRIES */}
        <Industries onSelectIndustry={handleSelectIndustry} />

        {/* 05 — OUR PROJECTS */}
        <Projects onSelectProject={handleSelectProject} />

        {/* 06 — WHY MANGI INTERIORS */}
        <WhyMangi onOpenConsultation={handleOpenInquiry} />

        {/* 07 — OUR PROCESS (01 Discover, 02 Plan, 03 Design, 04 Execute, 05 Handover) */}
        <Process />

        {/* TRUSTED BY LEADING BRANDS */}
        <Clients />

        {/* 13 — FINAL CTA */}
        <CallToAction onOpenConsultation={handleOpenInquiry} />

        {/* 12 — CONTACT PAGE & DIRECT INQUIRY FORM */}
        <ContactSection onNavigateToThankYou={handleNavigateToThankYou} />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* Pop-up Free Consultation Modal */}
      <ProjectInquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        initialContext={inquiryContext}
        onNavigateToThankYou={handleNavigateToThankYou}
      />

      {/* 11 — PROJECT & SPACE DETAIL CASE STUDY MODAL */}
      <DetailModal
        item={selectedDetailItem}
        onClose={() => setSelectedDetailItem(null)}
        onStartProject={handleOpenInquiry}
      />
    </div>
  );
}
