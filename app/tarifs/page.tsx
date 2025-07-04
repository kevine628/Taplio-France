export default function TarifsPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Nos Tarifs</h1>
      <p className="mb-8 text-center text-gray-700">Choisissez l'offre qui correspond à vos besoins. Tous nos plans incluent un essai gratuit de 7 jours, sans engagement.</p>
      <div className="grid md:grid-cols-3 gap-8 w-full">
        <div className="border rounded-lg p-6 flex flex-col items-center bg-white shadow">
          <h2 className="text-xl font-semibold mb-2">Starter</h2>
          <div className="text-3xl font-bold mb-2">19€<span className="text-base font-normal text-gray-500">/mois</span></div>
          <ul className="mb-4 text-gray-600 text-sm list-disc list-inside">
            <li>10 publications/mois</li>
            <li>Génération IA</li>
            <li>Planification</li>
            <li>Analytics de base</li>
          </ul>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Choisir</button>
        </div>
        <div className="border-2 border-blue-500 rounded-lg p-6 flex flex-col items-center bg-white shadow relative">
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs px-3 py-1 rounded-full">Populaire</span>
          <h2 className="text-xl font-semibold mb-2">Pro</h2>
          <div className="text-3xl font-bold mb-2">49€<span className="text-base font-normal text-gray-500">/mois</span></div>
          <ul className="mb-4 text-gray-600 text-sm list-disc list-inside">
            <li>50 publications/mois</li>
            <li>Génération IA avancée</li>
            <li>CRM intégré</li>
            <li>Analytics complètes</li>
            <li>Support prioritaire</li>
          </ul>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Choisir</button>
        </div>
        <div className="border rounded-lg p-6 flex flex-col items-center bg-white shadow">
          <h2 className="text-xl font-semibold mb-2">Enterprise</h2>
          <div className="text-3xl font-bold mb-2">99€<span className="text-base font-normal text-gray-500">/mois</span></div>
          <ul className="mb-4 text-gray-600 text-sm list-disc list-inside">
            <li>Publications illimitées</li>
            <li>Multi-utilisateurs</li>
            <li>Accès API</li>
            <li>Support dédié</li>
            <li>Formation incluse</li>
          </ul>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Contactez-nous</button>
        </div>
      </div>
      <p className="mt-8 text-xs text-gray-500 text-center">Tarifs HT. Pour des besoins spécifiques, contactez-nous.</p>
    </main>
  );
} 