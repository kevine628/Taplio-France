"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Eye, Heart, MessageSquare, Share2, Users, Download } from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"

const performanceData = [
  { date: "1 Déc", vues: 1200, likes: 45, commentaires: 8, partages: 3 },
  { date: "2 Déc", vues: 1800, likes: 67, commentaires: 12, partages: 5 },
  { date: "3 Déc", vues: 2200, likes: 89, commentaires: 15, partages: 8 },
  { date: "4 Déc", vues: 1600, likes: 52, commentaires: 9, partages: 4 },
  { date: "5 Déc", vues: 2800, likes: 112, commentaires: 23, partages: 12 },
  { date: "6 Déc", vues: 1400, likes: 38, commentaires: 6, partages: 2 },
  { date: "7 Déc", vues: 3200, likes: 145, commentaires: 28, partages: 15 },
]

const topPosts = [
  {
    id: 1,
    content: "🚀 Comment l'IA transforme le recrutement en France ? Découvrez les 5 tendances clés...",
    date: "5 Déc 2024",
    metrics: { vues: 3200, likes: 145, commentaires: 28, partages: 15 },
    engagement: 5.9,
  },
  {
    id: 2,
    content: "💡 Les soft skills les plus recherchées en 2024 selon notre étude...",
    date: "3 Déc 2024",
    metrics: { vues: 2800, likes: 112, commentaires: 23, partages: 12 },
    engagement: 5.2,
  },
  {
    id: 3,
    content: "🎯 Retour d'expérience : Comment j'ai doublé mon réseau LinkedIn en 6 mois...",
    date: "1 Déc 2024",
    metrics: { vues: 2200, likes: 89, commentaires: 15, partages: 8 },
    engagement: 5.1,
  },
]

const audienceData = [
  { name: "Recruteurs", value: 35, color: "#3b82f6" },
  { name: "RH", value: 28, color: "#8b5cf6" },
  { name: "Dirigeants", value: 20, color: "#06b6d4" },
  { name: "Consultants", value: 12, color: "#10b981" },
  { name: "Autres", value: 5, color: "#f59e0b" },
]

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState("7d")

  const calculateGrowth = (current: number, previous: number) => {
    return (((current - previous) / previous) * 100).toFixed(1)
  }

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
            <p className="text-gray-600 mt-1">Analysez vos performances LinkedIn en détail</p>
          </div>
          <div className="flex items-center space-x-3 mt-4 sm:mt-0">
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">7 derniers jours</SelectItem>
                <SelectItem value="30d">30 derniers jours</SelectItem>
                <SelectItem value="90d">90 derniers jours</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Exporter
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Vues totales</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">14,200</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <TrendingUp className="h-3 w-3 mr-1 text-green-600" />
                <span className="text-green-600">+12.5%</span>
                <span className="ml-1">vs période précédente</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Engagement total</CardTitle>
              <Heart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">548</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <TrendingUp className="h-3 w-3 mr-1 text-green-600" />
                <span className="text-green-600">+8.2%</span>
                <span className="ml-1">vs période précédente</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Taux d'engagement</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3.86%</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <TrendingDown className="h-3 w-3 mr-1 text-red-600" />
                <span className="text-red-600">-0.3%</span>
                <span className="ml-1">vs période précédente</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Nouveaux abonnés</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+127</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <TrendingUp className="h-3 w-3 mr-1 text-green-600" />
                <span className="text-green-600">+23.1%</span>
                <span className="ml-1">vs période précédente</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Évolution des performances</CardTitle>
              <CardDescription>Vues et engagement sur les 7 derniers jours</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  vues: {
                    label: "Vues",
                    color: "hsl(var(--chart-1))",
                  },
                  likes: {
                    label: "Likes",
                    color: "hsl(var(--chart-2))",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={performanceData}>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line
                      type="monotone"
                      dataKey="vues"
                      stroke="hsl(var(--chart-1))"
                      strokeWidth={2}
                      dot={{ fill: "hsl(var(--chart-1))" }}
                    />
                    <Line
                      type="monotone"
                      dataKey="likes"
                      stroke="hsl(var(--chart-2))"
                      strokeWidth={2}
                      dot={{ fill: "hsl(var(--chart-2))" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Répartition de l'audience</CardTitle>
              <CardDescription>Profils de vos abonnés par secteur</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  audience: {
                    label: "Audience",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={audienceData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {audienceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <ChartTooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload
                          return (
                            <div className="bg-white p-2 border rounded shadow">
                              <p className="font-medium">{data.name}</p>
                              <p className="text-sm text-gray-600">{data.value}%</p>
                            </div>
                          )
                        }
                        return null
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </ChartContainer>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {audienceData.map((item) => (
                  <div key={item.name} className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-sm">
                      {item.name} ({item.value}%)
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Top Performing Posts */}
        <Card>
          <CardHeader>
            <CardTitle>Publications les plus performantes</CardTitle>
            <CardDescription>Vos meilleurs contenus de la période</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topPosts.map((post, index) => (
                <div key={post.id} className="border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <Badge variant="secondary">#{index + 1}</Badge>
                      <div>
                        <p className="text-sm text-gray-500">{post.date}</p>
                        <div className="flex items-center space-x-1 mt-1">
                          <TrendingUp className="h-3 w-3 text-green-600" />
                          <span className="text-xs text-green-600 font-medium">{post.engagement}% engagement</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-900 mb-4 line-clamp-2">{post.content}</p>

                  <div className="grid grid-cols-4 gap-4 text-center">
                    <div className="flex flex-col items-center">
                      <Eye className="h-4 w-4 text-gray-500 mb-1" />
                      <span className="text-sm font-medium">{post.metrics.vues.toLocaleString()}</span>
                      <span className="text-xs text-gray-500">Vues</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Heart className="h-4 w-4 text-gray-500 mb-1" />
                      <span className="text-sm font-medium">{post.metrics.likes}</span>
                      <span className="text-xs text-gray-500">Likes</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <MessageSquare className="h-4 w-4 text-gray-500 mb-1" />
                      <span className="text-sm font-medium">{post.metrics.commentaires}</span>
                      <span className="text-xs text-gray-500">Commentaires</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Share2 className="h-4 w-4 text-gray-500 mb-1" />
                      <span className="text-sm font-medium">{post.metrics.partages}</span>
                      <span className="text-xs text-gray-500">Partages</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Insights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>💡 Insights clés</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm font-medium text-blue-900 mb-1">Meilleur jour de publication</p>
                <p className="text-xs text-blue-700">Vos publications du vendredi génèrent 23% plus d'engagement</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <p className="text-sm font-medium text-green-900 mb-1">Heure optimale</p>
                <p className="text-xs text-green-700">Publiez entre 9h et 11h pour maximiser la portée</p>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                <p className="text-sm font-medium text-purple-900 mb-1">Contenu performant</p>
                <p className="text-xs text-purple-700">
                  Les posts avec des questions génèrent 40% plus de commentaires
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>📈 Recommandations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                <p className="text-sm font-medium text-orange-900 mb-1">Augmentez votre fréquence</p>
                <p className="text-xs text-orange-700">Publiez 2-3 fois par semaine pour maintenir l'engagement</p>
              </div>
              <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                <p className="text-sm font-medium text-red-900 mb-1">Diversifiez vos contenus</p>
                <p className="text-xs text-red-700">Alternez entre conseils, retours d'expérience et actualités</p>
              </div>
              <div className="p-3 bg-teal-50 rounded-lg border border-teal-200">
                <p className="text-sm font-medium text-teal-900 mb-1">Interagissez plus</p>
                <p className="text-xs text-teal-700">Répondez aux commentaires dans les 2h pour booster l'algorithme</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
