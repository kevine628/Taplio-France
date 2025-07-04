import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        // Simulation d'une base de données d'utilisateurs
        const users = [
          {
            id: "1",
            email: "demo@taplio-france.com",
            password: "demo123",
            name: "Jean Dupont",
            role: "user"
          },
          {
            id: "2", 
            email: "admin@taplio-france.com",
            password: "admin123",
            name: "Admin",
            role: "admin"
          }
        ]

        const user = users.find(user => 
          user.email === credentials.email && 
          user.password === credentials.password
        )

        if (user) {
          return {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role
          }
        }

        return null
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: "/login"
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
      }
      return token
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.sub
        session.user.role = token.role
      }
      return session
    }
  }
})

export { handler as GET, handler as POST } 