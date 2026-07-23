import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Smartphone, Bell, Package, Mic, BarChart2, ArrowRight, QrCode, Send, Check } from 'lucide-react';

interface MobileAppSectionProps {
  onOpenSignup?: () => void;
}

export const MobileAppSection: React.FC<MobileAppSectionProps> = ({ onOpenSignup }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [linkSent, setLinkSent] = useState(false);
  const [showQRModal, setShowQRModal] = useState(false);

  const handleSendLink = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber.trim()) return;
    setLinkSent(true);
    setTimeout(() => {
      setLinkSent(false);
      setPhoneNumber('');
    }, 4000);
  };

  return (
    <section id="application-mobile" className="py-20 md:py-28 bg-gradient-to-b from-white via-blue-50/40 to-slate-50 relative overflow-hidden border-b border-slate-100">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-extrabold text-[#0066FF]">
              <Smartphone className="w-4 h-4 text-[#0066FF]" />
              <span>APPLICATION MOBILE OFFICIELLE IOS & ANDROID</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Gérez votre boutique où que vous soyez.{' '}
              <span className="text-[#0066FF]">Directement sur votre téléphone.</span>
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              L'application mobile Diayma est disponible gratuitement sur l'App Store et Google Play. Conçue spécialement pour les commerçantes au Sénégal : fluide, ultra-rapide et utilisable même avec une connexion internet limitée.
            </p>

            {/* Enormously Enlarged App Store & Google Play Download Badges */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              
              {/* Giant App Store Button */}
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#download-ios"
                onClick={(e) => {
                  e.preventDefault();
                  if (onOpenSignup) onOpenSignup();
                }}
                className="flex-1 inline-flex items-center justify-between px-6 py-4.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white shadow-2xl shadow-slate-900/20 border border-slate-700 transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  {/* Apple Logo SVG */}
                  <svg className="w-9 h-9 fill-current shrink-0 text-white" viewBox="0 0 384 512">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-92.1-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-15 69.5-34.3z"/>
                  </svg>
                  <div className="text-left leading-tight">
                    <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-0.5">
                      Télécharger sur l'
                    </div>
                    <div className="text-lg font-black tracking-tight text-white">
                      App Store
                    </div>
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-lg border border-emerald-500/30">
                  4.9 ★
                </span>
              </motion.a>

              {/* Giant Google Play Button */}
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#download-android"
                onClick={(e) => {
                  e.preventDefault();
                  if (onOpenSignup) onOpenSignup();
                }}
                className="flex-1 inline-flex items-center justify-between px-6 py-4.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white shadow-2xl shadow-slate-900/20 border border-slate-700 transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  {/* Google Play SVG */}
                  <svg className="w-8 h-8 shrink-0" viewBox="0 0 512 512">
                    <path fill="#410585" d="M92.2 41.9C83.8 46.1 78 54.6 78 65v382c0 10.4 5.8 18.9 14.2 23.1l208.6-208.6L92.2 41.9z"/>
                    <path fill="#04c272" d="M382.1 216.9l-81.3-46.9-22.1 22.1 22.1 22.1 81.3-46.9c13.7-7.9 13.7-20.7 0-28.6z"/>
                    <path fill="#ff3a44" d="M92.2 470.1l208.6-208.6 46.9 46.9-208.6 120.4c-13.7 7.9-26.2 3.6-26.2-12.1 0-7.3 3.9-18.7 19.3-27.5z"/>
                    <path fill="#fbb034" d="M92.2 41.9l228.6 131.9-46.9 46.9L92.2 41.9z"/>
                  </svg>
                  <div className="text-left leading-tight">
                    <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-0.5">
                      Disponible sur
                    </div>
                    <div className="text-lg font-black tracking-tight text-white">
                      Google Play
                    </div>
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-lg border border-emerald-500/30">
                  4.9 ★
                </span>
              </motion.a>

            </div>

            {/* QR Code & Direct Link Proposal Box */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-lg space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0066FF] flex items-center justify-center font-bold shrink-0">
                    <QrCode className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Installer par QR Code ou SMS</h4>
                    <p className="text-xs text-slate-500">Scannez directement ou recevez le lien par SMS / WhatsApp</p>
                  </div>
                </div>

                <button
                  onClick={() => setShowQRModal(!showQRModal)}
                  className="px-3.5 py-1.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#0066FF] font-bold text-xs transition-colors shrink-0"
                >
                  {showQRModal ? "Masquer QR Code" : "Afficher QR Code"}
                </button>
              </div>

              {showQRModal && (
                <div className="p-4 bg-slate-900 text-white rounded-xl flex items-center gap-5 animate-in fade-in duration-200">
                  <div className="w-24 h-24 bg-white p-2 rounded-lg shrink-0 flex items-center justify-center">
                    <img 
                      src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://diayma.app/download" 
                      alt="QR Code Téléchargement Diayma"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="space-y-1.5 text-xs">
                    <div className="font-bold text-white text-sm">Scannez avec votre téléphone</div>
                    <p className="text-slate-300 leading-relaxed">
                      Ouvrez l'appareil photo de votre iPhone ou Android pour accéder directement à la page officielle de téléchargement.
                    </p>
                    <div className="text-[11px] text-emerald-400 font-semibold">✔ Téléchargement sécurisé 100% officiel</div>
                  </div>
                </div>
              )}

              {/* SMS / WhatsApp Form */}
              <form onSubmit={handleSendLink} className="flex gap-2">
                <input
                  type="tel"
                  placeholder="Ex: 77 000 00 00 (Lien par SMS/WhatsApp)"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="flex-1 bg-slate-50 border border-slate-200 focus:border-[#0066FF] focus:bg-white text-slate-900 text-xs sm:text-sm rounded-xl px-4 py-2.5 focus:outline-none transition-all"
                />
                <button
                  type="submit"
                  disabled={linkSent}
                  className="px-4 py-2.5 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all shrink-0"
                >
                  {linkSent ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-300" />
                      <span>Lien Envoyé !</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Envoyer le lien</span>
                    </>
                  )}
                </button>
              </form>
            </div>


            {/* 4 Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-1.5">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#0066FF] flex items-center justify-center font-bold">
                  <Bell className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">Alertes commandes en temps réel</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Notification sonore dès qu'une commande est passée — Wave, Orange Money ou livraison.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-1.5">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#0066FF] flex items-center justify-center font-bold">
                  <Package className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">Catalogue depuis votre téléphone</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Ajoutez ou modifiez vos produits en quelques secondes avec l'appareil photo.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-1.5">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#0066FF] flex items-center justify-center font-bold">
                  <Mic className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">DIAYEMA — assistante vocale IA</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Posez vos questions en wolof ou en français : résumé du jour, commandes, clients.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-1.5">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#0066FF] flex items-center justify-center font-bold">
                  <BarChart2 className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">Tableau de bord instantané</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Suivez votre chiffre d'affaires, vos meilleures ventes et vos statistiques live.
                </p>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Real Seller App Screenshots */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            {/* Screenshot 1: Catalogue & préparation live */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-tr from-blue-200/20 to-indigo-100/10 blur-xl rounded-2xl pointer-events-none" />
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/70 bg-white">
                <img
                  src="/screens/parcours_vendeur_1.png"
                  alt="Gestion catalogue et préparation live sur Diayma"
                  className="w-full h-auto block"
                />
              </div>
              <p className="mt-2 text-center text-[11px] text-slate-400 font-medium">
                Catalogue · Ajout produit · Préparation live
              </p>
            </div>

            {/* Screenshot 2: Live en direct & dashboard */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-bl from-emerald-100/20 to-blue-100/10 blur-xl rounded-2xl pointer-events-none" />
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/70 bg-white">
                <img
                  src="/screens/parcours_vendeur_2.png"
                  alt="Live en direct, commandes et tableau de bord Diayma"
                  className="w-full h-auto block"
                />
              </div>
              <p className="mt-2 text-center text-[11px] text-slate-400 font-medium">
                Live en direct · Commandes · Tableau de bord
              </p>
            </div>

            {/* CTA */}
            <button
              onClick={onOpenSignup}
              className="mt-2 w-full py-3.5 rounded-2xl bg-[#0066FF] hover:bg-[#0052CC] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 transition-all"
            >
              <span>Commencer gratuitement</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
