import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, PhoneCall, ShieldCheck, Smartphone } from 'lucide-react';

interface FinalCTAProps {
  onOpenSignup: () => void;
  onOpenDemo: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenSignup, onOpenDemo }) => {
  return (
    <section className="bg-white text-slate-900 py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sleek Dark Slate Banner Card on White Background */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl sm:rounded-[36px] bg-slate-900 text-white p-6 sm:p-14 lg:p-16 overflow-hidden shadow-2xl border border-slate-800 text-center space-y-6 sm:space-y-8"
        >
          
          {/* Subtle Ambient Background Lighting */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-blue-600/15 via-transparent to-transparent pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-200">
            <Sparkles className="w-4 h-4 text-[#0066FF] shrink-0" />
            <span>Disponible sur Web, App Store & Google Play</span>
          </div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white max-w-4xl mx-auto tracking-tight">
            Prête à transformer vos ventes en ligne ?
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Inscrivez-vous gratuitement en 2 minutes. Téléchargez l'application mobile Diayma et encaissez immédiatement sur Wave et Orange Money.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenSignup}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#0066FF] hover:bg-[#0052CC] text-white font-bold text-base shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all flex items-center justify-center gap-3 group"
            >
              <span>Créer mon compte gratuitement</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-slate-700 hover:border-slate-500 text-white font-semibold text-base hover:bg-slate-800/80 transition-all flex items-center justify-center gap-2"
            >
              <span>Voir la démo en direct</span>
            </button>
          </div>

          {/* Trust bullet points */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Création 100% gratuite
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Smartphone className="w-4 h-4 text-blue-400" />
              App Store & Google Play
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <PhoneCall className="w-4 h-4 text-sky-400" />
              Assistance à Dakar (+221 77 000 00 00)
            </span>
          </div>

        </motion.div>

      </div>
    </section>
  );
};


