import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Play, ArrowRight, CheckCircle2, Sparkles, Mic, ShoppingBag, Volume2 } from 'lucide-react';

interface HeroProps {
  onOpenSignup: () => void;
  onOpenDemo: () => void;
  onOpenAssistant?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSignup, onOpenDemo, onOpenAssistant }) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-slate-50/30 to-white pt-8 pb-16 lg:pt-14 lg:pb-28">
      {/* Background glow graphic */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-blue-200/20 via-indigo-100/30 to-blue-50/10 blur-3xl -z-10 pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            
            {/* Top Pill Tag */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex flex-wrap items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white border border-blue-200 shadow-sm text-slate-800 text-xs sm:text-sm font-semibold hover:border-blue-300 transition-all max-w-full"
            >
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-slate-700">App Mobile iOS, Android & Live Shopping IA</span>
              <span className="bg-blue-100 text-[#0066FF] px-2 py-0.5 rounded-full text-[11px] font-bold shrink-0">Nouveau</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] sm:leading-[1.12] break-words"
            >
              Gérez tout et vendez en live avec{' '}
              <span className="text-[#0066FF] relative inline-block">
                Diayma.
                <svg className="absolute -bottom-1 left-0 w-full h-3 text-blue-200 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0,15 Q50,5 100,15" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed"
            >
              Ventes en direct, gestion automatique des stocks, suivi client et encaissements <strong className="text-slate-900 font-semibold">Wave & Orange Money</strong>. Disponible sur le web et sur l'application mobile <strong className="text-[#0066FF] font-semibold">App Store & Google Play</strong>.
            </motion.p>

            {/* Action CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto"
            >
              <button
                onClick={onOpenSignup}
                className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#0066FF] hover:bg-[#0052CC] text-white font-bold text-sm sm:text-base shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3"
              >
                <span>Commencer gratuitement</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
              </button>

              <button
                onClick={onOpenDemo}
                className="px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-semibold text-sm sm:text-base transition-all duration-200 flex items-center justify-center gap-2.5 shadow-sm hover:border-slate-300"
              >
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#0066FF] shrink-0">
                  <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current ml-0.5" />
                </div>
                <span>Voir la démo vidéo</span>
              </button>
            </motion.div>

            {/* Mobile App Download Badges Prominent Block */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
            >
              <a 
                href="#application-mobile"
                className="inline-flex items-center gap-3.5 px-5 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white shadow-xl shadow-slate-900/10 border border-slate-800 transition-all hover:scale-[1.02] active:scale-[0.98] group"
              >
                <svg className="w-7 h-7 fill-current shrink-0 text-white" viewBox="0 0 384 512">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-92.1-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-15 69.5-34.3z"/>
                </svg>
                <div className="text-left leading-none">
                  <div className="text-[10px] uppercase tracking-wider text-slate-400 font-medium mb-1">
                    Disponible sur iOS
                  </div>
                  <div className="text-sm font-extrabold tracking-tight text-white flex items-center gap-1.5">
                    <span>App Store</span>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-bold px-1.5 py-0.5 rounded">4.9 ★</span>
                  </div>
                </div>
              </a>

              <a 
                href="#application-mobile"
                className="inline-flex items-center gap-3.5 px-5 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white shadow-xl shadow-slate-900/10 border border-slate-800 transition-all hover:scale-[1.02] active:scale-[0.98] group"
              >
                <svg className="w-6 h-6 shrink-0" viewBox="0 0 512 512">
                  <path fill="#410585" d="M92.2 41.9C83.8 46.1 78 54.6 78 65v382c0 10.4 5.8 18.9 14.2 23.1l208.6-208.6L92.2 41.9z"/>
                  <path fill="#04c272" d="M382.1 216.9l-81.3-46.9-22.1 22.1 22.1 22.1 81.3-46.9c13.7-7.9 13.7-20.7 0-28.6z"/>
                  <path fill="#ff3a44" d="M92.2 470.1l208.6-208.6 46.9 46.9-208.6 120.4c-13.7 7.9-26.2 3.6-26.2-12.1 0-7.3 3.9-18.7 19.3-27.5z"/>
                  <path fill="#fbb034" d="M92.2 41.9l228.6 131.9-46.9 46.9L92.2 41.9z"/>
                </svg>
                <div className="text-left leading-none">
                  <div className="text-[10px] uppercase tracking-wider text-slate-400 font-medium mb-1">
                    Disponible sur Android
                  </div>
                  <div className="text-sm font-extrabold tracking-tight text-white flex items-center gap-1.5">
                    <span>Google Play</span>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-bold px-1.5 py-0.5 rounded">4.9 ★</span>
                  </div>
                </div>
              </a>
            </motion.div>

            {/* Trust bullet points */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm font-medium text-slate-500"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Sans carte bancaire</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Compatible Wave & Orange Money</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Création en 2 minutes</span>
              </div>
            </motion.div>

            {/* Audio Voice Note Simulation Box */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="w-full mt-4 p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-between gap-3"
            >
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    isPlayingAudio 
                      ? 'bg-emerald-500 text-white animate-pulse' 
                      : 'bg-blue-50 text-[#0066FF] hover:bg-blue-100'
                  }`}
                >
                  {isPlayingAudio ? <Volume2 className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                </button>
                <div className="text-xs">
                  <div className="font-bold text-slate-800 flex items-center gap-1.5">
                    <span>« Fatou, enregistre 15 000 FCFA reçu par Wave »</span>
                  </div>
                  <span className="text-slate-500">Écouter l'assistant répondre instantanément</span>
                </div>
              </div>
              {onOpenAssistant && (
                <button
                  onClick={onOpenAssistant}
                  className="text-xs font-bold text-[#0066FF] hover:underline whitespace-nowrap bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100"
                >
                  Tester l'IA ➔
                </button>
              )}
            </motion.div>

          </motion.div>

          {/* Right Visual Column: Smartphone Mockup Frame */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
          >
            
            {/* Top Floating Badge 1 */}
            <motion.div 
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-4 -left-2 sm:left-4 z-20 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-slate-200 shadow-xl flex items-center gap-2.5"
            >
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-lg">
                🇸🇳
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">IA Bilingue Wolof & FR</div>
                <div className="text-[10px] text-slate-500">Comprend le dialecte local</div>
              </div>
            </motion.div>

            {/* Bottom Floating Badge 2 */}
            <motion.div 
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-2 sm:right-2 z-20 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl border border-slate-200 shadow-xl flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-xl bg-sky-500 flex items-center justify-center text-white font-bold text-xs shadow-md">
                🌊
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900 flex items-center gap-1">
                  <span>+25 000 FCFA</span>
                  <span className="text-emerald-600 text-[10px] bg-emerald-50 px-1.5 py-0.2 rounded font-bold">Reçu</span>
                </div>
                <div className="text-[10px] text-slate-500">Paiement automatique Wave</div>
              </div>
            </motion.div>

            {/* Phone Mockup Body */}
            <div className="w-full max-w-sm bg-slate-900 p-3 rounded-[40px] shadow-2xl border-4 border-slate-800 relative transform rotate-1 hover:rotate-0 transition-transform duration-300">
              
              {/* Phone Top Notch */}
              <div className="w-32 h-4 bg-slate-800 rounded-b-xl mx-auto mb-2 flex items-center justify-center">
                <div className="w-12 h-1 bg-slate-700 rounded-full" />
              </div>

              {/* Screen Content */}
              <div className="bg-slate-50 rounded-[30px] overflow-hidden border border-slate-200">
                
                {/* Phone Header App Bar */}
                <div className="bg-white px-4 py-3 border-b border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#0066FF] flex items-center justify-center text-white font-bold text-xs shadow-sm">
                      D
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Fatou • Diayma IA</h4>
                      <p className="text-[10px] text-emerald-600 font-medium flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                        En ligne • Direct Live
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] bg-slate-100 text-slate-700 px-2 py-1 rounded-md font-bold">
                    Sénégal 🇸🇳
                  </span>
                </div>

                {/* Live Shopping Stream Header */}
                <div className="relative bg-slate-900 text-white p-3 flex items-center justify-between overflow-hidden">
                  <div className="absolute inset-0 opacity-40 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900"></div>
                  <div className="relative z-10 flex items-center gap-2">
                    <span className="bg-red-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full flex items-center gap-1 animate-pulse">
                      <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                      LIVE TIKTOK
                    </span>
                    <span className="text-[11px] font-semibold text-slate-200">348 Vendeuses</span>
                  </div>
                  <div className="relative z-10 text-[10px] text-emerald-400 font-bold bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                    49 Ventes aujourd'hui
                  </div>
                </div>

                {/* Chat Feed inside Phone */}
                <div className="p-3.5 space-y-3 min-h-[310px] max-h-[330px] overflow-y-auto bg-slate-50 text-xs">
                  
                  {/* System Date Badge */}
                  <div className="text-center my-1">
                    <span className="bg-slate-200/80 text-slate-600 text-[10px] px-2.5 py-0.5 rounded-full font-medium">
                      Aujourd'hui à Dakar
                    </span>
                  </div>

                  {/* User Voice Note Bubble */}
                  <div className="flex justify-end">
                    <div className="bg-[#0066FF] text-white p-3 rounded-2xl rounded-tr-none max-w-[85%] shadow-sm">
                      <div className="flex items-center gap-2 mb-1">
                        <Mic className="w-3.5 h-3.5 text-blue-200" />
                        <span className="font-semibold text-[11px]">Vocal envoyé (0:09)</span>
                      </div>
                      <p className="text-[11px] text-blue-50 leading-tight italic">
                        « Fatou, enregistre 18 000 FCFA pour la Robe Boubou payée par Wave par Awa Sow »
                      </p>
                    </div>
                  </div>

                  {/* Assistant Response Card */}
                  <div className="flex justify-start">
                    <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-none max-w-[90%] shadow-sm space-y-2">
                      <div className="flex items-center gap-1.5 text-[#0066FF] font-bold text-[11px]">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Vente confirmée & enregistrée</span>
                      </div>
                      
                      <div className="bg-emerald-50 p-2 rounded-xl border border-emerald-100 flex items-center justify-between">
                        <div>
                          <div className="font-bold text-slate-900 text-[11px]">Robe Boubou Soie</div>
                          <div className="text-[10px] text-slate-500">Awa Sow • Wave Money</div>
                        </div>
                        <div className="text-right">
                          <div className="font-extrabold text-emerald-700 text-xs">18.000 F</div>
                          <div className="text-[9px] text-emerald-600">Encaissements</div>
                        </div>
                      </div>

                      {/* Stock Alert Chip */}
                      <div className="bg-amber-50 border border-amber-200 p-2 rounded-xl text-[10px] text-amber-900 flex items-center justify-between">
                        <span>⚠️ Stock Boubou Soie: <strong>plus que 2 unités !</strong></span>
                      </div>
                    </div>
                  </div>

                  {/* Customer Order Pill */}
                  <div className="bg-blue-50 border border-blue-200 p-2.5 rounded-xl text-[11px] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShoppingBag className="w-4 h-4 text-[#0066FF]" />
                      <div>
                        <span className="font-bold text-slate-800">Lien de paiement généré</span>
                        <p className="text-[9px] text-slate-500">Envoyé sur le WhatsApp d'Awa</p>
                      </div>
                    </div>
                    <span className="bg-[#0066FF] text-white font-bold text-[10px] px-2 py-1 rounded-md">
                      Copier
                    </span>
                  </div>

                </div>

                {/* Bottom Input Bar */}
                <div className="p-2.5 bg-white border-t border-slate-200 flex items-center gap-2">
                  <div className="flex-1 bg-slate-100 px-3 py-2 rounded-full text-slate-400 text-xs flex items-center justify-between">
                    <span>Écrivez ou parlez à Fatou...</span>
                    <Sparkles className="w-3.5 h-3.5 text-[#0066FF]" />
                  </div>
                  <button 
                    onClick={onOpenAssistant}
                    className="w-8 h-8 rounded-full bg-[#0066FF] text-white flex items-center justify-center hover:bg-[#0052CC]"
                  >
                    <Mic className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};


