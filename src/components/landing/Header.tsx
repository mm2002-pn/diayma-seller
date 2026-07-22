import React, { useState } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { Logo } from './Logo';

interface HeaderProps {
  onOpenSignup: () => void;
  onOpenDemo: () => void;
  onOpenAssistant: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSignup, onOpenDemo, onOpenAssistant }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 text-slate-900 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Modern Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <Logo size="md" variant="light" />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-8 text-sm font-medium text-slate-600">
          <a href="#fonctionnalites" className="hover:text-[#0066FF] transition-colors py-1 whitespace-nowrap">
            Fonctionnalités
          </a>
          <a href="#application-mobile" className="hover:text-[#0066FF] transition-colors py-1 flex items-center gap-1.5 text-slate-800 font-semibold whitespace-nowrap">
            <span className="text-[10px] bg-blue-100 text-[#0066FF] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">iOS/Android</span>
            App Mobile
          </a>
          <a href="#assistante-ia" className="hover:text-[#0066FF] transition-colors py-1 flex items-center gap-1.5 text-blue-600 font-semibold whitespace-nowrap">
            <Sparkles className="w-4 h-4 text-[#0066FF] shrink-0" />
            L'IA Fatou
          </a>
          <a href="#comment-ca-marche" className="hover:text-[#0066FF] transition-colors py-1 whitespace-nowrap">
            Comment ça marche
          </a>
          <a href="#temoignages" className="hover:text-[#0066FF] transition-colors py-1 whitespace-nowrap">
            Témoignages
          </a>
        </nav>

        {/* Desktop Action CTAs */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-4 shrink-0">
          <button
            onClick={onOpenDemo}
            className="text-sm font-semibold text-slate-700 hover:text-slate-900 px-3 py-2 transition-colors whitespace-nowrap"
          >
            Se connecter
          </button>
          <button
            onClick={onOpenSignup}
            className="px-5 xl:px-6 py-2.5 rounded-full bg-[#0066FF] text-white hover:bg-[#0052CC] transition-all text-sm font-bold tracking-wide shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 whitespace-nowrap"
          >
            <span>Commencer gratuitement</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={onOpenAssistant}
            className="p-2.5 rounded-full bg-blue-50 text-[#0066FF] border border-blue-100 flex items-center gap-1.5 text-xs font-bold"
            title="Assistante Fatou"
          >
            <Sparkles className="w-4 h-4" />
            <span className="hidden sm:inline">IA Fatou</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-5 py-6 space-y-4 animate-in slide-in-from-top duration-200 shadow-xl">
          <nav className="flex flex-col space-y-3 font-medium text-base text-slate-700">
            <a
              href="#fonctionnalites"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 hover:text-[#0066FF] border-b border-slate-100 flex items-center justify-between"
            >
              <span>Fonctionnalités</span>
              <span className="text-xs text-slate-400">➔</span>
            </a>
            <a
              href="#application-mobile"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 hover:text-[#0066FF] border-b border-slate-100 flex items-center justify-between font-semibold text-slate-900"
            >
              <div className="flex items-center gap-2">
                <span className="text-xs bg-blue-100 text-[#0066FF] px-2 py-0.5 rounded font-bold uppercase">iOS/Android</span>
                <span>App Mobile Diayma</span>
              </div>
              <span className="text-xs text-slate-400">➔</span>
            </a>
            <a
              href="#assistante-ia"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 hover:text-[#0066FF] border-b border-slate-100 flex items-center justify-between text-[#0066FF] font-semibold"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>L'IA Fatou</span>
              </div>
              <span className="text-xs text-blue-400">➔</span>
            </a>
            <a
              href="#comment-ca-marche"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 hover:text-[#0066FF] border-b border-slate-100 flex items-center justify-between"
            >
              <span>Comment ça marche</span>
              <span className="text-xs text-slate-400">➔</span>
            </a>
            <a
              href="#temoignages"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 hover:text-[#0066FF] border-b border-slate-100 flex items-center justify-between"
            >
              <span>Témoignages Vendeuses</span>
              <span className="text-xs text-slate-400">➔</span>
            </a>
          </nav>
          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full py-3.5 rounded-full border border-slate-200 text-slate-800 font-semibold text-sm text-center active:bg-slate-50 transition-colors"
            >
              Se connecter
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSignup();
              }}
              className="w-full py-3.5 rounded-full bg-[#0066FF] text-white font-bold text-sm text-center flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 active:bg-[#0052CC]"
            >
              <span>Commencer gratuitement</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

