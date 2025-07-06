"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { 
  LayoutDashboard, 
  BarChart3, 
  Calendar, 
  Users, 
  Settings, 
  Zap,
  Menu,
  X,
  LogOut,
  User
} from "lucide-react"

const navigation = [
  {
    name: "Tableau de bord",
    href: "/dashboard",
    icon: LayoutDashboard,
    description: "Vue d'ensemble"
  },
  {
    name: "Générateur IA",
    href: "/dashboard/generator",
    icon: Zap,
    description: "Créer du contenu"
  },
  {
    name: "Calendrier",
    href: "/dashboard/calendar",
    icon: Calendar,
    description: "Planifier les posts"
  },
  {
    name: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart3,
    description: "Analyser les performances"
  },
  {
    name: "CRM",
    href: "/dashboard/crm",
    icon: Users,
    description: "Gérer les contacts"
  },
  {
    name: "Paramètres",
    href: "/dashboard/settings",
    icon: Settings,
    description: "Configuration"
  }
]

function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const handleSignOut = () => {
    // TODO: Implémenter la déconnexion avec NextAuth
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 z-50 lg:hidden ${sidebarOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
        <div className="fixed inset-y-0 left-0 flex w-64 flex-col bg-white">
          <div className="flex h-16 items-center justify-between px-4 border-b">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">TF</span>
              </div>
              <span className="text-xl font-bold">Taplio France</span>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setSidebarOpen(false)}
              aria-label="Fermer le menu"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link key={item.name} href={item.href}>
                  <div className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                    isActive 
                      ? 'bg-blue-50 text-blue-700 border border-blue-200' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}>
                    <item.icon className="h-5 w-5" />
                    <div>
                      <div className="font-medium">{item.name}</div>
                      <div className="text-xs text-gray-500">{item.description}</div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </nav>
          <div className="border-t p-4">
            <div className="flex items-center space-x-3 px-3 py-2">
              <User className="h-5 w-5 text-gray-500" />
              <div>
                <div className="font-medium">Marie Dupont</div>
                <div className="text-xs text-gray-500">marie@example.com</div>
              </div>
            </div>
            <Button 
              variant="ghost" 
              className="w-full mt-2 justify-start" 
              onClick={handleSignOut}
              aria-label="Se déconnecter"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Déconnexion
            </Button>
          </div>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex flex-col flex-grow bg-white border-r">
          <div className="flex h-16 items-center px-4 border-b">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">TF</span>
              </div>
              <span className="text-xl font-bold">Taplio France</span>
            </div>
          </div>
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link key={item.name} href={item.href}>
                  <div className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                    isActive 
                      ? 'bg-blue-50 text-blue-700 border border-blue-200' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}>
                    <item.icon className="h-5 w-5" />
                    <div>
                      <div className="font-medium">{item.name}</div>
                      <div className="text-xs text-gray-500">{item.description}</div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </nav>
          <div className="border-t p-4">
            <div className="flex items-center space-x-3 px-3 py-2">
              <User className="h-5 w-5 text-gray-500" />
              <div>
                <div className="font-medium">Marie Dupont</div>
                <div className="text-xs text-gray-500">marie@example.com</div>
              </div>
            </div>
            <Button 
              variant="ghost" 
              className="w-full mt-2 justify-start" 
              onClick={handleSignOut}
              aria-label="Se déconnecter"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Déconnexion
            </Button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Mobile header */}
        <div className="sticky top-0 z-40 flex h-16 items-center gap-x-4 border-b bg-white px-4 shadow-sm lg:hidden">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setSidebarOpen(true)}
            aria-label="Ouvrir le menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex-1 text-sm font-semibold leading-6 text-gray-900">
            {navigation.find(item => item.href === pathname)?.name || "Dashboard"}
          </div>
        </div>

        {/* Page content */}
        <main className="py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
