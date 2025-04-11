import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function LoginAction(formData: FormData) {
  "use server";
  const apiKey = formData.get("apiKey");
  console.log("API Key recebida:", apiKey);

  const response = await fetch("http://localhost:8001/accounts", {
    headers: {
      "X-API-KEY": apiKey as string,
    },
  });

  if (!response.ok) {
    throw new Error("Invalid API Key");
  }

  const cookiesStore = await cookies();
  console.log("API Key antes de salvar no cookie:", apiKey);
  cookiesStore.set("apiKey", apiKey as string);

  redirect("/invoices");
}

export default function AuthForm() {
  return (
    <form className="space-y-4" action={LoginAction}>
      <div className="space-y-2">
        <label htmlFor="apiKey" className="text-sm font-medium">
          API Key
        </label>
        <div className="flex gap-2">
          <Input
            id="apiKey"
            name="apiKey"
            placeholder="Digite sua API Key"
            className="bg-navy-800 border-navy-700"
          />
          <Button className="bg-indigo-600 hover:bg-indigo-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Button>
        </div>
      </div>
    </form>
  );
}
