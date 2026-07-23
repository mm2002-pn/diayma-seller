import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Bot, Send, CheckCircle2, Copy, Check, MessageSquare, Mic } from 'lucide-react';
import { PRESET_AI_PROMPTS } from '@/data/landingData';

interface AIAssistantSectionProps {
  onOpenAssistantWithPrompt: (prompt: string) => void;
}

export const AIAssistantSection: React.FC<AIAssistantSectionProps> = ({ onOpenAssistantWithPrompt }) => {
  const [copiedText, setCopiedText] = useState(false);

  const sampleAiProductText = `✨ *Ensemble Bazin Riche Violet Impérial* 👑

Broderies artisanales faites main à Dakar. Une pièce royale idéale pour vos baptêmes, mariages et grandes occasions.

• Tissu : Bazin Riche Getzner authentique
• Tailles : Sur-mesure (S à 3XL)
• Prix : 35 000 FCFA
• Paiement : 1 clic Wave & Orange Money

🚚 *Livraison express à Dakar en 24h & dans les régions sous 48h !*`;

  const handleCopy = () => {
    navigator.clipboard.writeText(sampleAiProductText);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  return (
    <section id="assistante-ia" className="bg-white text-slate-900 py-20 md:py-28 relative overflow-hidden border-b border-slate-100">
      {/* Background glow ambient */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6 text-left"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-slate-800">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-[#0066FF] font-extrabold">IA DIAYEMA en ligne</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-600">Comprend le Wolof 🇸🇳</span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-slate-900 tracking-tight">
              Votre assistante IA, <br className="hidden sm:inline" />
              <span className="text-[#0066FF]">toujours à vos côtés</span>.
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Une intelligence artificielle conçue pour les commerçantes sénégalaises. Écrivez ou envoyez un message vocal à DIAYEMA : elle résume vos commandes, répond en français et en wolof, et vous aide à gérer votre boutique sans effort.
            </p>

            {/* Preset prompt buttons */}
            <div className="space-y-3 pt-2">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-bold block">
                Exemples de requêtes rapides :
              </span>
              <div className="flex flex-wrap gap-2">
                {PRESET_AI_PROMPTS.map((prompt, idx) => (
                  <button
                    key={idx}
                    onClick={() => onOpenAssistantWithPrompt(prompt)}
                    className="text-xs px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200 text-slate-700 hover:text-[#0066FF] text-left transition-all hover:border-blue-200 flex items-center gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#0066FF]" />
                    <span>{prompt}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button
                onClick={() => onOpenAssistantWithPrompt("Bonjour ! Comment peux-tu m'aider à faire grandir ma boutique ?")}
                className="px-8 py-4 rounded-full bg-[#0066FF] hover:bg-[#0052CC] text-white font-bold text-sm shadow-xl shadow-blue-500/25 transition-all flex items-center gap-3"
              >
                <Bot className="w-5 h-5" />
                <span>Tester l'assistante DIAYEMA</span>
              </button>
            </div>
          </motion.div>

          {/* Right Simulated Chat Interface Box */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="bg-slate-900 border-2 border-slate-800 rounded-3xl p-4 sm:p-6 shadow-2xl space-y-4 text-white">
              
              {/* Chat Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#0066FF] text-white flex items-center justify-center font-bold shadow-md">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-white flex items-center gap-2">
                      DIAYEMA • Assistante Diayma
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-normal px-2 py-0.5 rounded-full border border-emerald-500/40">
                        24/7
                      </span>
                    </h3>
                    <p className="text-xs text-slate-400">Spécialiste commerce & vente Sénégal</p>
                  </div>
                </div>
                <div className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Prête</span>
                </div>
              </div>

              {/* Chat Messages Mock Flow */}
              <div className="space-y-4 max-h-[420px] overflow-y-auto pr-1 text-sm">
                
                {/* Exchange 1: User */}
                <div className="flex justify-end">
                  <div className="bg-[#0066FF] text-white px-4 py-3 rounded-2xl rounded-tr-none max-w-md font-medium text-xs sm:text-sm shadow-md flex items-center gap-2">
                    <Mic className="w-4 h-4 shrink-0 text-blue-200" />
                    <span>DIAYEMA, quelles sont mes commandes en attente ?</span>
                  </div>
                </div>

                {/* Exchange 1: AI */}
                <div className="flex justify-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#1F4D3A] text-white flex-shrink-0 flex items-center justify-center font-bold text-xs">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-slate-800/90 border border-slate-700/80 text-slate-100 p-4 rounded-2xl rounded-tl-none max-w-lg space-y-2 text-xs sm:text-sm">
                    <p className="font-bold text-emerald-400">Tu as 3 commandes en attente :</p>
                    <ul className="space-y-1.5 text-slate-300 font-normal">
                      <li className="flex items-center justify-between gap-4">
                        <span>#47 — Robe Wax • Awa Sow</span>
                        <span className="text-amber-400 font-semibold text-[11px]">PENDING</span>
                      </li>
                      <li className="flex items-center justify-between gap-4">
                        <span>#48 — Bazin violet • Coumba N.</span>
                        <span className="text-amber-400 font-semibold text-[11px]">PENDING</span>
                      </li>
                      <li className="flex items-center justify-between gap-4">
                        <span>#51 — Ensemble soie • Khady B.</span>
                        <span className="text-blue-400 font-semibold text-[11px]">PAYÉE</span>
                      </li>
                    </ul>
                    <p className="text-slate-400 text-[11px]">Veux-tu que je mette à jour un statut ?</p>
                  </div>
                </div>

                {/* Exchange 2: User */}
                <div className="flex justify-end">
                  <div className="bg-[#0066FF] text-white px-4 py-3 rounded-2xl rounded-tr-none max-w-md font-medium text-xs sm:text-sm shadow-md">
                    Rédige-moi une description accrocheuse pour un ensemble Bazin riche violet.
                  </div>
                </div>

                {/* Exchange 2: AI */}
                <div className="flex justify-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#1F4D3A] text-white flex-shrink-0 flex items-center justify-center font-bold text-xs">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-slate-800/90 border border-slate-700/80 text-slate-100 p-4 rounded-2xl rounded-tl-none max-w-lg space-y-3 text-xs sm:text-sm relative">
                    <div className="whitespace-pre-line font-mono text-xs bg-black/40 p-3 rounded-xl border border-slate-700 text-emerald-300 leading-relaxed">
                      {sampleAiProductText}
                    </div>
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-[10px] text-slate-400">Généré en 0.4s</span>
                      <button
                        onClick={handleCopy}
                        className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-700 hover:bg-slate-600 text-xs font-semibold text-white transition-colors"
                      >
                        {copiedText ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-blue-300" />}
                        <span>{copiedText ? 'Copié !' : 'Copier le texte'}</span>
                      </button>
                    </div>
                  </div>
                </div>

              </div>

              {/* Chat Interactive Input Trigger Bar */}
              <div
                onClick={() => onOpenAssistantWithPrompt("Bonjour ! Rédige-moi un message d'annonce pour mon prochain live.")}
                className="cursor-pointer bg-slate-800 hover:bg-slate-700/80 border border-slate-700 hover:border-blue-500 rounded-2xl p-3 flex items-center justify-between text-xs sm:text-sm text-slate-400 transition-all group"
              >
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#0066FF]" />
                  <span>Écrivez ou parlez à l'assistante DIAYEMA...</span>
                </div>
                <div className="w-8 h-8 rounded-xl bg-[#0066FF] group-hover:bg-[#0052CC] text-white flex items-center justify-center font-bold transition-colors">
                  <Send className="w-4 h-4" />
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};


