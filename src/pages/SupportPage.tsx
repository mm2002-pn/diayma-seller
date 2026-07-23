import { useState } from 'react';
import { Mail, Phone, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { Logo } from '@/components/landing/Logo';

const FAQ = [
  {
    q: "Comment passer une commande pendant un live ?",
    a: "Ouvrez le lien de la boutique de la vendeuse, parcourez le catalogue, tapez sur un article pour sélectionner la taille/couleur, puis appuyez sur « Commander ». Vous serez guidé pour payer via Wave ou Orange Money en quelques secondes."
  },
  {
    q: "Quels modes de paiement sont acceptés ?",
    a: "Diayma accepte Wave Money, Orange Money et le paiement à la livraison (COD). Le paiement en ligne est sécurisé et instantané."
  },
  {
    q: "Ma commande a-t-elle bien été enregistrée ?",
    a: "Après validation, vous recevez un message de confirmation sur l'écran avec le numéro de votre commande. La vendeuse vous contactera directement sur votre numéro de téléphone pour confirmer la livraison."
  },
  {
    q: "Comment suivre ma livraison ?",
    a: "La vendeuse vous contacte par téléphone ou WhatsApp pour organiser la livraison. En cas de problème, contactez notre équipe d'assistance ci-dessous."
  },
  {
    q: "Je suis vendeuse — comment m'inscrire sur Diayma ?",
    a: "Rendez-vous sur diayema.com et cliquez sur « Commencer gratuitement ». L'inscription est gratuite et prend moins de 2 minutes. Notre équipe vous accompagne pour la prise en main."
  },
  {
    q: "Comment signaler un problème avec une commande ?",
    a: "Contactez-nous par e-mail à contact@diayema.com ou via WhatsApp au +221 77 488 24 53 en indiquant votre numéro de commande. Nous traitons les demandes sous 24h."
  },
  {
    q: "Comment supprimer mon compte ?",
    a: "Envoyez une demande à contact@diayema.com depuis le numéro de téléphone associé à votre compte. Nous procéderons à la suppression dans un délai de 7 jours ouvrables."
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-100 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-slate-50 transition-colors"
      >
        <span className="text-sm font-semibold text-slate-800 pr-4">{q}</span>
        {open
          ? <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" />
          : <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
        }
      </button>
      {open && (
        <div className="px-5 pb-4 text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50">
          <p className="pt-3">{a}</p>
        </div>
      )}
    </div>
  );
}

export function SupportPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-slate-100 py-4 px-6">
        <a href="/" className="inline-block">
          <Logo variant="light" size="sm" />
        </a>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-12">
        <p className="text-xs text-slate-400 mb-2 uppercase tracking-widest font-semibold">Diayma — Assistance</p>
        <h1 className="text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">Comment pouvons-nous vous aider ?</h1>
        <p className="text-slate-500 text-sm mb-10 leading-relaxed">
          Notre équipe est disponible pour vous accompagner, que vous soyez acheteur ou vendeuse sur Diayma.
        </p>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <a
            href="mailto:contact@diayema.com"
            className="flex flex-col items-center gap-3 p-5 rounded-2xl border border-slate-200 hover:border-[#0066FF]/40 hover:bg-blue-50/30 transition-all text-center group"
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-[#0066FF] transition-colors">
              <Mail className="w-5 h-5 text-[#0066FF] group-hover:text-white transition-colors" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-800">E-mail</div>
              <div className="text-xs text-slate-500 mt-0.5 break-all">contact@diayema.com</div>
            </div>
          </a>

          <a
            href="https://wa.me/221774882453"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 p-5 rounded-2xl border border-slate-200 hover:border-emerald-400/50 hover:bg-emerald-50/30 transition-all text-center group"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
              <MessageCircle className="w-5 h-5 text-emerald-600 group-hover:text-white transition-colors" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-800">WhatsApp</div>
              <div className="text-xs text-slate-500 mt-0.5">+221 77 488 24 53</div>
            </div>
          </a>

          <a
            href="tel:+221774882453"
            className="flex flex-col items-center gap-3 p-5 rounded-2xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all text-center group"
          >
            <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center group-hover:bg-slate-800 transition-colors">
              <Phone className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-800">Téléphone</div>
              <div className="text-xs text-slate-500 mt-0.5">+221 77 488 24 53</div>
            </div>
          </a>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-2xl px-5 py-4 mb-12 text-sm text-slate-700">
          <span className="font-semibold text-[#0066FF]">Horaires d'assistance :</span>{' '}
          Lundi – Samedi, 8h00 – 20h00 (heure de Dakar). Nous répondons aux e-mails sous 24h.
        </div>

        {/* FAQ */}
        <h2 className="text-lg font-extrabold text-slate-900 mb-4 tracking-tight">Questions fréquentes</h2>
        <div className="space-y-2">
          {FAQ.map((item, i) => (
            <FaqItem key={i} q={item.q} a={item.a} />
          ))}
        </div>

        {/* Address */}
        <div className="mt-12 pt-8 border-t border-slate-100 text-sm text-slate-500 space-y-1">
          <p className="font-semibold text-slate-700">REAXION — Éditeur de Diayma</p>
          <p>Km 5, Avenue Cheikh Anta Diop, Yoff Océan, en face Résidence Mame Ndiare</p>
          <p>10200 Dakar, Sénégal</p>
        </div>
      </main>

      <footer className="border-t border-slate-100 py-8 mt-8 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} REAXION. Tous droits réservés. —{' '}
        <a href="/" className="hover:text-slate-600 transition-colors">Diayma</a>
        {' '}·{' '}
        <a href="/politique-de-confidentialite" className="hover:text-slate-600 transition-colors">Politique de confidentialité</a>
      </footer>
    </div>
  );
}
