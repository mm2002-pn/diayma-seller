import { Smartphone } from 'lucide-react';

/**
 * Boutons Play Store / App Store — désactivés tant que l'app n'est pas publiée.
 * Remplace `disabled` par un vrai `href` quand les stores accepteront l'app.
 */
export function StoreButtons({ compact = false }: { compact?: boolean }) {
  const items = [
    { store: 'Google Play', sub: 'Android', href: '#' },
    { store: 'App Store', sub: 'iPhone', href: '#' },
  ];
  return (
    <div className={compact ? 'flex flex-col gap-3 w-full' : 'flex flex-col sm:flex-row gap-3'}>
      {items.map((s) => (
        <a
          key={s.store}
          href={s.href}
          onClick={(e) => e.preventDefault()}
          className="group inline-flex items-center gap-3 rounded-2xl border border-forest/15 bg-white px-5 h-14 text-left shadow-soft hover:shadow-card transition-shadow cursor-not-allowed opacity-60"
          title="L'app n'est pas encore publiée — bientôt disponible"
        >
          <Smartphone className="h-6 w-6 text-forest" />
          <div>
            <div className="text-[10px] uppercase tracking-widest text-forest/50 font-semibold">
              Bientôt sur
            </div>
            <div className="text-sm font-semibold text-forest">{s.store}</div>
          </div>
        </a>
      ))}
    </div>
  );
}
