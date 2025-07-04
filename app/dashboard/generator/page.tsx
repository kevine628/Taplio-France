"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Wand2, Copy, RefreshCw, Calendar, Save, Sparkles, Hash, MessageSquare } from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"

const tones = [
  { value: "professional", label: "Professionnel" },
  { value: "casual", label: "Décontracté" },
  { value: "motivational", label: "Motivationnel" },
  { value: "educational", label: "Éducatif" },
  { value: "humorous", label: "Humoristique" },
  { value: "storytelling", label: "Storytelling" },
]

const suggestedHashtags = [
  "#LinkedIn",
  "#Recrutement",
  "#RH",
  "#Leadership",
  "#Innovation",
  "#Entrepreneuriat",
  "#Marketing",
  "#IA",
  "#Transformation",
  "#Carrière",
]

const trendingTopics = [
  "Intelligence Artificielle en entreprise",
  "Télétravail et productivité",
  "Recrutement post-COVID",
  "Leadership féminin",
  "Transformation digitale",
]

export default function GeneratorPage() {
  const [formData, setFormData] = useState({
    topic: "",
    tone: "",
    hashtags: [] as string[],
    callToAction: "",
    additionalContext: "",
  })
  const [generatedContent, setGeneratedContent] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [showPreview, setShowPreview] = useState(false)

  const handleGenerate = async () => {
    if (!formData.topic || !formData.tone) {
      return
    }

    setIsGenerating(true)

    // Simulation de génération avec GPT-4
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const mockContent = `🚀 ${formData.topic}

Dans un monde en constante évolution, il est crucial de comprendre les enjeux actuels et de s'adapter aux nouvelles réalités du marché.

Voici 3 points clés à retenir :

✅ L'importance de l'innovation continue
✅ Le rôle central de l'humain dans la transformation
✅ La nécessité d'une approche collaborative

${formData.callToAction ? `💡 ${formData.callToAction}` : ""}

Qu'en pensez-vous ? Partagez votre expérience en commentaire !

${formData.hashtags.join(" ")}`

    setGeneratedContent(mockContent)
    setShowPreview(true)
    setIsGenerating(false)
  }

  const handleHashtagToggle = (hashtag: string) => {
    setFormData((prev) => ({
      ...prev,
      hashtags: prev.hashtags.includes(hashtag)
        ? prev.hashtags.filter((h) => h !== hashtag)
        : [...prev.hashtags, hashtag],
    }))
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedContent)
  }

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Générateur de contenu</h1>
          <p className="text-gray-600 mt-1">Créez des publications LinkedIn engageantes avec l'IA</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Wand2 className="h-5 w-5 mr-2" />
                  Paramètres de génération
                </CardTitle>
                <CardDescription>Définissez le sujet et le style de votre publication</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="topic">Sujet principal *</Label>
                  <Input
                    id="topic"
                    placeholder="Ex: L'impact de l'IA sur le recrutement"
                    value={formData.topic}
                    onChange={(e) => setFormData((prev) => ({ ...prev, topic: e.target.value }))}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tone">Ton souhaité *</Label>
                  <Select
                    value={formData.tone}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, tone: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Choisissez un ton" />
                    </SelectTrigger>
                    <SelectContent>
                      {tones.map((tone) => (
                        <SelectItem key={tone.value} value={tone.value}>
                          {tone.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Hashtags recommandés</Label>
                  <div className="flex flex-wrap gap-2">
                    {suggestedHashtags.map((hashtag) => (
                      <Badge
                        key={hashtag}
                        variant={formData.hashtags.includes(hashtag) ? "default" : "outline"}
                        className="cursor-pointer"
                        onClick={() => handleHashtagToggle(hashtag)}
                      >
                        <Hash className="h-3 w-3 mr-1" />
                        {hashtag.replace("#", "")}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="callToAction">Call-to-action (optionnel)</Label>
                  <Input
                    id="callToAction"
                    placeholder="Ex: Contactez-moi pour en discuter"
                    value={formData.callToAction}
                    onChange={(e) => setFormData((prev) => ({ ...prev, callToAction: e.target.value }))}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="additionalContext">Contexte supplémentaire</Label>
                  <Textarea
                    id="additionalContext"
                    placeholder="Ajoutez des détails spécifiques, votre expérience personnelle..."
                    value={formData.additionalContext}
                    onChange={(e) => setFormData((prev) => ({ ...prev, additionalContext: e.target.value }))}
                    rows={3}
                  />
                </div>

                <Button
                  onClick={handleGenerate}
                  disabled={!formData.topic || !formData.tone || isGenerating}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                      Génération en cours...
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4 mr-2" />
                      Générer le contenu
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Trending Topics */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Sujets tendance</CardTitle>
                <CardDescription>Inspirez-vous des thèmes populaires en France</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {trendingTopics.map((topic, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      className="w-full justify-start text-left h-auto p-3"
                      onClick={() => setFormData((prev) => ({ ...prev, topic }))}
                    >
                      <MessageSquare className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span className="text-sm">{topic}</span>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Preview */}
          <div className="space-y-6">
            {showPreview ? (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Aperçu de la publication
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" onClick={copyToClipboard}>
                        <Copy className="h-4 w-4 mr-2" />
                        Copier
                      </Button>
                      <Button variant="outline" size="sm" onClick={handleGenerate} disabled={isGenerating}>
                        <RefreshCw className="h-4 w-4 mr-2" />
                        Régénérer
                      </Button>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-white border rounded-lg p-4 mb-4">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">JD</span>
                      </div>
                      <div>
                        <p className="font-medium text-sm">Jean Dupont</p>
                        <p className="text-xs text-gray-500">Consultant RH • 1ère</p>
                      </div>
                    </div>
                    <div className="whitespace-pre-wrap text-sm text-gray-900 mb-4">{generatedContent}</div>
                    <div className="flex items-center space-x-4 text-xs text-gray-500 border-t pt-3">
                      <span>👍 12</span>
                      <span>💬 3 commentaires</span>
                      <span>🔄 2 partages</span>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Button className="flex-1">
                      <Calendar className="h-4 w-4 mr-2" />
                      Programmer
                    </Button>
                    <Button variant="outline" className="flex-1 bg-transparent">
                      <Save className="h-4 w-4 mr-2" />
                      Sauvegarder
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-dashed">
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <Wand2 className="h-12 w-12 text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Prêt à créer du contenu ?</h3>
                  <p className="text-gray-500 text-center mb-4">
                    Remplissez le formulaire et cliquez sur "Générer" pour voir votre publication
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">💡 Conseils pour un contenu engageant</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm space-y-2">
                  <p>
                    <strong>✨ Commencez fort :</strong> Utilisez un emoji ou une question pour capter l'attention
                  </p>
                  <p>
                    <strong>📊 Structurez :</strong> Utilisez des listes à puces ou des numéros
                  </p>
                  <p>
                    <strong>🎯 Soyez spécifique :</strong> Donnez des exemples concrets
                  </p>
                  <p>
                    <strong>💬 Engagez :</strong> Terminez par une question pour encourager les commentaires
                  </p>
                  <p>
                    <strong>#️⃣ Hashtags :</strong> Utilisez 3-5 hashtags pertinents maximum
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
