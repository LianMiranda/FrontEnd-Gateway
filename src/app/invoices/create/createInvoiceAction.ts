"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function createInvoiceAction(formData: FormData) {
  const cookieStore = await cookies();
  const apiKey = await cookieStore.get("apiKey")?.value;
  const amount = formData.get("amount")?.toString().replace(".", ",");
  const description = formData.get("description");
  const cardNumber = formData.get("cardNumber")?.toString().replace(/\s/g, '');
  const [expiryMonth, expiryYear] = formData
    .get("expiryDate")!
    .toString()
    .split("/");
  const cvv = formData.get("cvv");
  const cardHolder = formData.get("cardHolder");

  const response = await fetch("http://localhost:8001/invoice", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": apiKey as string,
    },
    body: JSON.stringify({
      amount: parseFloat(amount as string),
      description,
      card_number: cardNumber,
      expiryMonth: parseInt(expiryMonth),
      expiryYear: parseInt(expiryYear),
      cvv,
      cardholder_name: cardHolder,
      payment_type: "credit_card",
    }),
  });

  if (!response.ok) {
    console.error("Erro ao criar fatura", response);
    throw new Error("Erro ao criar fatura");
  }

  redirect(`/invoices`);
}