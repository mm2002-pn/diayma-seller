import {
  ArrowRight,
  Radio,
  ShoppingBag,
  Wallet,
  Sparkles,
  Store,
  Zap,
} from 'lucide-react';

import { StoreButtons } from '@/components/StoreButtons';

export function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      {/* Header */}
      <header className="border-b border-forest/10 bg-cream/85 backdrop-blur sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-lg bg-forest text-cream flex items-center justify-center font-display text-xl font-bold">
              D
            </div>
            <div className="leading-tight">
              <div className="text-xl font-display font-semibold text-forest tracking-tight">
                Diayma
              </div>
              <div className="text-[10px] uppercase tracking-widest text-forest/50 -mt-0.5">
                Vendeuse
              </div>
            </div>
          </div>
          <a
            href="#telechargement"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-forest text-white px-4 h-10 font-semibold text-sm hover:bg-forest/90 transition"
          >
            Télécharger l'app
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cream-100 via-cream to-cream-200 border-b border-forest/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white border border-forest/10 px-3 py-1 text-xs font-medium text-forest/70 mb-6">
              <Sparkles className="h-3 w-3" />
              Bientôt disponible
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium text-forest tracking-tightest leading-[1.05] mb-6">
              Vendre en direct{' '}
              <em className="text-clay not-italic">n'a jamais été aussi simple.</em>
            </h1>
            <p className="text-forest/70 text-lg md:text-xl max-w-xl mb-8 leading-relaxed">
              Diayma, l'app des vendeuses en live shopping au Sénégal. Gère ton
              catalogue, tes lives TikTok / Instagram et tes commandes, tout depuis
              ton téléphone.
            </p>

            <div id="telechargement">
              <StoreButtons />
            </div>

            <p className="mt-6 text-xs text-forest/50">
              Ton compte a été créé par notre équipe ? Tu recevras un SMS avec un lien
              d'activation dès que l'app sera disponible.
            </p>
          </div>

          {/* Visuel */}
          <div className="hidden md:block relative aspect-square max-w-md ml-auto">
            <div
              className="absolute inset-0 rounded-3xl rotate-3"
              style={{
                background:
                  'linear-gradient(135deg, rgba(184,148,95,0.25), rgba(194,78,47,0.15), rgba(31,77,58,0.15))',
              }}
            />
            <div className="relative h-full w-full rounded-3xl bg-forest overflow-hidden shadow-2xl flex flex-col items-center justify-center text-center p-10">
              <div className="font-display text-cream text-8xl leading-none mb-4">D</div>
              <div className="text-cream/70 text-xs uppercase tracking-[0.3em] mb-6">
                Diayma
              </div>
              <div className="text-cream text-xl font-display leading-snug">
                « L'app Diayma me libère du chaos des commandes. »
              </div>
              <div className="text-cream/60 text-sm mt-4">— Aïda D., Dakar</div>
            </div>
          </div>
        </div>
      </section>

      {/* Fonctionnalités */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="text-center mb-14">
          <div className="text-xs uppercase tracking-widest text-forest/50 font-semibold mb-3">
            Fonctionnalités
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-forest tracking-tight">
            Tout ce qu'il faut pour vendre
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              num: '01',
              icon: Store,
              title: 'Ton catalogue',
              desc: 'Ajoute tes produits avec photo, tailles et prix en quelques secondes.',
            },
            {
              num: '02',
              icon: Radio,
              title: 'Lives TikTok / Insta',
              desc: 'Démarre un live depuis ton app, gère les commandes en direct.',
            },
            {
              num: '03',
              icon: ShoppingBag,
              title: 'Commandes',
              desc: 'Suis chaque commande, du paiement à la livraison, sans stress.',
            },
            {
              num: '04',
              icon: Wallet,
              title: 'Paiements',
              desc: 'Orange Money, Wave, ou paiement à la livraison. Ton choix.',
            },
            {
              num: '05',
              icon: Zap,
              title: 'Ton lien perso',
              desc: 'Partage un seul lien : catalogue, live et commande direct pour tes clientes.',
            },
            {
              num: '06',
              icon: Sparkles,
              title: 'Dashboard clair',
              desc: 'Ton chiffre d\'affaires, tes top produits, tes lives — d\'un coup d\'œil.',
            },
          ].map((f) => (
            <div
              key={f.num}
              className="relative rounded-3xl bg-white p-8 shadow-soft border border-forest/5 hover:shadow-card transition-shadow"
            >
              <div className="absolute top-6 right-6 font-display text-5xl font-bold leading-none text-forest/5">
                {f.num}
              </div>
              <div className="h-12 w-12 rounded-2xl bg-gold/20 text-forest flex items-center justify-center mb-5">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-2xl font-medium text-forest mb-2">
                {f.title}
              </h3>
              <p className="text-forest/60 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bandeau */}
      <section className="bg-forest text-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            ['24h', 'Livraison'],
            ['3', 'Modes de paiement'],
            ['0 FCFA', 'À l\'installation'],
            ['100%', 'Local'],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="font-display text-4xl md:text-5xl font-medium mb-2">{n}</div>
              <div className="text-cream/70 text-xs uppercase tracking-widest">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-forest/10 bg-white py-10 mt-auto">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-forest/60">
          <div className="flex items-center gap-2 font-display">
            <span className="text-forest font-semibold">Diayma</span>
            <span>·</span>
            <span>Fait avec ❤️ à Dakar</span>
          </div>
          <div className="text-xs text-forest/50">
            Une question ? Contacte-nous par WhatsApp.
          </div>
        </div>
      </footer>
    </div>
  );
}
