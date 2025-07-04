export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6">Contactez-nous</h1>
      <p className="mb-6 text-center text-gray-700">Une question, une demande ? Remplissez le formulaire ci-dessous ou écrivez-nous à <a href="mailto:contact@taplio-france.com" className="text-blue-600 underline">contact@taplio-france.com</a>.</p>
      <form className="w-full bg-white rounded-lg shadow p-6 flex flex-col gap-4">
        <input type="text" placeholder="Votre nom" className="border rounded p-2" required />
        <input type="email" placeholder="Votre email" className="border rounded p-2" required />
        <textarea placeholder="Votre message" className="border rounded p-2" rows={4} required />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Envoyer</button>
      </form>
      <p className="mt-8 text-xs text-gray-500 text-center">Nous répondons sous 24h ouvrées.</p>
    </main>
  );
} 