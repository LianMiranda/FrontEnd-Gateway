import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CreditCard, Lock } from "lucide-react"

export default function NewInvoicePage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="bg-navy-900 rounded-lg p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Criar Nova Fatura</h1>
          <p className="text-muted-foreground">Preencha os dados abaixo para processar um novo pagamento</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="value" className="text-sm font-medium">
                Valor
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">R$</span>
                <Input id="value" type="text" placeholder="0,00" className="pl-10 bg-navy-800 border-navy-700" />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="description" className="text-sm font-medium">
                Descrição
              </label>
              <Textarea
                id="description"
                placeholder="Descreva o motivo do pagamento"
                className="min-h-[120px] bg-navy-800 border-navy-700"
              />
            </div>
          </div>

          <div className="bg-navy-800 rounded-lg p-4">
            <h2 className="text-lg font-medium mb-4">Dados do Cartão</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="cardNumber" className="text-sm font-medium">
                  Número do Cartão
                </label>
                <div className="relative">
                  <Input
                    id="cardNumber"
                    placeholder="0000 0000 0000 0000"
                    className="bg-navy-700 border-navy-600 pr-10"
                  />
                  <CreditCard className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="expiryDate" className="text-sm font-medium">
                    Data de Expiração
                  </label>
                  <Input id="expiryDate" placeholder="MM/AA" className="bg-navy-700 border-navy-600" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="cvv" className="text-sm font-medium">
                    CVV
                  </label>
                  <Input id="cvv" placeholder="123" className="bg-navy-700 border-navy-600" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="cardHolder" className="text-sm font-medium">
                  Nome no Cartão
                </label>
                <Input id="cardHolder" placeholder="Como aparece no cartão" className="bg-navy-700 border-navy-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-navy-800 pt-6">
          <div className="space-y-2 mb-6">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span>R$ 0,00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Taxa de Processamento (2%)</span>
              <span>R$ 0,00</span>
            </div>
            <div className="flex justify-between text-lg font-medium">
              <span>Total</span>
              <span>R$ 0,00</span>
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <Link href="/">
              <Button variant="outline" className="bg-navy-800 border-navy-700 hover:bg-navy-700">
                Cancelar
              </Button>
            </Link>
            <Button className="bg-indigo-600 hover:bg-indigo-700 gap-2">
              <Lock className="h-4 w-4" />
              Processar Pagamento
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
