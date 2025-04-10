import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download } from "lucide-react"
import InvoiceStatusBadge from "@/components/invoice-status-badge"
import InvoiceStatusTimeline from "@/components/invoice-status-timeline"

interface InvoiceDetailsPageProps {
  params: {
    id: string
  }
}

export default function InvoiceDetailsPage({ params }: InvoiceDetailsPageProps) {
  const invoiceId = `#${params.id.toUpperCase()}`

  // Mock data for the example
  const invoice = {
    id: invoiceId,
    status: "approved",
    value: "R$ 1.500,00",
    createdAt: "30/03/2025 14:30",
    updatedAt: "30/03/2025 14:35",
    description: "Compra Online #123",
    paymentMethod: {
      type: "Cartão de Crédito",
      lastDigits: "1234",
      cardHolder: "João da Silva",
    },
    additionalData: {
      accountId: "ACC-12345",
      customerIp: "192.168.1.1",
      device: "Desktop - Chrome",
    },
    timeline: [
      {
        status: "created",
        label: "Fatura Criada",
        date: "30/03/2025 14:30",
      },
      {
        status: "processed",
        label: "Pagamento Processado",
        date: "30/03/2025 14:32",
      },
      {
        status: "approved",
        label: "Transação Aprovada",
        date: "30/03/2025 14:35",
      },
    ],
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="bg-navy-900 rounded-lg p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-1">
                <ArrowLeft className="h-4 w-4" />
                Voltar
              </Button>
            </Link>
            <h1 className="text-2xl font-bold">
              Fatura {invoice.id}{" "}
              <span className="ml-2 inline-block">
                <InvoiceStatusBadge status="approved" />
              </span>
            </h1>
          </div>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
        </div>

        <p className="text-sm text-muted-foreground mb-6">Criada em {invoice.createdAt}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-navy-800 rounded-lg p-4">
            <h2 className="text-lg font-medium mb-4">Informações da Fatura</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">ID da Fatura</span>
                <span className="font-medium">{invoice.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Valor</span>
                <span className="font-medium">{invoice.value}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Data de Criação</span>
                <span className="font-medium">{invoice.createdAt}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Última Atualização</span>
                <span className="font-medium">{invoice.updatedAt}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Descrição</span>
                <span className="font-medium">{invoice.description}</span>
              </div>
            </div>
          </div>

          <div className="bg-navy-800 rounded-lg p-4">
            <h2 className="text-lg font-medium mb-4">Status da Transação</h2>
            <InvoiceStatusTimeline timeline={invoice.timeline} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-navy-800 rounded-lg p-4">
            <h2 className="text-lg font-medium mb-4">Método de Pagamento</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tipo</span>
                <span className="font-medium">{invoice.paymentMethod.type}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Últimos Dígitos</span>
                <span className="font-medium">**** **** **** {invoice.paymentMethod.lastDigits}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Titular</span>
                <span className="font-medium">{invoice.paymentMethod.cardHolder}</span>
              </div>
            </div>
          </div>

          <div className="bg-navy-800 rounded-lg p-4">
            <h2 className="text-lg font-medium mb-4">Dados Adicionais</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">ID da Conta</span>
                <span className="font-medium">{invoice.additionalData.accountId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">IP do Cliente</span>
                <span className="font-medium">{invoice.additionalData.customerIp}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Dispositivo</span>
                <span className="font-medium">{invoice.additionalData.device}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
