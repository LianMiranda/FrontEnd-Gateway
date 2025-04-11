import {InfoIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import AuthForm from "./AuthForm"

export default function AuthPage() {
  return (
    <div className="container mx-auto flex items-center justify-center min-h-[calc(100vh-64px)]">
      <Card className="w-full max-w-md bg-navy-900 border-navy-800">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Autenticação Gateway</CardTitle>
          <CardDescription>Insira sua API Key para acessar o sistema</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <AuthForm />
          <Alert className="bg-navy-800 border-navy-700">
            <InfoIcon className="h-4 w-4 text-blue-400" />
            <AlertTitle className="text-gray-200">Como obter uma API Key?</AlertTitle>
            <AlertDescription className="text-gray-400">
                Para obter sua API Key, você precisa criar uma conta de comerciante. Entre em contato com nosso suporte
                para mais informações.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  )
}
