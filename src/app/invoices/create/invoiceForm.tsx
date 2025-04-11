"use client";
import { Textarea } from "@/components/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CreditCard, Link, Lock } from "lucide-react";
import { createInvoiceAction } from "./createInvoiceAction";
import { NumericFormat, PatternFormat } from "react-number-format";

export default function InvoiceForm() {
  return (
    <form action={createInvoiceAction}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="amount" className="text-sm font-medium">
              Valor
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                R$
              </span>
              <NumericFormat
                id="amount"
                name="amount"
                placeholder="0,00"
                thousandSeparator="."
                decimalSeparator=","
                decimalScale={2}
                fixedDecimalScale
                className="flex h-10 w-full rounded-md border bg-navy-800 border-navy-700 px-3 py-2 pl-10 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="description" className="text-sm font-medium">
              Descrição
            </label>
            <Textarea
              id="description"
              name="description"
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
                <PatternFormat
                  id="cardNumber"
                  name="cardNumber"
                  placeholder="0000 0000 0000 0000"
                  customInput={Input}
                  format="#### #### #### ####"
                  mask="_"
                  className="bg-navy-700 border-navy-600 pr-10"
                  required
                  minLength={19}
                  pattern="[0-9\s]{19}"
                />
                <CreditCard className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="expiryDate" className="text-sm font-medium">
                  Data de Expiração
                </label>
                <PatternFormat
                  id="expiryDate"
                  name="expiryDate"
                  placeholder="MM/AA"
                  customInput={Input}
                  format="##/##"
                  mask="_"
                  className="bg-navy-700 border-navy-600"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="cvv" className="text-sm font-medium">
                  CVV
                </label>
                <PatternFormat
                  id="cvv"
                  name="cvv"
                  placeholder="123"
                  customInput={Input}
                  format="####"
                  className="bg-navy-700 border-navy-600"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="cardHolder" className="text-sm font-medium">
                Nome no Cartão
              </label>
              <Input
                id="cardHolder"
                name="cardHolder"
                placeholder="Como aparece no cartão"
                className="bg-navy-700 border-navy-600"
              />
            </div>
            <div className="mt-6 border-t border-navy-800 pt-6">
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>R$ 0,00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    Taxa de Processamento (2%)
                  </span>
                  <span>R$ 0,00</span>
                </div>
                <div className="flex justify-between text-lg font-medium">
                  <span>Total</span>
                  <span>R$ 0,00</span>
                </div>
              </div>

              <div className="flex justify-end gap-3">
                <Link href="/">
                  <Button
                    variant="outline"
                    className="bg-navy-800 border-navy-700 hover:bg-navy-700"
                  >
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
      </div>
    </form>
  );
}
