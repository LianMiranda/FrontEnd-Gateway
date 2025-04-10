import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Eye, Download, Plus } from "lucide-react"
import InvoiceStatusBadge from "@/components/invoice-status-badge"
import Pagination from "@/components/pagination"

const invoices = [
  {
    id: "#INV-001",
    date: "30/03/2025",
    description: "Compra Online #123",
    value: "R$ 1.500,00",
    status: "approved",
  },
  {
    id: "#INV-002",
    date: "29/03/2025",
    description: "Serviço Premium",
    value: "R$ 15.000,00",
    status: "pending",
  },
  {
    id: "#INV-003",
    date: "28/03/2025",
    description: "Assinatura Mensal",
    value: "R$ 99,90",
    status: "rejected",
  },
]

export default function InvoicesPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="bg-navy-900 rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-2xl font-bold">Faturas</h1>
            <p className="text-muted-foreground">Gerencie suas faturas e acompanhe os pagamentos</p>
          </div>
          <Link href="/invoices/create">
            <Button className="bg-indigo-600 hover:bg-indigo-700">
              <Plus className="mr-2 h-4 w-4" />
              Nova Fatura
            </Button>
          </Link>
        </div>

        <div className="bg-navy-800 rounded-lg p-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label htmlFor="status" className="text-sm font-medium mb-1 block">
                Status
              </label>
              <Select defaultValue="all">
                <SelectTrigger className="bg-navy-900 border-navy-700">
                  <SelectValue placeholder="Todos" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="approved">Aprovado</SelectItem>
                  <SelectItem value="pending">Pendente</SelectItem>
                  <SelectItem value="rejected">Rejeitado</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="startDate" className="text-sm font-medium mb-1 block">
                Data Inicial
              </label>
              <Input id="startDate" type="date" placeholder="dd/mm/aaaa" className="bg-navy-900 border-navy-700" />
            </div>
            <div>
              <label htmlFor="endDate" className="text-sm font-medium mb-1 block">
                Data Final
              </label>
              <Input id="endDate" type="date" placeholder="dd/mm/aaaa" className="bg-navy-900 border-navy-700" />
            </div>
            <div>
              <label htmlFor="search" className="text-sm font-medium mb-1 block">
                Buscar
              </label>
              <Input id="search" placeholder="ID ou descrição" className="bg-navy-900 border-navy-700" />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-navy-700">
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">ID</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">DATA</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">DESCRIÇÃO</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">VALOR</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">STATUS</th>
                <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">AÇÕES</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice) => (
                <tr key={invoice.id} className="border-b border-navy-800 hover:bg-navy-800/50">
                  <td className="py-3 px-4">{invoice.id}</td>
                  <td className="py-3 px-4">{invoice.date}</td>
                  <td className="py-3 px-4">{invoice.description}</td>
                  <td className="py-3 px-4">{invoice.value}</td>
                  <td className="py-3 px-4">
                    <InvoiceStatusBadge status={invoice.status} />
                  </td>
                  <td className="py-3 px-4 text-right">
                    <div className="flex justify-end gap-2">
                      <Link href={`/invoices/${invoice.id.replace("#", "")}`}>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 text-sm text-muted-foreground">Mostrando 1 - 3 de 50 resultados</div>

        <Pagination currentPage={1} totalPages={3} />
      </div>
    </div>
  )
}
