import React, { useState } from 'react';
import { X, Heart, ShoppingBag, Zap, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { SAMPLE_LIVE_COMMENTS } from '@/data/landingData';
import { Logo } from './Logo';

interface LiveDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSignup: () => void;
}

export const LiveDemoModal: React.FC<LiveDemoModalProps> = ({ isOpen, onClose, onOpenSignup }) => {
  const [selectedProduct] = useState({
    title: 'Robe Wax Hollandais & Dentelle',
    price: '28 000 FCFA',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    stock: 4
  });

  const [paymentSuccess, setPaymentSuccess] = useState<string | null>(null);
  const [likesCount, setLikesCount] = useState(142);

  if (!isOpen) return null;

  const handleBuy = (method: 'Wave' | 'Orange Money') => {
    setPaymentSuccess(method);
    setTimeout(() => {
      setPaymentSuccess(null);
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-md p-3 sm:p-6 flex items-center justify-center animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-white text-slate-900 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-2xl my-auto">
        
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo size="sm" variant="light" />
            <div className="hidden sm:flex items-center gap-2 border-l border-slate-200 pl-3">
              <span className="text-xs font-bold text-slate-700">Studio Live</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-600 text-white font-bold uppercase tracking-wide animate-pulse">
                ● Direct
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:bg-slate-200 hover:text-slate-700 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 p-4 sm:p-6 gap-6">
          
          {/* Left Column: Simulated Video Screen */}
          <div className="lg:col-span-7 relative rounded-2xl overflow-hidden bg-slate-950 aspect-[9/12] border border-slate-800 flex flex-col justify-between p-4 bg-cover bg-center"
               style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.85)), url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800')` }}>
            
            {/* Top Live Stats */}
            <div className="flex items-center justify-between z-10">
              <div className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>412 Spectatrices en direct</span>
              </div>
              <div className="bg-[#0066FF] text-white font-bold px-3 py-1 rounded-full text-xs shadow-md">
                Chiffre live: 385 000 FCFA
              </div>
            </div>

            {/* Middle Notification Toast if simulated purchase */}
            {paymentSuccess && (
              <div className="z-30 my-auto bg-emerald-600 text-white p-4 rounded-2xl shadow-2xl border-2 border-emerald-400 animate-in zoom-in-95 duration-200">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-8 h-8 text-white flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm">Paiement {paymentSuccess} Validé !</h4>
                    <p className="text-xs text-emerald-100">
                      Commande de 28 000 FCFA confirmée. SMS de reçu envoyé et fonds crédités.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Comments Feed */}
            <div className="space-y-2 z-10 mt-auto">
              <div className="bg-black/70 backdrop-blur-md p-3 rounded-2xl text-xs space-y-1.5 border border-white/10 max-h-36 overflow-y-auto">
                {SAMPLE_LIVE_COMMENTS.map((c) => (
                  <div key={c.id} className="flex items-start gap-2 text-white/90">
                    <img src={c.avatar} alt={c.user} className="w-5 h-5 rounded-full object-cover mt-0.5" />
                    <div>
                      <span className="font-bold text-[#0066FF] mr-1.5">{c.user} :</span>
                      <span>{c.text}</span>
                      {c.isOrder && (
                        <span className="ml-2 font-mono text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded font-bold">
                          {c.amount}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Toolbar */}
              <div className="flex items-center gap-2 pt-2">
                <div className="flex-1 bg-white/20 backdrop-blur-md px-3 py-2 rounded-xl text-xs text-white">
                  Tapez un commentaire...
                </div>
                <button
                  onClick={() => setLikesCount(prev => prev + 1)}
                  className="p-2 bg-red-500/80 hover:bg-red-600 rounded-xl text-white font-bold text-xs flex items-center gap-1 transition-all"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  <span>{likesCount}</span>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Featured Live Product & Payment simulation */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0066FF]">
                <ShoppingBag className="w-4 h-4" />
                <span>Article Présenté en Direct</span>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl space-y-3">
                <div className="flex gap-4">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                    className="w-20 h-24 object-cover rounded-xl border border-slate-200 shadow-sm"
                  />
                  <div className="flex-1">
                    <h4 className="font-bold text-base text-slate-900">
                      {selectedProduct.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1">
                      Tissu Wax Hollando-Sénégalais authentique. Tailles S, M, L, XL.
                    </p>
                    <div className="mt-2 text-xl font-extrabold text-[#0066FF]">
                      {selectedProduct.price}
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600 font-medium">
                  <span>Stock restants : <strong className="text-amber-600">{selectedProduct.stock} pièces</strong></span>
                  <span className="text-emerald-600 font-bold">Paiement 1-click</span>
                </div>
              </div>

              {/* Payment Method Simulators */}
              <div className="space-y-3 pt-2">
                <span className="text-xs uppercase font-bold tracking-wider text-slate-600 block">
                  Simuler un achat cliente :
                </span>

                <button
                  onClick={() => handleBuy('Wave')}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#00C3F8] hover:bg-[#00A8D8] text-white font-bold text-sm flex items-center justify-between transition-all shadow-lg group"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-base">🌊</span>
                    <span>Payer {selectedProduct.price} par Wave</span>
                  </div>
                  <Zap className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                </button>

                <button
                  onClick={() => handleBuy('Orange Money')}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#FF6600] hover:bg-[#E05A00] text-white font-bold text-sm flex items-center justify-between transition-all shadow-lg group"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-base">🟠</span>
                    <span>Payer {selectedProduct.price} par Orange Money</span>
                  </div>
                  <Zap className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                </button>
              </div>

              <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 text-[11px] text-slate-600 space-y-1">
                <div className="flex items-center gap-1.5 text-[#0066FF] font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Déroulement instantané :</span>
                </div>
                <p>1. La cliente clique sur le lien Wave/Orange Money.</p>
                <p>2. Le paiement est validé en 3 secondes.</p>
                <p>3. Les fonds arrivent immédiatement sur le téléphone de la vendeuse.</p>
              </div>
            </div>

            {/* Bottom CTA to open seller account */}
            <div className="pt-4 border-t border-slate-100">
              <button
                onClick={() => {
                  onClose();
                  onOpenSignup();
                }}
                className="w-full py-3.5 rounded-full bg-[#0066FF] text-white font-bold text-xs uppercase tracking-wide hover:bg-[#0052CC] transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
              >
                <span>Créer ma propre boutique sur Diayma</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

