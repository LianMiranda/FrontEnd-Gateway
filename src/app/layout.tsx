import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Full Cycle Gateway",
  description: "Gateway de pagamento completo",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <footer className="py-4 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Full Cycle Gateway. Todos os direitos reservados.
          </footer>
        </div>
      </body>
    </html>
  )
}
