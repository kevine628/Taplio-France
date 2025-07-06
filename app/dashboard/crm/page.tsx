"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  Filter,
  Plus,
  MessageSquare,
  Calendar,
  Mail,
  Building,
  MapPin,
  Star,
  MoreHorizontal,
} from "lucide-react"
import DashboardLayout from "@/components/dashboard-layout"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const contacts = [
  {
    id: 1,
    name: "Marie Dubois",
    title: "Directrice RH",
    company: "TechCorp France",
    location: "Paris, France",
    status: "prospect",
    lastContact: "Il y a 2 jours",
    notes: "Intéressée par nos solutions de recrutement IA",
    avatar: "/placeholder.svg?height=40&width=40",
    connections: 847,
    engagement: "Élevé",
  },
  {
    id: 2,
    name: "Pierre Martin",
    title: "CEO",
    company: "StartupLab",
    location: "Lyon, France",
    status: "client",
    lastContact: "Il y a 1 semaine",
    notes: "Client depuis 6 mois, très satisfait",
    avatar: "/placeholder.svg?height=40&width=40",
    connections: 1250,
    engagement: "Moyen",
  },
  {
    id: 3,
    name: "Sophie Leroy",
    title: "Consultante RH",
    company: "Indépendante",
    location: "Marseille, France",
    status: "nouveau",
    lastContact: "Jamais",
    notes: "",
    avatar: "/placeholder.svg?height=40&width=40",
    connections: 523,
    engagement: "Faible",
  },
  {
    id: 4,
    name: "Thomas Bernard",
    title: "Responsable Talent",
    company: "BigCorp",
    location: "Toulouse, France",
    status: "prospect",
    lastContact: "Il y a 5 jours",
    notes: "Demande une démo de la plateforme",
    avatar: "/placeholder.svg?height=40&width=40",
    connections: 692,
    engagement: "Élevé",
  },
]

const activities = [
  {
    id: 1,
    type: "message",
    contact: "Marie Dubois",
    action: "Vous a envoyé un message",
    time: "Il y a 2h",
    content: "Merci pour votre présentation, très intéressant !",
  },
  {
    id: 2,
    type: "connection",
    contact: "Pierre Martin",
    action: "A liké votre publication",
    time: "Il y a 4h",
    content: "Publication sur l'IA dans le recrutement",
  },
  {
    id: 3,
    type: "view",
    contact: "Sophie Leroy",
    action: "A consulté votre profil",
    time: "Il y a 1 jour",
    content: "",
  },
]

const statusColors = {
  nouveau: "bg-blue-100 text-blue-800",
  prospect: "bg-yellow-100 text-yellow-800",
  client: "bg-green-100 text-green-800",
  inactif: "bg-gray-100 text-gray-800",
}

const statusLabels = {
  nouveau: "Nouveau",
  prospect: "Prospect",
  client: "Client",
  inactif: "Inactif",
}

export default function CRMPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("all")

  const filteredContacts = contacts.filter((contact) => {
    const matchesSearch =
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.company.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = selectedStatus === "all" || contact.status === selectedStatus
    return matchesSearch && matchesStatus
  })

  const getStatusCount = (status: string) => {
    if (status === "all") return contacts.length
    return contacts.filter((c) => c.status === status).length
  }

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">CRM LinkedIn</h1>
            <p className="text-gray-600 mt-1">Gérez vos contacts et prospects LinkedIn</p>
          </div>
          <div className="flex items-center space-x-3 mt-4 sm:mt-0">
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filtres
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Plus className="h-4 w-4 mr-2" />
              Ajouter contact
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total contacts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{contacts.length}</div>
              <p className="text-xs text-muted-foreground">+12 ce mois-ci</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Prospects actifs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{getStatusCount("prospect")}</div>
              <p className="text-xs text-muted-foreground">En cours de négociation</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Clients</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{getStatusCount("client")}</div>
              <p className="text-xs text-muted-foreground">Taux de conversion: 25%</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Nouveaux contacts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{getStatusCount("nouveau")}</div>
              <p className="text-xs text-muted-foreground">Cette semaine</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="contacts" className="space-y-6">
          <TabsList>
            <TabsTrigger value="contacts">Contacts</TabsTrigger>
            <TabsTrigger value="activities">Activités</TabsTrigger>
          </TabsList>

          <TabsContent value="contacts" className="space-y-6">
            {/* Search and Filters */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Rechercher un contact..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant={selectedStatus === "all" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedStatus("all")}
                    >
                      Tous ({getStatusCount("all")})
                    </Button>
                    <Button
                      variant={selectedStatus === "nouveau" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedStatus("nouveau")}
                    >
                      Nouveaux ({getStatusCount("nouveau")})
                    </Button>
                    <Button
                      variant={selectedStatus === "prospect" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedStatus("prospect")}
                    >
                      Prospects ({getStatusCount("prospect")})
                    </Button>
                    <Button
                      variant={selectedStatus === "client" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedStatus("client")}
                    >
                      Clients ({getStatusCount("client")})
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contacts List */}
            <Card>
              <CardHeader>
                <CardTitle>Contacts ({filteredContacts.length})</CardTitle>
                <CardDescription>Gérez vos relations professionnelles LinkedIn</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredContacts.map((contact) => (
                    <div key={contact.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={contact.avatar || "/placeholder.svg"} alt={contact.name} />
                            <AvatarFallback>
                              {contact.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>

                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <h3 className="font-medium text-gray-900">{contact.name}</h3>
                              <Badge className={statusColors[contact.status as keyof typeof statusColors]}>
                                {statusLabels[contact.status as keyof typeof statusLabels]}
                              </Badge>
                            </div>

                            <p className="text-sm text-gray-600 mb-1">{contact.title}</p>

                            <div className="flex items-center space-x-4 text-xs text-gray-500 mb-2">
                              <div className="flex items-center">
                                <Building className="h-3 w-3 mr-1" />
                                {contact.company}
                              </div>
                              <div className="flex items-center">
                                <MapPin className="h-3 w-3 mr-1" />
                                {contact.location}
                              </div>
                              <div className="flex items-center">
                                <Star className="h-3 w-3 mr-1" />
                                {contact.connections} connexions
                              </div>
                            </div>

                            {contact.notes && (
                              <p className="text-sm text-gray-700 bg-gray-100 p-2 rounded">💡 {contact.notes}</p>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          <div className="text-right text-xs text-gray-500 mr-4">
                            <p>Dernier contact:</p>
                            <p>{contact.lastContact}</p>
                            <Badge variant="outline" className="mt-1">
                              {contact.engagement}
                            </Badge>
                          </div>

                          <div className="flex space-x-1">
                            <Button variant="ghost" size="sm">
                              <MessageSquare className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Mail className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Calendar className="h-4 w-4" />
                            </Button>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent>
                                <DropdownMenuItem>Voir le profil</DropdownMenuItem>
                                <DropdownMenuItem>Ajouter une note</DropdownMenuItem>
                                <DropdownMenuItem>Programmer un rappel</DropdownMenuItem>
                                <DropdownMenuItem>Changer le statut</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="activities" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Activités récentes</CardTitle>
                <CardDescription>Interactions et engagements de vos contacts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activities.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-4 p-4 border rounded-lg">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        {activity.type === "message" && <MessageSquare className="h-4 w-4 text-blue-600" />}
                        {activity.type === "connection" && <Star className="h-4 w-4 text-blue-600" />}
                        {activity.type === "view" && <Search className="h-4 w-4 text-blue-600" />}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm">
                          <span className="font-medium">{activity.contact}</span> {activity.action}
                        </p>
                        {activity.content && <p className="text-xs text-gray-600 mt-1">{activity.content}</p>}
                        <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
