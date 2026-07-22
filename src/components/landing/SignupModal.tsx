import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Smartphone, Store } from 'lucide-react';
import { Logo } from './Logo';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SignupModal: React.FC<SignupModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState({
    businessName: '',
    fullName: '',
    phone: '',
    city: 'Dakar',
    paymentMethod: 'Wave Money',
    category: 'Mode & Wax'
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleReset = () => {
    setStep(1);
    setFormData({
      businessName: '',
      fullName: '',
      phone: '',
      city: 'Dakar',
      paymentMethod: 'Wave Money',
      category: 'Mode & Wax'
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-md p-3 sm:p-6 flex items-center justify-center animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto bg-white text-slate-900 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-2xl my-auto p-5 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        {step === 1 ? (
          <div>
            {/* Header */}
            <div className="space-y-3 mb-6">
              <Logo size="sm" variant="light" />
              <h3 className="font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                Ouvrez votre boutique en 2 minutes
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-normal">
                Gratuit, sans frais de création et sans compte bancaire.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Nom de votre boutique / marque *
                </label>
                <div className="relative">
                  <Store className="w-4 h-4 text-[#0066FF] absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    placeholder="Ex: Ndeye Wax Dakar, Touba Couture..."
                    className="w-full bg-slate-50 border border-slate-200 focus:border-[#0066FF] focus:bg-white rounded-xl pl-10 pr-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Votre Prénom & Nom *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Ex: Aïssatou Diallo"
                  className="w-full bg-slate-50 border border-slate-200 focus:border-[#0066FF] focus:bg-white rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Numéro Téléphone Sénégal *
                  </label>
                  <div className="relative">
                    <Smartphone className="w-4 h-4 text-[#0066FF] absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="77 000 00 00"
                      className="w-full bg-slate-50 border border-slate-200 focus:border-[#0066FF] focus:bg-white rounded-xl pl-10 pr-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Ville / Région *
                  </label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-[#0066FF] focus:bg-white rounded-xl px-4 py-3 text-slate-900 focus:outline-none transition-colors"
                  >
                    <option value="Dakar">Dakar</option>
                    <option value="Thiès">Thiès</option>
                    <option value="Saint-Louis">Saint-Louis</option>
                    <option value="Kaolack">Kaolack</option>
                    <option value="Ziguinchor">Ziguinchor</option>
                    <option value="Mbour">Mbour / Saly</option>
                    <option value="Touba">Touba</option>
                    <option value="Autre région">Autre région</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Mode d'encaissement *
                  </label>
                  <select
                    value={formData.paymentMethod}
                    onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-[#0066FF] focus:bg-white rounded-xl px-4 py-3 text-slate-900 focus:outline-none transition-colors"
                  >
                    <option value="Wave Money">🌊 Wave Money</option>
                    <option value="Orange Money">🟠 Orange Money</option>
                    <option value="Wave & Orange Money">🌊 + 🟠 Wave & Orange Money</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Catégorie principale
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-[#0066FF] focus:bg-white rounded-xl px-4 py-3 text-slate-900 focus:outline-none transition-colors"
                  >
                    <option value="Mode & Wax">Mode & Wax</option>
                    <option value="Bazin & Tissus">Bazin & Tissus</option>
                    <option value="Bijoux & Accessoires">Bijoux & Accessoires</option>
                    <option value="Cosmétiques & Beauté">Cosmétiques & Beauté</option>
                    <option value="Artisanat & Déco">Artisanat & Déco</option>
                  </select>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#0066FF] hover:bg-[#0052CC] text-white font-bold text-sm transition-all shadow-xl shadow-blue-500/25 flex items-center justify-center gap-2 group"
                >
                  <span>Valider mon inscription</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="pt-2 text-center text-[11px] text-slate-500 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>Vos données sont sécurisées & réservées à Diayma</span>
              </div>
            </form>
          </div>
        ) : (
          /* Step 2: Success Confirmation */
          <div className="text-center space-y-6 py-4 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border-2 border-emerald-400 flex items-center justify-center mx-auto text-3xl">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="font-extrabold text-2xl sm:text-3xl text-slate-900">
                Félicitations, {formData.fullName || 'chère vendeuse'} ! 🇸🇳
              </h3>
              <p className="text-sm text-slate-600 font-normal">
                Votre boutique <strong className="text-[#0066FF]">{formData.businessName || 'Diayma'}</strong> est prête. Vous pouvez désormais lancer votre premier live shopping !
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-left space-y-2">
              <span className="text-[10px] uppercase font-bold text-[#0066FF] tracking-wide">
                Votre lien boutique Diayma unique :
              </span>
              <div className="font-mono text-xs text-blue-700 bg-white p-2.5 rounded-xl border border-slate-200 break-all">
                https://diayma.sn/vendeuse/{(formData.businessName || 'ma-boutique').toLowerCase().replace(/\s+/g, '-')}
              </div>
              <p className="text-[11px] text-slate-500 pt-1">
                ⚡ Encaissement configuré sur <strong>{formData.paymentMethod}</strong> ({formData.phone || '+221 77 000 00 00'}).
              </p>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-3.5 rounded-full bg-[#0066FF] hover:bg-[#0052CC] text-white font-bold text-sm transition-all shadow-lg shadow-blue-500/25"
            >
              Accéder à mon tableau de bord
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

