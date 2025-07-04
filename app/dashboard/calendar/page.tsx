"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, Clock, Plus, Edit, Trash2, Eye } from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Calendar } from "@/components/ui/calendar"

const scheduledPosts = [
  {
    id: 1,
    date: new Date(2024, 11, 15, 9, 0),
    content:
      "🚀 Comment l'IA transforme le recrutement en France ? Découvrez les 5 tendances clés qui révolutionnent notre secteur...",
    status: "scheduled",
    platform: "LinkedIn",
  },
  {
    id: 2,
    date: new Date(2024, 11, 16, 14, 30),
    content: "💡 Les soft skills les plus recherchées en 2024 selon notre étude sur 10 000 offres d'emploi...",
    status: "scheduled",
    platform: "LinkedIn",
  },
  {
    id: 3,
    date: new Date(2024, 11, 18, 11, 0),
    content: "🎯 Retour d'expérience : Comment j'ai doublé mon réseau LinkedIn en 6 mois avec ces 3 stratégies...",
    status: "scheduled",
    platform: "LinkedIn",
  },
  {
    id: 4,
    date: new Date(2024, 11, 20, 16, 0),
    content:
      "📊 Baromètre du télétravail 2024 : Les chiffres qui vont vous surprendre sur l'évolution des pratiques...",
    status: "draft",
    platform: "LinkedIn",
  },
]

const timeSlots = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
]

export default function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [viewMode, setViewMode] = useState<"calendar" | "list">("calendar")

  const getPostsForDate = (date: Date) => {
    return scheduledPosts.filter((post) => post.date.toDateString() === date.toDateString())
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("fr-FR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Calendrier de publication</h1>
            <p className="text-gray-600 mt-1">Planifiez et gérez vos publications LinkedIn</p>
          </div>
          <div className="flex items-center space-x-3 mt-4 sm:mt-0">
            <div className="flex rounded-lg border">
              <Button
                variant={viewMode === "calendar" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("calendar")}
                className="rounded-r-none"
              >
                <CalendarIcon className="h-4 w-4 mr-2" />
                Calendrier
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="rounded-l-none"
              >
                Liste
              </Button>
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Plus className="h-4 w-4 mr-2" />
              Nouvelle publication
            </Button>
          </div>
        </div>

        {viewMode === "calendar" ? (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Calendar */}
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle>Décembre 2024</CardTitle>
                <CardDescription>Sélectionnez une date pour voir les publications</CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border"
                  modifiers={{
                    hasPost: scheduledPosts.map((post) => post.date),
                  }}
                  modifiersStyles={{
                    hasPost: {
                      backgroundColor: "hsl(var(--primary))",
                      color: "white",
                      fontWeight: "bold",
                    },
                  }}
                />
                <div className="mt-4 space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    <span>Publications programmées</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    <span>Brouillons</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Day View */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>{selectedDate ? formatDate(selectedDate) : "Sélectionnez une date"}</CardTitle>
                <CardDescription>
                  {selectedDate && getPostsForDate(selectedDate).length > 0
                    ? `${getPostsForDate(selectedDate).length} publication(s) prévue(s)`
                    : "Aucune publication prévue"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {selectedDate ? (
                  <div className="space-y-4">
                    {getPostsForDate(selectedDate).length > 0 ? (
                      getPostsForDate(selectedDate).map((post) => (
                        <div key={post.id} className="border rounded-lg p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center space-x-2">
                              <Clock className="h-4 w-4 text-gray-500" />
                              <span className="text-sm font-medium">{formatTime(post.date)}</span>
                              <Badge
                                variant={post.status === "scheduled" ? "default" : "secondary"}
                                className={post.status === "scheduled" ? "bg-blue-100 text-blue-800" : ""}
                              >
                                {post.status === "scheduled" ? "Programmé" : "Brouillon"}
                              </Badge>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Button variant="ghost" size="sm">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                          <p className="text-sm text-gray-700 line-clamp-2">{post.content}</p>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-8">
                        <CalendarIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">Aucune publication prévue</h3>
                        <p className="text-gray-500 mb-4">Créez votre première publication pour cette date</p>
                        <Button>
                          <Plus className="h-4 w-4 mr-2" />
                          Ajouter une publication
                        </Button>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <CalendarIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">Sélectionnez une date dans le calendrier</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        ) : (
          /* List View */
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Publications programmées</CardTitle>
                <CardDescription>Toutes vos publications à venir</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {scheduledPosts
                    .sort((a, b) => a.date.getTime() - b.date.getTime())
                    .map((post) => (
                      <div key={post.id} className="border rounded-lg p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center space-x-4">
                            <div className="text-sm">
                              <p className="font-medium">{formatDate(post.date)}</p>
                              <p className="text-gray-500">{formatTime(post.date)}</p>
                            </div>
                            <Badge
                              variant={post.status === "scheduled" ? "default" : "secondary"}
                              className={post.status === "scheduled" ? "bg-blue-100 text-blue-800" : ""}
                            >
                              {post.status === "scheduled" ? "Programmé" : "Brouillon"}
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <p className="text-sm text-gray-700">{post.content}</p>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Schedule */}
            <Card>
              <CardHeader>
                <CardTitle>Créneaux recommandés</CardTitle>
                <CardDescription>Heures optimales pour publier sur LinkedIn (basé sur votre audience)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {timeSlots.map((time) => (
                    <Button
                      key={time}
                      variant="outline"
                      className="h-auto p-4 flex flex-col items-center bg-transparent"
                    >
                      <Clock className="h-4 w-4 mb-2" />
                      <span className="text-sm font-medium">{time}</span>
                      <span className="text-xs text-gray-500">Optimal</span>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}
