export default function APIPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Accès API</h1>
      <p className="mb-6 text-center text-gray-700">Notre API vous permet d'intégrer Taplio France à vos outils et automatisations. Accédez à vos données, publiez du contenu, et bien plus encore.</p>
      <div className="w-full bg-gray-50 rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-2">Authentification</h2>
        <p className="mb-2 text-sm">Pour utiliser l'API, obtenez une clé API dans votre espace client.</p>
        <pre className="bg-gray-200 rounded p-2 text-xs overflow-x-auto mb-2">GET /api/v1/posts
Authorization: Bearer VOTRE_CLE_API</pre>
      </div>
      <div className="w-full bg-gray-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-2">Exemple de requête</h2>
        <pre className="bg-gray-200 rounded p-2 text-xs overflow-x-auto mb-2">curl -H "Authorization: Bearer VOTRE_CLE_API" https://taplio-france.com/api/v1/posts</pre>
      </div>
      <p className="mt-8 text-xs text-gray-500 text-center">Pour plus d'informations, contactez notre support technique.</p>
    </main>
  );
} 