import type { FeatureItem, TestimonialItem, HowItWorksStep, LiveComment } from '@/types/landing';

export const FEATURES_DATA: FeatureItem[] = [
  {
    id: 'live-selling',
    icon: 'Video',
    title: 'Lancer des lives de vente interactifs',
    description: 'Présentez vos collections en direct vidéo sur Diayma. Vos clientes réagissent, posent leurs questions et réservent leurs articles en temps réel sans interrompre votre flux.',
    tag: 'Direct Vidéo'
  },
  {
    id: 'catalog-management',
    icon: 'Smartphone',
    title: 'Gérer son catalogue depuis son téléphone',
    description: 'Ajoutez facilement vos photos, déclinaisons de tailles (S à 3XL), tissus (Wax, Bazin, Soie) et stocks en quelques secondes. Votre vitrine web est générée automatiquement.',
    tag: '100% Mobile'
  },
  {
    id: 'automatic-payments',
    icon: 'CreditCard',
    title: 'Accepter Wave Money & Orange Money',
    description: 'Plus besoin de vérifier manuellement les numéros de transaction ou d’attendre les captures d’écran. L’encaissement est validé automatiquement dès le paiement de la cliente.',
    tag: 'Automatique'
  },
  {
    id: 'instant-payouts',
    icon: 'Zap',
    title: 'Recevoir son argent immédiatement',
    description: 'Après chaque vente ou fin de live, votre argent est transféré directement sur votre compte Wave ou Orange Money. Zéro délai de virement bancaire, zéro tracas.',
    tag: 'Instantané'
  },
  {
    id: 'order-tracking',
    icon: 'PackageCheck',
    title: 'Suivre chaque commande jusqu’à la livraison',
    description: 'Consultez les détails de livraison, générez les étiquettes pour vos livreurs partenaires à Dakar, Thiès, Kaolack ou Saint-Louis, et informez la cliente par SMS.',
    tag: 'Suivi 24/7'
  },
  {
    id: 'ai-assistant',
    icon: 'Sparkles',
    title: 'Assistante IA dédiée 24h/24',
    description: 'Bénéficiez d’une conseillère intelligente intégrée : rédaction de textes de vente percutants, conseils de prix en FCFA, idées de lives et réponses automatisées à vos clientes.',
    tag: 'IA Sénégal'
  }
];

export const HOW_IT_WORKS_DATA: HowItWorksStep[] = [
  {
    step: '01',
    title: 'Inscrivez votre boutique en 2 minutes',
    description: 'Renseignez simplement le nom de votre marque, votre ville et votre numéro de téléphone connecté à Wave ou Orange Money. Sans aucun papier ni frais de création.',
    highlight: 'Inscription gratuite & sans engagement'
  },
  {
    step: '02',
    title: 'Publiez vos produits & lancez vos lives',
    description: 'Ajoutez votre catalogue d’un simple geste ou déclenchez votre premier direct vidéo. Diayma crée votre lien unique de boutique à partager sur Instagram et WhatsApp.',
    highlight: 'Lien personnalisé prêt à partager'
  },
  {
    step: '03',
    title: 'Encaissez votre argent automatiquement',
    description: 'Les clientes paient en 1 clic sur mobile. Les commandes sont validées en direct et vos fonds sont disponibles instantanément sur votre téléphone.',
    highlight: 'Versement immédiat sur votre mobile'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'aissatou',
    name: 'Aïssatou Diallo',
    role: 'Fondatrice de Ndeye Wax',
    businessName: 'Ndeye Wax',
    city: 'Dakar (Plateau)',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    metric: '+180% de chiffre d’affaires',
    quote: 'Avant Diayma, je devais vérifier 50 captures de paiement Wave pendant mes lives Instagram. C’était un chaos total. Aujourd’hui, tout est automatisé : les clientes paient pendant le direct, et mon argent arrive immédiatement !',
    verified: true
  },
  {
    id: 'mariama',
    name: 'Mariama Sarr',
    role: 'Styliste & Créatrice',
    businessName: 'Thiès Couture & Créations',
    city: 'Thiès',
    avatarUrl: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=400',
    metric: '120+ commandes par live',
    quote: 'Ce qui me plaît le plus, c’est de recevoir l’argent directement sur mon compte Wave dès que la cliente valide. Pas besoin de compte bancaire ni de démarches compliquées.',
    verified: true
  },
  {
    id: 'fatou',
    name: 'Fatou Ndiaye',
    role: 'Vendeuse de Bazin & Bijoux',
    businessName: 'Maison Ndiaye Beauté',
    city: 'Saint-Louis',
    avatarUrl: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80&w=400',
    metric: '3h gagnées par jour avec l’IA',
    quote: 'L’assistante IA de Diayma rédige mes descriptions de tenues en Bazin riche avec des mots magnifiques qui captivent mes clientes sur WhatsApp. C’est comme avoir une associée toujours disponible !',
    verified: true
  }
];

export const SAMPLE_LIVE_COMMENTS: LiveComment[] = [
  { id: '1', user: 'Khady B.', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100', text: 'MachaAllah cette robe en Wax vert est sublime ! 😍', time: '18:32' },
  { id: '2', user: 'Seynabou M.', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=100', text: 'Est-ce disponible en taille L pour la livraison à Mermoz ?', time: '18:33' },
  { id: '3', user: 'Aminata D.', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100', text: 'Je viens de valider par Wave ! Reçu bien obtenu ✅', time: '18:33', isOrder: true, amount: '28 000 FCFA' },
  { id: '4', user: 'Coumba N.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100', text: 'Montrez-nous le Bazin violet svp 💜', time: '18:34' },
  { id: '5', user: 'Sokhna P.', avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=100', text: 'Paiement Orange Money effectué pour 2 ensembles ! 📲', time: '18:34', isOrder: true, amount: '50 000 FCFA' },
];

export const PRESET_AI_PROMPTS = [
  "Rédige une description pour une robe en Wax hollandais 👗",
  "Comment faire un bon live de vente ce soir ? 🎥",
  "Quel prix fixer pour un ensemble Bazin brodé ? 💰",
  "Comment gérer la livraison à Dakar et dans les régions ? 🚚"
];
