export default function FAQPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Foire aux questions (FAQ)</h1>
      <div className="w-full space-y-6">
        <div>
          <h2 className="font-semibold">Comment puis-je essayer Taplio France ?</h2>
          <p className="text-gray-700">Inscrivez-vous gratuitement et profitez d'un essai de 7 jours sans engagement.</p>
        </div>
        <div>
          <h2 className="font-semibold">Puis-je annuler mon abonnement à tout moment ?</h2>
          <p className="text-gray-700">Oui, vous pouvez annuler ou modifier votre abonnement depuis votre espace client.</p>
        </div>
        <div>
          <h2 className="font-semibold">Comment contacter le support ?</h2>
          <p className="text-gray-700">Via le formulaire de contact ou par email à contact@taplio-france.com.</p>
        </div>
        <div>
          <h2 className="font-semibold">Proposez-vous des tarifs pour les équipes ?</h2>
          <p className="text-gray-700">Oui, notre offre Enterprise est adaptée aux équipes. Contactez-nous pour un devis personnalisé.</p>
        </div>
      </div>
    </main>
  );
} 