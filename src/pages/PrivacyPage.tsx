
import { Logo } from '@/components/landing/Logo';

const DATA_SECTIONS = [
  {
    cat: "Données d'identification et de compte",
    desc: "Votre numéro de téléphone, qui sert d'identifiant de connexion, et le code PIN que vous définissez pour sécuriser l'accès à votre espace. Le compte vendeur est créé par notre équipe ; il n'y a pas d'inscription libre depuis l'Application.",
  },
  {
    cat: "Données de votre catalogue",
    desc: "Les informations relatives à vos produits (nom, prix, stock, tailles) ainsi que les photos que vous prenez ou importez.",
  },
  {
    cat: "Données relatives aux commandes",
    desc: "Lorsqu'un acheteur passe commande via votre lien de vente, l'Application affiche les informations nécessaires au traitement de la commande : numéro de téléphone de l'acheteur, montant, mode de paiement et statut de la commande.",
  },
  {
    cat: "Données techniques",
    desc: "Des jetons de session sécurisés permettant de vous maintenir connecté, ainsi que les informations techniques minimales nécessaires au bon fonctionnement de l'Application.",
  },
];

export function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-slate-100 py-4 px-6">
        <a href="/" className="inline-block">
          <Logo variant="light" size="sm" />
        </a>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12 text-slate-700">
        <p className="text-xs text-slate-400 mb-2 uppercase tracking-widest font-semibold">Diayma — REAXION</p>
        <h1 className="text-3xl font-extrabold text-slate-900 mb-1 tracking-tight">
          Politique de confidentialité
        </h1>
        <p className="text-sm font-medium text-slate-500 mb-1">Application Diayema — Espace Vendeur</p>
        <p className="text-xs text-slate-400 mb-10">Dernière mise à jour : 23 juillet 2026</p>

        <div className="space-y-8 text-sm leading-relaxed">

          <p className="text-slate-600">
            La présente politique de confidentialité décrit la manière dont <strong>REAXION</strong>, éditeur de
            l'application mobile Diayma, collecte, utilise et protège les données personnelles des personnes qui
            utilisent l'Application. Diayma est une application destinée aux vendeurs et vendeuses qui organisent
            des ventes en direct (live-selling) sur les réseaux sociaux.
          </p>

          <section>
            <h2 className="text-base font-bold text-slate-900 mb-3">1. Qui sommes-nous ?</h2>
            <p>
              L'Application Diayma est éditée par <strong>REAXION</strong>, dont le siège est situé au
              Km 5, Avenue Cheikh Anta Diop, Yoff Océan, en face Résidence Mame Ndiare, 10200 Dakar, Sénégal.
            </p>
            <p className="mt-2">
              Pour toute question relative à cette politique, vous pouvez nous contacter à{' '}
              <a href="mailto:contact@diayema.com" className="text-[#0066FF] hover:underline">contact@diayema.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900 mb-3">2. Données que nous collectons</h2>
            <p className="mb-3">
              Dans le cadre de l'utilisation de l'Application, nous sommes amenés à collecter les données suivantes :
            </p>
            <ul className="space-y-3">
              {DATA_SECTIONS.map((item) => (
                <li key={item.cat} className="bg-slate-50 border border-slate-100 rounded-xl p-3.5 list-none">
                  <div className="font-bold text-slate-800 mb-1">{item.cat}</div>
                  <div className="text-slate-600">{item.desc}</div>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900 mb-3">3. Accès aux fonctionnalités de votre appareil</h2>
            <p className="mb-3">
              L'Application peut demander l'accès à certaines fonctionnalités de votre appareil, uniquement lorsque
              vous déclenchez l'action correspondante :
            </p>
            <ul className="space-y-1.5 pl-5 list-disc text-slate-600">
              <li><strong className="text-slate-700">Appareil photo</strong> : pour prendre en photo vos produits au moment de les ajouter à votre catalogue.</li>
              <li><strong className="text-slate-700">Photothèque</strong> : pour importer une photo déjà présente sur votre appareil.</li>
              <li><strong className="text-slate-700">Connexion Internet</strong> : pour synchroniser vos produits, vos commandes et vos statistiques avec nos serveurs.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900 mb-3">4. Pourquoi nous utilisons ces données</h2>
            <p className="mb-3">Vos données sont utilisées exclusivement pour les finalités suivantes :</p>
            <ul className="space-y-1.5 pl-5 list-disc text-slate-600">
              <li>Vous authentifier et sécuriser l'accès à votre espace vendeur ;</li>
              <li>Gérer votre catalogue de produits ;</li>
              <li>Réceptionner, afficher et suivre vos commandes ;</li>
              <li>Vous permettre de contacter l'acheteur ou de transmettre une commande à un livreur ;</li>
              <li>Vous fournir des statistiques sur votre activité (chiffre d'affaires, ventes par live, produits les plus demandés) ;</li>
              <li>Assurer le bon fonctionnement, la sécurité et l'amélioration de l'Application.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900 mb-3">5. Partage des données avec des tiers</h2>
            <p className="mb-3">
              Nous ne vendons pas vos données personnelles. Elles peuvent être partagées uniquement avec les
              prestataires strictement nécessaires au fonctionnement du service :
            </p>
            <ul className="space-y-1.5 pl-5 list-disc text-slate-600">
              <li><strong className="text-slate-700">Notre hébergeur</strong>, qui héberge l'infrastructure et les serveurs de l'Application ;</li>
              <li><strong className="text-slate-700">Les prestataires de paiement</strong> (Orange Money, Wave), lorsqu'une commande est réglée en ligne ;</li>
              <li><strong className="text-slate-700">Les services de messagerie</strong> (WhatsApp), lorsque vous choisissez de contacter un acheteur ou de transmettre une commande à un livreur.</li>
            </ul>
            <p className="mt-3 text-slate-600">Ces partages sont limités à ce qui est strictement nécessaire à la fourniture du service.</p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900 mb-3">6. Conservation des données</h2>
            <p>
              Vos données sont conservées tant que votre compte vendeur est actif. Elles peuvent être conservées
              au-delà lorsque la loi l'exige (par exemple à des fins comptables) ou pour la gestion d'éventuels litiges.
              Lorsqu'elles ne sont plus nécessaires, elles sont supprimées ou anonymisées.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900 mb-3">7. Sécurité</h2>
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles adaptées pour protéger vos données.
              Les échanges avec nos serveurs sont chiffrés (HTTPS) et vos identifiants de session sont stockés de
              manière sécurisée sur votre appareil. Votre code PIN est personnel : ne le communiquez à personne.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900 mb-3">8. Vos droits</h2>
            <p>
              Conformément à la réglementation applicable, notamment la loi n° 2008-12 du 25 janvier 2008 sur la
              protection des données à caractère personnel au Sénégal, vous disposez d'un droit d'accès, de
              rectification et de suppression de vos données.
            </p>
            <p className="mt-2">
              Pour exercer ces droits, contactez-nous à{' '}
              <a href="mailto:contact@diayema.com" className="text-[#0066FF] hover:underline">contact@diayema.com</a>.
              La réinitialisation de votre code PIN s'effectue en contactant l'équipe Diayma.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900 mb-3">9. Protection des mineurs</h2>
            <p>
              L'Application est destinée à des vendeurs majeurs. Elle ne s'adresse pas aux mineurs et nous ne
              collectons pas sciemment de données concernant des mineurs.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900 mb-3">10. Modifications de cette politique</h2>
            <p>
              Nous pouvons être amenés à modifier la présente politique de confidentialité. Toute modification sera
              publiée sur cette page, accompagnée d'une date de mise à jour actualisée.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900 mb-3">11. Nous contacter</h2>
            <p className="mb-3">
              Pour toute question concernant cette politique ou le traitement de vos données :
            </p>
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 space-y-1 text-slate-600">
              <p className="font-semibold text-slate-800">REAXION</p>
              <p>Km 5, Avenue Cheikh Anta Diop, Yoff Océan, en face Résidence Mame Ndiare</p>
              <p>10200 Dakar, Sénégal</p>
              <p>
                E-mail :{' '}
                <a href="mailto:contact@diayema.com" className="text-[#0066FF] hover:underline">contact@diayema.com</a>
              </p>
              <p>Téléphone / WhatsApp : +221 77 488 24 53</p>
            </div>
          </section>

        </div>
      </main>

      <footer className="border-t border-slate-100 py-8 mt-16 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} REAXION. Tous droits réservés. —{' '}
        <a href="/" className="hover:text-slate-600 transition-colors">Diayma</a>
        {' '}·{' '}
        <a href="/assistance" className="hover:text-slate-600 transition-colors">Assistance</a>
      </footer>
    </div>
  );
}
