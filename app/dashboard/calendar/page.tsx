"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Plus, Clock, CheckCircle2, MessageSquare, Edit, Trash2 } from "lucide-react"
import DashboardLayout from "@/components/dashboard-layout"

const scheduledPosts = [
  {
    id: 1,
    content: "🚀 Comment l'IA transforme le recrutement en France ? Découvrez les 5 tendances clés...",
    scheduledFor: "2024-12-05T09:00:00",
    status: "scheduled",
    platform: "LinkedIn",
  },
  {
    id: 2,
    content: "💡 Les soft skills les plus recherchées en 2024 selon notre étude...",
    scheduledFor: "2024-12-06T14:30:00",
    status: "scheduled",
    platform: "LinkedIn",
  },
  {
    id: 3,
    content: "🎯 Retour d'expérience : Comment j'ai doublé mon réseau LinkedIn en 6 mois...",
    scheduledFor: "2024-12-07T11:00:00",
    status: "draft",
    platform: "LinkedIn",
  },
]

const calendarDays = [
  { date: "1", day: "Lun", posts: 0 },
  { date: "2", day: "Mar", posts: 0 },
  { date: "3", day: "Mer", posts: 0 },
  { date: "4", day: "Jeu", posts: 0 },
  { date: "5", day: "Ven", posts: 1 },
  { date: "6", day: "Sam", posts: 1 },
  { date: "7", day: "Dim", posts: 1 },
  { date: "8", day: "Lun", posts: 0 },
  { date: "9", day: "Mar", posts: 0 },
  { date: "10", day: "Mer", posts: 0 },
  { date: "11", day: "Jeu", posts: 0 },
  { date: "12", day: "Ven", posts: 0 },
  { date: "13", day: "Sam", posts: 0 },
  { date: "14", day: "Dim", posts: 0 },
]

export default function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'scheduled':
        return 'bg-blue-100 text-blue-800'
      case 'draft':
        return 'bg-gray-100 text-gray-800'
      case 'published':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Calendrier</h1>
            <p className="text-gray-600 mt-1">Planifiez et gérez vos publications LinkedIn</p>
          </div>
          <div className="flex items-center space-x-3 mt-4 sm:mt-0">
            <Button variant="outline">
              <Calendar className="h-4 w-4 mr-2" />
              Vue mensuelle
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Plus className="h-4 w-4 mr-2" />
              Nouvelle publication
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendar View */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Décembre 2024</CardTitle>
                <CardDescription>Vue d'ensemble de vos publications programmées</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-1">
                  {/* Header */}
                  {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map((day) => (
                    <div key={day} className="p-2 text-center text-sm font-medium text-gray-500">
                      {day}
                    </div>
                  ))}
                  
                  {/* Calendar days */}
                  {calendarDays.map((day) => (
                    <div
                      key={day.date}
                      className={`p-2 border rounded-lg cursor-pointer hover:bg-gray-50 ${
                        day.posts > 0 ? 'bg-blue-50 border-blue-200' : ''
                      }`}
                      onClick={() => setSelectedDate(day.date)}
                    >
                      <div className="text-sm font-medium">{day.date}</div>
                      {day.posts > 0 && (
                        <div className="flex justify-center mt-1">
                          <Badge variant="secondary" className="text-xs">
                            {day.posts} post{day.posts > 1 ? 's' : ''}
                          </Badge>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Scheduled Posts */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Publications programmées</CardTitle>
                <CardDescription>Vos prochaines publications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {scheduledPosts.map((post) => (
                    <div key={post.id} className="border rounded-lg p-4 space-y-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p className="text-sm text-gray-900 line-clamp-2 mb-2">
                            {post.content}
                          </p>
                          <div className="flex items-center space-x-2 text-xs text-gray-500">
                            <Clock className="h-3 w-3" />
                            <span>{formatDate(post.scheduledFor)}</span>
                          </div>
                        </div>
                        <div className="flex space-x-1">
                          <Button variant="ghost" size="sm">
                            <Edit className="h-3 w-3" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <Badge className={getStatusColor(post.status)}>
                          {post.status === 'scheduled' ? 'Programmé' : 'Brouillon'}
                        </Badge>
                        <span className="text-xs text-gray-500">{post.platform}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Statistiques</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Publications ce mois</span>
                  <span className="font-medium">3</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Programmées</span>
                  <span className="font-medium text-blue-600">2</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Brouillons</span>
                  <span className="font-medium text-gray-600">1</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Taux d'engagement moyen</span>
                  <span className="font-medium text-green-600">4.2%</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Best Times to Post */}
        <Card>
          <CardHeader>
            <CardTitle>📊 Meilleurs moments pour publier</CardTitle>
            <CardDescription>Optimisez vos publications selon les données d'engagement</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">Mardi</div>
                <p className="text-sm text-gray-600">9h00 - 11h00</p>
                <p className="text-xs text-gray-500 mt-1">Engagement moyen: 4.8%</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">Jeudi</div>
                <p className="text-sm text-gray-600">14h00 - 16h00</p>
                <p className="text-xs text-gray-500 mt-1">Engagement moyen: 4.5%</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">Vendredi</div>
                <p className="text-sm text-gray-600">10h00 - 12h00</p>
                <p className="text-xs text-gray-500 mt-1">Engagement moyen: 4.2%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
