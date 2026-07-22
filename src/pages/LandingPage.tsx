import { useState } from 'react';
import { Bot, Sparkles } from 'lucide-react';

import { Header } from '@/components/landing/Header';
import { Hero } from '@/components/landing/Hero';
import { TrustBand } from '@/components/landing/TrustBand';
import { Features } from '@/components/landing/Features';
import { AIAssistantSection } from '@/components/landing/AIAssistantSection';
import { MobileAppSection } from '@/components/landing/MobileAppSection';
import { RevenueCalculator } from '@/components/landing/RevenueCalculator';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { Testimonials } from '@/components/landing/Testimonials';
import { FinalCTA } from '@/components/landing/FinalCTA';
import { Footer } from '@/components/landing/Footer';
import { AIAssistantDrawer } from '@/components/landing/AIAssistantDrawer';
import { LiveDemoModal } from '@/components/landing/LiveDemoModal';
import { SignupModal } from '@/components/landing/SignupModal';

export function LandingPage() {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [assistantPrompt, setAssistantPrompt] = useState<string | undefined>(undefined);

  const handleOpenAssistantWithPrompt = (prompt: string) => {
    setAssistantPrompt(prompt);
    setIsAssistantOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#0066FF] selection:text-white flex flex-col">
      <Header
        onOpenSignup={() => setIsSignupOpen(true)}
        onOpenDemo={() => setIsDemoOpen(true)}
        onOpenAssistant={() => setIsAssistantOpen(true)}
      />

      <main className="flex-grow">
        <Hero
          onOpenSignup={() => setIsSignupOpen(true)}
          onOpenDemo={() => setIsDemoOpen(true)}
          onOpenAssistant={() => setIsAssistantOpen(true)}
        />
        <TrustBand />
        <Features
          onOpenAssistant={() => setIsAssistantOpen(true)}
          onOpenDemo={() => setIsDemoOpen(true)}
        />
        <MobileAppSection onOpenSignup={() => setIsSignupOpen(true)} />
        <AIAssistantSection onOpenAssistantWithPrompt={handleOpenAssistantWithPrompt} />
        <RevenueCalculator onOpenSignup={() => setIsSignupOpen(true)} />
        <HowItWorks onOpenSignup={() => setIsSignupOpen(true)} />
        <Testimonials />
        <FinalCTA
          onOpenSignup={() => setIsSignupOpen(true)}
          onOpenDemo={() => setIsDemoOpen(true)}
        />
      </main>

      <Footer />

      {/* Floating AI assistant button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => { setAssistantPrompt(undefined); setIsAssistantOpen(true); }}
          className="group px-4 py-3.5 rounded-full bg-slate-900 text-white border border-slate-700 shadow-2xl hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all flex items-center gap-2.5 animate-pulse-blue"
          title="Ouvrir l'Assistante IA Fatou"
        >
          <div className="w-8 h-8 rounded-full bg-[#0066FF] text-white flex items-center justify-center shadow-md shadow-blue-500/30">
            <Bot className="w-5 h-5" />
          </div>
          <div className="hidden sm:flex flex-col text-left">
            <span className="text-xs font-bold text-white leading-tight flex items-center gap-1">
              Assistante Fatou
              <Sparkles className="w-3 h-3 text-[#0066FF]" />
            </span>
            <span className="text-[10px] text-emerald-400">En ligne 24h/24</span>
          </div>
        </button>
      </div>

      <AIAssistantDrawer
        isOpen={isAssistantOpen}
        onClose={() => setIsAssistantOpen(false)}
        initialPrompt={assistantPrompt}
      />
      <LiveDemoModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
        onOpenSignup={() => setIsSignupOpen(true)}
      />
      <SignupModal
        isOpen={isSignupOpen}
        onClose={() => setIsSignupOpen(false)}
      />
    </div>
  );
}
