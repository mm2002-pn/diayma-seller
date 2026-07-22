import React from 'react';
import { Heart, MapPin, Phone, Mail, Smartphone } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="inline-block">
              <Logo variant="dark" size="md" />
            </a>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed font-normal">
              La plateforme tout-en-un de vente en ligne et live shopping pour les commerçantes au Sénégal. Vendez en direct, encaissez instantanément par Wave & Orange Money et gérez vos clients avec l'IA.
            </p>

            {/* Mobile App Downloads Big Cards in Footer */}
            <div className="pt-2 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-[#0066FF]" />
                <span>Télécharger l'application mobile Diayma</span>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#application-mobile"
                  className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white border border-slate-800 transition-all hover:border-blue-500/50"
                >
                  <svg className="w-5 h-5 fill-current shrink-0 text-white" viewBox="0 0 384 512">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-92.1-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-15 69.5-34.3z"/>
                  </svg>
                  <div className="text-left leading-none">
                    <div className="text-[9px] uppercase text-slate-400 font-medium">Télécharger iOS</div>
                    <div className="text-xs font-bold text-white">App Store</div>
                  </div>
                </a>

                <a
                  href="#application-mobile"
                  className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white border border-slate-800 transition-all hover:border-blue-500/50"
                >
                  <svg className="w-4 h-4 shrink-0" viewBox="0 0 512 512">
                    <path fill="#410585" d="M92.2 41.9C83.8 46.1 78 54.6 78 65v382c0 10.4 5.8 18.9 14.2 23.1l208.6-208.6L92.2 41.9z"/>
                    <path fill="#04c272" d="M382.1 216.9l-81.3-46.9-22.1 22.1 22.1 22.1 81.3-46.9c13.7-7.9 13.7-20.7 0-28.6z"/>
                    <path fill="#ff3a44" d="M92.2 470.1l208.6-208.6 46.9 46.9-208.6 120.4c-13.7 7.9-26.2 3.6-26.2-12.1 0-7.3 3.9-18.7 19.3-27.5z"/>
                    <path fill="#fbb034" d="M92.2 41.9l228.6 131.9-46.9 46.9L92.2 41.9z"/>
                  </svg>
                  <div className="text-left leading-none">
                    <div className="text-[9px] uppercase text-slate-400 font-medium">Disponible Android</div>
                    <div className="text-xs font-bold text-white">Google Play</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <div className="px-3 py-1 rounded-lg bg-[#00C3F8]/10 text-[#00C3F8] border border-[#00C3F8]/30 text-xs font-bold flex items-center gap-1.5">
                🌊 Wave Money
              </div>
              <div className="px-3 py-1 rounded-lg bg-[#FF6600]/10 text-[#FF6600] border border-[#FF6600]/30 text-xs font-bold flex items-center gap-1.5">
                🟠 Orange Money
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase font-extrabold tracking-wider text-[#0066FF]">
              Plateforme
            </h3>
            <ul className="space-y-2 text-xs text-slate-400 font-normal">
              <li><a href="#fonctionnalites" className="hover:text-white transition-colors">Fonctionnalités</a></li>
              <li><a href="#application-mobile" className="hover:text-white transition-colors flex items-center gap-1.5 text-white font-semibold"><span>App Mobile iOS & Android</span></a></li>
              <li><a href="#assistante-ia" className="hover:text-white transition-colors">Assistante IA Fatou</a></li>
              <li><a href="#comment-ca-marche" className="hover:text-white transition-colors">Comment ça marche</a></li>
              <li><a href="#temoignages" className="hover:text-white transition-colors">Témoignages Vendeuses</a></li>
            </ul>
          </div>

          {/* Support & Legal */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase font-extrabold tracking-wider text-[#0066FF]">
              Informations & Légal
            </h3>
            <ul className="space-y-2 text-xs text-slate-400 font-normal">
              <li><a href="#" className="hover:text-white transition-colors">Conditions Générales d'Utilisation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Politique de Confidentialité</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Guide du Live Shopping</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Aide & FAQ</a></li>
            </ul>
          </div>

          {/* Contact Senegal */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase font-extrabold tracking-wider text-[#0066FF]">
              Contact Sénégal
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-400 font-normal">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#0066FF] flex-shrink-0" />
                <span>Dakar, Plateau, Sénégal</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#0066FF] flex-shrink-0" />
                <span>+221 77 000 00 00</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#0066FF] flex-shrink-0" />
                <span>contact@diayema.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Diayma. Tous droits réservés.</p>
          <div className="flex items-center gap-1.5 font-medium text-slate-300">
            <span>Fait avec</span>
            <Heart className="w-3.5 h-3.5 fill-red-500 text-red-500 animate-pulse" />
            <span>au Sénégal 🇸🇳</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

