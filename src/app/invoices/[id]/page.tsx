import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download } from "lucide-react";
import InvoiceStatusBadge from "@/components/invoice-status-badge";
import { cookies } from "next/headers";

export async function getInvoice(id: string) {
  const cookiesStore = await cookies();
  const apiKey = cookiesStore.get("apiKey")?.value;
  const response = await fetch(`http://localhost:8001/invoice/${id}`, {
    headers: {
      "X-API-Key": apiKey as string,
    },
    cache: "force-cache",
    next: {
      tags: [`accounts/${apiKey}/invoices/${id}`],
    },
  });

  return response.json();
}

export default async function InvoiceDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const invoiceData = await getInvoice(id);

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="bg-navy-900 rounded-lg p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="gap-1" asChild>
              <Link href="/invoices">
                <ArrowLeft className="h-4 w-4" />
                Voltar
              </Link>
            </Button>
            <h1 className="text-2xl font-bold">
              Fatura {id}{" "}
              <span className="ml-2 inline-block">
                <InvoiceStatusBadge status={invoiceData.status} />
              </span>
            </h1>
          </div>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
        </div>

        <p className="text-sm text-muted-foreground mb-6">
          Criada em {invoiceData.created_at}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-navy-800 rounded-lg p-4">
            <h2 className="text-lg font-medium mb-4">Informações da Fatura</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">ID da Fatura</span>
                <span className="font-medium">{invoiceData.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Valor</span>
                <span className="font-medium">{invoiceData.amount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Data de Criação</span>
                <span className="font-medium">
                  {new Date(invoiceData.created_at).toLocaleDateString("pt-BR")}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Descrição</span>
                <span className="font-medium">{invoiceData.description}</span>
              </div>
            </div>
          </div>

          <div className="bg-navy-800 rounded-lg p-4">
            <h2 className="text-lg font-medium mb-4">Status da Transação</h2>
            <InvoiceStatusBadge status={invoiceData.status} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-navy-800 rounded-lg p-4">
            <h2 className="text-lg font-medium mb-4">Método de Pagamento</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tipo</span>
                <span className="font-medium">
                  {invoiceData.payment_type == "credit_card" ? "Cartão de Crédito" : "Boleto"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Últimos Dígitos</span>
                <span className="font-medium">
                 {invoiceData.card_last_digits}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Titular</span>
                <span className="font-medium">
                  {invoiceData.cardholder_name}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-navy-800 rounded-lg p-4">
            <h2 className="text-lg font-medium mb-4">Dados Adicionais</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">ID da Conta</span>
                <span className="font-medium">{invoiceData.account_id}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
