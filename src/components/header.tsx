import Link from "next/link"
import { LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-navy-900 border-b border-navy-800">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-white">
          Full Cycle Gateway
        </Link>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-300">Olá, usuário</span>
          <Button variant="destructive" size="sm" className="flex items-center gap-1">
            <LogOut size={16} />
            Logout
          </Button>
        </div>
      </div>
    </header>
  )
}
