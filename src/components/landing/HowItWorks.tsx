import React from 'react';
import { motion } from 'motion/react';
import { HOW_IT_WORKS_DATA } from '@/data/landingData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface HowItWorksProps {
  onOpenSignup: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenSignup }) => {
  return (
    <section id="comment-ca-marche" className="bg-white py-20 md:py-28 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-xs font-bold uppercase tracking-wider text-[#0066FF]">
            <span>PAR OÙ COMMENCER</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Trois étapes simples pour démarrer vos ventes
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto font-normal">
            Aucun prérequis technique ou bancaire. Diayma est conçu pour être pris en main en 2 minutes depuis l'application mobile ou le web.
          </p>
        </motion.div>

        {/* 3 Step Cards with Motion */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">
          
          {HOW_IT_WORKS_DATA.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className="relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-slate-50/70 border border-slate-200/80 flex flex-col justify-between hover:shadow-xl hover:border-blue-300 hover:bg-white transition-all duration-300 group"
            >
              <div>
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-5xl font-extrabold text-[#0066FF] group-hover:scale-110 transition-transform">
                    {step.step}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-blue-100 text-[#0066FF] flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-900 mb-3 leading-snug">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Highlight Tag */}
              <div className="pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-[#0066FF]" />
                <span>{step.highlight}</span>
              </div>
            </motion.div>
          ))}

        </div>

        {/* Bottom CTA Block */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-16 text-center"
        >
          <button
            onClick={onOpenSignup}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#0066FF] hover:bg-[#0052CC] text-white font-bold text-sm transition-all shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5"
          >
            <span>Créer mon compte gratuitement</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};


