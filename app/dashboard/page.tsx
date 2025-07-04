"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Calendar, MessageSquare, Users, TrendingUp, Eye, Heart, Plus, Clock, CheckCircle2 } from "lucide-react"
const recentPosts = [
  {
    id: 1,
    content: "🚀 Comment l'IA transforme le recrutement en France ? Découvrez les 5 tendances clés...",
    status: "published",
    publishedAt: "Il y a 2h",
    metrics: { views: 1247, likes: 89, comments: 12 },
  },
  {
    id: 2,
    content: "💡 Les soft skills les plus recherchées en 2024 selon notre étude...",
    status: "scheduled",
    scheduledFor: "Demain 9h00",
    metrics: null,
  },
  {
    id: 3,
    content: "🎯 Retour d'expérience : Comment j'ai doublé mon réseau LinkedIn en 6 mois...",
    status: "draft",
    metrics: null,
  },
]

export default function DashboardPage() {
  const [timeRange, setTimeRange] = useState("7d")

  return (
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Tableau de bord</h1>
            <p className="text-gray-600 mt-1">Aperçu de vos performances LinkedIn</p>
          </div>
          <div className="flex items-center space-x-3 mt-4 sm:mt-0">
            <Button variant="outline" size="sm">
              <Calendar className="h-4 w-4 mr-2" />7 derniers jours
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Plus className="h-4 w-4 mr-2" />
              Nouvelle publication
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Vues totales</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12,847</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+12.5%</span> vs semaine dernière
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Engagement</CardTitle>
              <Heart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">431</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+8.2%</span> vs semaine dernière
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Nouveaux abonnés</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+89</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+23.1%</span> vs semaine dernière
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Taux d'engagement</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3.4%</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+0.8%</span> vs semaine dernière
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Placeholder */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Évolution des vues</CardTitle>
              <CardDescription>Vues de vos publications sur les 7 derniers jours</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] flex items-center justify-center bg-gray-50 rounded-lg">
                <div className="text-center">
                  <TrendingUp className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Graphique des vues</p>
                  <p className="text-sm text-gray-400">1,200 → 1,800 → 2,200 → 1,600 → 2,800 → 1,400 → 900</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Engagement par jour</CardTitle>
              <CardDescription>Likes et commentaires sur les 7 derniers jours</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] flex items-center justify-center bg-gray-50 rounded-lg">
                <div className="text-center">
                  <Heart className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Graphique d'engagement</p>
                  <p className="text-sm text-gray-400">Likes: 45, 67, 89, 52, 112, 38, 28</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Posts */}
        <Card>
          <CardHeader>
            <CardTitle>Publications récentes</CardTitle>
            <CardDescription>Aperçu de vos dernières publications et brouillons</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentPosts.map((post) => (
                <div key={post.id} className="flex items-start space-x-4 p-4 border rounded-lg">
                  <div className="flex-1">
                    <p className="text-sm text-gray-900 mb-2">{post.content}</p>
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      {post.status === "published" && (
                        <>
                          <span className="flex items-center">
                            <CheckCircle2 className="h-3 w-3 mr-1 text-green-500" />
                            Publié {post.publishedAt}
                          </span>
                          {post.metrics && (
                            <>
                              <span>{post.metrics.views} vues</span>
                              <span>{post.metrics.likes} likes</span>
                              <span>{post.metrics.comments} commentaires</span>
                            </>
                          )}
                        </>
                      )}
                      {post.status === "scheduled" && (
                        <span className="flex items-center">
                          <Clock className="h-3 w-3 mr-1 text-blue-500" />
                          Programmé pour {post.scheduledFor}
                        </span>
                      )}
                      {post.status === "draft" && (
                        <span className="flex items-center">
                          <MessageSquare className="h-3 w-3 mr-1 text-gray-500" />
                          Brouillon
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      Modifier
                    </Button>
                    <Button variant="outline" size="sm">
                      Voir
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
  )
}
