import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Eye, Download } from "lucide-react";
import InvoiceStatusBadge from "@/components/invoice-status-badge";
import { cookies } from "next/headers";

export async function getInvoices() {
  const cookiesStore = await cookies();
  const apiKey = cookiesStore.get("apiKey")?.value;
  const response = await fetch(`http://localhost:8001/invoice`, {
    headers: {
      "X-API-Key": apiKey as string,
    },
    cache: "force-cache",
    next: {
      tags: [`accounts/${apiKey}/invoices`],
    },
  });

  return response.json();
}

export default async function InvoiceList() {
  const invoices = await getInvoices();
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-navy-700">
            <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
              ID
            </th>
            <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
              DATA
            </th>
            <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
              DESCRIÇÃO
            </th>
            <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
              VALOR
            </th>
            <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
              STATUS
            </th>
            <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">
              AÇÕES
            </th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice: any) => (
            <tr
              key={invoice.id}
              className="border-b border-navy-800 hover:bg-navy-800/50"
            >
              <td className="py-3 px-4">{invoice.id}</td>
              <td className="py-3 px-4">
                {new Date(invoice.created_at).toLocaleDateString("pt-BR")}
              </td>
              <td className="py-3 px-4">{invoice.description}</td>
              <td className="py-3 px-4">
                {invoice.amount.toFixed(2).replace(".", ",")}
              </td>
              <td className="py-3 px-4">
                <InvoiceStatusBadge status={invoice.status} />
              </td>
              <td className="py-3 px-4 text-right">
                <div className="flex justify-end gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 hover:bg-grey-700"
                    asChild
                  >
                    <Link href={`/invoices/${invoice.id}`}>
                      <Eye className="h-4 w-4 text-grey-400" />
                    </Link>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 hover:bg-grey-700"
                  >
                    <Download className="h-4 w-4 text-grey-400" />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
