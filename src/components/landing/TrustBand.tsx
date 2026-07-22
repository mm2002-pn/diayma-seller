import React from 'react';
import { Smartphone, Zap, ShieldCheck, CheckCircle2, MapPin } from 'lucide-react';

export const TrustBand: React.FC = () => {
  const cities = ['Dakar', 'Thiès', 'Saint-Louis', 'Kaolack', 'Ziguinchor', 'Abidjan', 'Bamako'];

  return (
    <section className="bg-white py-12 md:py-16 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* City Pills Banner (ToftalApp Style) */}
        <div className="mb-12 flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold tracking-wide uppercase mb-4">
            <MapPin className="w-3.5 h-3.5 text-[#0066FF]" />
            Pensé pour les vendeuses du Sénégal et d'Afrique de l'Ouest
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-3xl">
            {cities.map((city, idx) => (
              <span
                key={idx}
                className="px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200/80 text-slate-700 text-xs font-semibold hover:border-blue-300 hover:bg-blue-50/50 hover:text-[#0066FF] transition-all cursor-default"
              >
                {city} 🇸🇳
              </span>
            ))}
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto space-y-2 mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Paiements Mobile Money intégrés & reversements instantanés
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Offrez l’expérience d'achat la plus fluide à vos clientes sénégalaises sans aucune démarche bancaire lourde.
          </p>
        </div>

        {/* Payment Partner Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Wave Card */}
          <div className="p-6 rounded-2xl bg-sky-50/50 border border-sky-200/80 flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500 text-white font-bold flex items-center justify-center text-lg shadow-sm">
                    🌊
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900">Wave Money</h3>
                    <p className="text-xs text-slate-500">Paiement QR & App</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-sky-100 text-sky-800">1-Click</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Validation directe sans quitter le direct. Vos clientes paient instantanément via l'application Wave.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-sky-200/60 flex items-center gap-1.5 text-xs text-sky-900 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-sky-600" />
              <span>Reversement immédiat</span>
            </div>
          </div>

          {/* Orange Money Card */}
          <div className="p-6 rounded-2xl bg-orange-50/50 border border-orange-200/80 flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-500 text-white font-bold flex items-center justify-center text-lg shadow-sm">
                    🟠
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900">Orange Money</h3>
                    <p className="text-xs text-slate-500">Code USSD & App OM</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-orange-100 text-orange-800">Sécurisé</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Compatible avec tous les téléphones au Sénégal. Reçu et notification d'encaissement automatique.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-orange-200/60 flex items-center gap-1.5 text-xs text-orange-900 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-orange-600" />
              <span>Disponible 24h/24 7j/7</span>
            </div>
          </div>

          {/* Guarantee 1: Sans Compte Bancaire */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 flex flex-col justify-between hover:shadow-md transition-all shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0066FF] flex items-center justify-center mb-4 font-bold">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900 mb-1.5">
                Sans compte bancaire
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Aucun papier administratif ni démarches longues. Votre simple numéro de téléphone sénégalais suffit.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-700 font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#0066FF]" />
              <span>Accès universel pour toutes</span>
            </div>
          </div>

          {/* Guarantee 2: Zero délai */}
          <div className="p-6 rounded-2xl bg-slate-900 text-white flex flex-col justify-between shadow-lg">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#0066FF] text-white flex items-center justify-center mb-4 font-bold shadow-md">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-white mb-1.5">
                Zero délai de trésorerie
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                L'argent de chaque commande va directement sur votre propre numéro Mobile Money en quelques secondes.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center gap-1.5 text-xs text-emerald-400 font-bold">
              <span>🚀 Encaissements directs</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

