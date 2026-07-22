import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, ArrowRight, CheckCircle2, TrendingUp, Wallet } from 'lucide-react';

interface RevenueCalculatorProps {
  onOpenSignup: () => void;
}

export const RevenueCalculator: React.FC<RevenueCalculatorProps> = ({ onOpenSignup }) => {
  const [livesPerWeek, setLivesPerWeek] = useState<number>(3);
  const [itemsPerLive, setItemsPerLive] = useState<number>(15);
  const [avgPrice, setAvgPrice] = useState<number>(18000);

  // Calculations
  const weeklySales = livesPerWeek * itemsPerLive * avgPrice;
  const monthlySales = weeklySales * 4;
  const estimatedHoursSaved = livesPerWeek * 3; // ~3h saved on manually checking Wave receipts

  const formatFCFA = (val: number) => {
    return new Intl.NumberFormat('fr-FR').format(val) + ' FCFA';
  };

  return (
    <section id="calculateur-ventes" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5 shrink-0" />
            Simulateur de revenus
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Combien pouvez-vous vendre avec Diayma ?
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-normal max-w-2xl mx-auto">
            Ajustez vos prévisions de vente en live et découvrez l'impact direct sur votre chiffre d'affaires mensuel.
          </p>
        </motion.div>

        {/* Interactive Calculator Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-800/80 border border-slate-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          
          {/* Sliders Side */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Slider 1: Lives per week */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <label className="text-slate-300 font-medium">Nombre de lives par semaine</label>
                <span className="font-bold text-white bg-slate-700 px-3 py-1 rounded-lg border border-slate-600 text-base">
                  {livesPerWeek} {livesPerWeek > 1 ? 'lives' : 'live'} / sem.
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="7"
                step="1"
                value={livesPerWeek}
                onChange={(e) => setLivesPerWeek(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#0066FF]"
              />
              <div className="flex justify-between text-xs text-slate-500">
                <span>1 live</span>
                <span>3 lives (recommandé)</span>
                <span>7 lives</span>
              </div>
            </div>

            {/* Slider 2: Items per live */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <label className="text-slate-300 font-medium">Nombre d'articles vendus par live</label>
                <span className="font-bold text-white bg-slate-700 px-3 py-1 rounded-lg border border-slate-600 text-base">
                  {itemsPerLive} articles
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="60"
                step="5"
                value={itemsPerLive}
                onChange={(e) => setItemsPerLive(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#0066FF]"
              />
              <div className="flex justify-between text-xs text-slate-500">
                <span>5 articles</span>
                <span>25 articles</span>
                <span>60 articles</span>
              </div>
            </div>

            {/* Slider 3: Average price */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <label className="text-slate-300 font-medium">Prix moyen par article (FCFA)</label>
                <span className="font-bold text-blue-400 bg-blue-950/60 px-3 py-1 rounded-lg border border-blue-800 text-base">
                  {formatFCFA(avgPrice)}
                </span>
              </div>
              <input
                type="range"
                min="3000"
                max="60000"
                step="1000"
                value={avgPrice}
                onChange={(e) => setAvgPrice(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#0066FF]"
              />
              <div className="flex justify-between text-xs text-slate-500">
                <span>3.000 F</span>
                <span>25.000 F</span>
                <span>60.000 F</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Paiements instantanés sur Wave & Orange Money dès validation de la cliente</span>
            </div>

          </div>

          {/* Results Side Box */}
          <div className="lg:col-span-5 bg-gradient-to-br from-blue-600 to-[#0052CC] p-8 sm:p-10 rounded-2xl text-white space-y-6 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-200">
                Chiffre d'affaires estimé
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-none">
                {formatFCFA(monthlySales)}
                <span className="text-sm font-normal text-blue-200 block mt-1">/ mois directement sur votre Wave</span>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-blue-400/30 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-blue-100 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-emerald-300" />
                  Ventes par live :
                </span>
                <span className="font-bold text-white">{formatFCFA(itemsPerLive * avgPrice)}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-blue-100 flex items-center gap-2">
                  <Wallet className="w-4 h-4 text-amber-300" />
                  Temps gagné / mois :
                </span>
                <span className="font-bold text-white">~{estimatedHoursSaved * 4} heures</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-blue-100">Frais d'inscription :</span>
                <span className="font-bold text-emerald-300 uppercase text-xs bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-400/30">
                  0 FCFA Gratuit
                </span>
              </div>
            </div>

            <button
              onClick={onOpenSignup}
              className="w-full py-4 rounded-xl bg-white text-[#0066FF] hover:bg-slate-100 font-bold text-sm sm:text-base shadow-lg transition-all flex items-center justify-center gap-2 mt-4 active:scale-[0.99]"
            >
              <span>Atteindre ces objectifs maintenant</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
