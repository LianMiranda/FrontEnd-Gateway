import { Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function AuthPage() {
  return (
    <div className="container mx-auto flex items-center justify-center min-h-[calc(100vh-64px)]">
      <Card className="w-full max-w-md bg-navy-900 border-navy-800">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Autenticação Gateway</CardTitle>
          <CardDescription>Insira sua API Key para acessar o sistema</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="apiKey" className="text-sm font-medium">
              API Key
            </label>
            <div className="flex gap-2">
              <Input id="apiKey" placeholder="Digite sua API Key" className="bg-navy-800 border-navy-700" />
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

          <Alert className="bg-navy-800 border-navy-700">
            <Info className="h-4 w-4 text-blue-400" />
            <AlertDescription className="text-sm">
              <h4 className="font-medium mb-1">Como obter uma API Key?</h4>
              <p className="text-muted-foreground">
                Para obter sua API Key, você precisa criar uma conta de comerciante. Entre em contato com nosso suporte
                para mais informações.
              </p>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  )
}
