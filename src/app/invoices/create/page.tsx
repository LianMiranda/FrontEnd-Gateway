import InvoiceForm from "./invoiceForm"

export default function NewInvoicePage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="bg-navy-900 rounded-lg p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Criar Nova Fatura</h1>
          <p className="text-muted-foreground">Preencha os dados abaixo para processar um novo pagamento</p>
        </div>
        <InvoiceForm />
      </div>
    </div>
  )
}
