import React from 'react';
import { motion } from 'motion/react';
import { TESTIMONIALS_DATA } from '@/data/landingData';
import { Star, Quote, CheckCircle2, MapPin } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="temoignages" className="bg-slate-50/50 py-20 md:py-28 relative border-b border-slate-100">
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
            <span>ELLES UTILISENT DIAYMA AU QUOTIDIEN</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Adopté par plus de 1 200 vendeuses au Sénégal
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto font-normal">
            Découvrez comment des créatrices et commerçantes à Dakar, Thiès et Saint-Louis transforment leurs ventes au quotidien.
          </p>
        </motion.div>

        {/* 3 Testimonials Grid with Motion */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/80 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 relative group"
            >
              <div>
                {/* Metric Highlight Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-blue-50 text-[#0066FF] tracking-wide border border-blue-100">
                    {t.metric}
                  </span>
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <div className="relative mb-8">
                  <Quote className="w-8 h-8 text-blue-100 absolute -top-4 -left-2 -z-0" />
                  <p className="text-sm sm:text-base text-slate-700 italic font-normal leading-relaxed relative z-10">
                    "{t.quote}"
                  </p>
                </div>
              </div>

              {/* Author Footer */}
              <div className="pt-6 border-t border-slate-100 flex items-center gap-4">
                <img
                  src={t.avatarUrl}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-100 shadow-sm"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-bold text-base text-slate-900 truncate">
                      {t.name}
                    </h4>
                    {t.verified && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    )}
                  </div>
                  <p className="text-xs font-semibold text-[#0066FF] truncate">
                    {t.businessName}
                  </p>
                  <p className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span>{t.city}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};


