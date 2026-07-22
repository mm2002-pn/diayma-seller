import React from 'react';
import { motion } from 'motion/react';
import { Video, Smartphone, CreditCard, Zap, PackageCheck, Sparkles, ArrowRight } from 'lucide-react';
import { FEATURES_DATA } from '@/data/landingData';

interface FeaturesProps {
  onOpenAssistant: () => void;
  onOpenDemo: () => void;
}

export const Features: React.FC<FeaturesProps> = ({ onOpenAssistant, onOpenDemo }) => {
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Video':
        return <Video className="w-6 h-6 text-[#0066FF]" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-[#0066FF]" />;
      case 'CreditCard':
        return <CreditCard className="w-6 h-6 text-[#0066FF]" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-[#0066FF]" />;
      case 'PackageCheck':
        return <PackageCheck className="w-6 h-6 text-[#0066FF]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#0066FF]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#0066FF]" />;
    }
  };

  return (
    <section id="fonctionnalites" className="bg-slate-50/50 py-20 md:py-28 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-xs font-bold uppercase tracking-wider text-[#0066FF]">
              <span>TOUT-EN-UN POUR VOTRE COMMERCE</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Bien plus qu'un chat. Une vraie plateforme de vente.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 max-w-md font-normal leading-relaxed">
            Conçu spécialement pour la vente sociale au Sénégal : application mobile iOS & Android, live streaming, liens de paiement Wave & Orange Money et suivi en direct par l'IA Fatou.
          </p>
        </motion.div>

        {/* 6 Clean White Cards Grid with Staggered Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {FEATURES_DATA.map((feature, idx) => {
            const isAIFeature = feature.id === 'ai-assistant';

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className={`group relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl transition-all duration-300 flex flex-col justify-between border ${
                  isAIFeature
                    ? 'bg-slate-900 text-white border-slate-800 shadow-xl hover:shadow-2xl'
                    : 'bg-white text-slate-900 border-slate-200/80 hover:border-blue-300 hover:shadow-xl'
                }`}
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 ${
                        isAIFeature ? 'bg-[#0066FF] text-white' : 'bg-blue-50 text-[#0066FF]'
                      }`}
                    >
                      {getIconComponent(feature.icon)}
                    </div>
                    {feature.tag && (
                      <span
                        className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                          isAIFeature
                            ? 'bg-blue-500/20 text-blue-300 border border-blue-400/30'
                            : 'bg-blue-50 text-[#0066FF]'
                        }`}
                      >
                        {feature.tag}
                      </span>
                    )}
                  </div>

                  {/* Feature Title */}
                  <h3
                    className={`text-xl font-bold mb-3 ${
                      isAIFeature ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {feature.title}
                  </h3>

                  {/* Feature Description */}
                  <p
                    className={`text-sm leading-relaxed ${
                      isAIFeature ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {feature.description}
                  </p>
                </div>

                {/* Bottom Interactive Trigger */}
                <div className={`pt-6 mt-6 border-t ${isAIFeature ? 'border-slate-800' : 'border-slate-100'}`}>
                  {isAIFeature ? (
                    <button
                      onClick={onOpenAssistant}
                      className="w-full text-xs font-bold uppercase tracking-wider text-[#0066FF] hover:text-white flex items-center justify-between group/btn"
                    >
                      <span>Parler à l'assistante Fatou</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  ) : (
                    <button
                      onClick={onOpenDemo}
                      className="w-full text-xs font-bold uppercase tracking-wider text-slate-800 hover:text-[#0066FF] flex items-center justify-between group/btn"
                    >
                      <span>Découvrir la démo</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};


