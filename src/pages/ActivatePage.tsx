import { useSearchParams } from 'react-router-dom';
import { CheckCircle2, Download } from 'lucide-react';

import { StoreButtons } from '@/components/StoreButtons';

/**
 * Page servie quand la vendeuse clique son magic link SANS avoir l'app installée.
 * (Universal Links / App Links : si l'app est installée, iOS/Android intercepte
 * cette URL avant que le navigateur ne la charge, donc cette page n'est jamais vue.)
 */
export function ActivatePage() {
  const [params] = useSearchParams();
  const hasToken = !!params.get('token');

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <header className="border-b border-forest/10 bg-cream/85 backdrop-blur">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-2.5">
          <div className="h-9 w-9 rounded-lg bg-forest text-cream flex items-center justify-center font-display text-xl font-bold">
            D
          </div>
          <span className="text-xl font-display font-semibold text-forest tracking-tight">
            Diayma
          </span>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-md w-full text-center space-y-8">
          <div className="mx-auto h-20 w-20 rounded-full bg-forest flex items-center justify-center shadow-card">
            {hasToken ? (
              <Download className="h-10 w-10 text-cream" />
            ) : (
              <CheckCircle2 className="h-10 w-10 text-cream" />
            )}
          </div>

          <div className="space-y-3">
            <h1 className="font-display text-4xl font-medium text-forest tracking-tight">
              {hasToken ? 'Presque prête !' : 'L\'app Diayma'}
            </h1>
            <p className="text-forest/70 leading-relaxed">
              {hasToken ? (
                <>
                  Installe d'abord l'app Diayma Vendeuse sur ton téléphone, puis clique
                  à nouveau sur le lien du SMS pour définir ton code PIN.
                </>
              ) : (
                <>
                  L'app arrive bientôt sur Google Play et App Store. Elle te permettra
                  de gérer ta boutique, tes lives et tes commandes.
                </>
              )}
            </p>
          </div>

          <div>
            <StoreButtons compact />
          </div>

          {hasToken && (
            <div className="rounded-2xl bg-clay/10 border border-clay/20 p-4 text-left">
              <div className="text-xs uppercase tracking-widest text-clay font-semibold mb-1">
                Bon à savoir
              </div>
              <p className="text-sm text-forest/70 leading-relaxed">
                Ton lien d'activation reste valable 24h. Si tu ne finalises pas à
                temps, demande à l'admin de te renvoyer un nouveau lien.
              </p>
            </div>
          )}

          <div className="text-xs text-forest/50 pt-4 border-t border-forest/10">
            Besoin d'aide ? Contacte-nous par WhatsApp.
          </div>
        </div>
      </main>
    </div>
  );
}
