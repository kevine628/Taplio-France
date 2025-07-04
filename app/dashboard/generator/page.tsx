"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Zap, Copy, RefreshCw, Send, Sparkles } from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"

const toneOptions = [
  { value: "professional", label: "Professionnel" },
  { value: "casual", label: "Décontracté" },
  { value: "inspirational", label: "Inspirant" },
  { value: "educational", label: "Éducatif" },
  { value: "storytelling", label: "Narratif" },
]

const industryOptions = [
  { value: "tech", label: "Technologie" },
  { value: "finance", label: "Finance" },
  { value: "healthcare", label: "Santé" },
  { value: "education", label: "Éducation" },
  { value: "marketing", label: "Marketing" },
  { value: "consulting", label: "Conseil" },
]

export default function GeneratorPage() {
  const [topic, setTopic] = useState("")
  const [tone, setTone] = useState("professional")
  const [industry, setIndustry] = useState("tech")
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedContent, setGeneratedContent] = useState("")
  const [hashtags, setHashtags] = useState<string[]>([])

  const handleGenerate = async () => {
    if (!topic.trim()) return
    
    setIsGenerating(true)
    
    // Simulation d'une génération IA
    setTimeout(() => {
      const content = `🚀 ${topic}

💡 Voici quelques points clés à retenir :

✅ Point 1: Aspect important de ${topic}
✅ Point 2: Élément crucial à considérer
✅ Point 3: Facteur déterminant pour le succès

🎯 Que pensez-vous de ${topic} ? Partagez votre expérience dans les commentaires !

#${topic.replace(/\s+/g, '')} #Innovation #France #LinkedIn`
      
      setGeneratedContent(content)
      setHashtags([`#${topic.replace(/\s+/g, '')}`, "#Innovation", "#France", "#LinkedIn"])
      setIsGenerating(false)
    }, 2000)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedContent)
  }

  const handleRefresh = () => {
    setGeneratedContent("")
    setHashtags([])
  }

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Générateur IA</h1>
            <p className="text-gray-600 mt-1">Créez du contenu engageant avec l'intelligence artificielle</p>
          </div>
          <div className="flex items-center space-x-3 mt-4 sm:mt-0">
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              <Sparkles className="h-3 w-3 mr-1" />
              GPT-4 Powered
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="h-5 w-5 mr-2 text-blue-600" />
                Créer du contenu
              </CardTitle>
              <CardDescription>
                Décrivez votre sujet et l'IA générera du contenu adapté
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="topic">Sujet principal *</Label>
                <Textarea
                  id="topic"
                  placeholder="Ex: Comment l'IA transforme le recrutement en France..."
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="min-h-[100px]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="tone">Ton</Label>
                  <Select value={tone} onValueChange={setTone}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {toneOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="industry">Secteur</Label>
                  <Select value={industry} onValueChange={setIndustry}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {industryOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button 
                onClick={handleGenerate} 
                disabled={!topic.trim() || isGenerating}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                    Génération en cours...
                  </>
                ) : (
                  <>
                    <Zap className="h-4 w-4 mr-2" />
                    Générer du contenu
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Output Section */}
          <Card>
            <CardHeader>
              <CardTitle>Contenu généré</CardTitle>
              <CardDescription>
                Votre publication optimisée pour LinkedIn
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {generatedContent ? (
                <>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="whitespace-pre-wrap text-sm">{generatedContent}</div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Hashtags suggérés</Label>
                    <div className="flex flex-wrap gap-2">
                      {hashtags.map((hashtag, index) => (
                        <Badge key={index} variant="outline">
                          {hashtag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button onClick={handleCopy} variant="outline" className="flex-1">
                      <Copy className="h-4 w-4 mr-2" />
                      Copier
                    </Button>
                    <Button onClick={handleRefresh} variant="outline">
                      <RefreshCw className="h-4 w-4" />
                    </Button>
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      <Send className="h-4 w-4 mr-2" />
                      Publier
                    </Button>
                  </div>
                </>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <Zap className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                  <p>Générez votre premier contenu</p>
                  <p className="text-sm">Remplissez le formulaire à gauche pour commencer</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Tips Section */}
        <Card>
          <CardHeader>
            <CardTitle>💡 Conseils pour un meilleur contenu</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <h4 className="font-medium">Soyez spécifique</h4>
                <p className="text-sm text-gray-600">
                  Plus votre sujet est précis, plus le contenu sera pertinent et engageant.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Ajoutez du contexte</h4>
                <p className="text-sm text-gray-600">
                  Mentionnez votre expérience ou des exemples concrets pour plus d'authenticité.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Engagez votre audience</h4>
                <p className="text-sm text-gray-600">
                  Terminez par une question pour encourager les commentaires et discussions.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
