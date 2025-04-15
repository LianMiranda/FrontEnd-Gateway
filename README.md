# Gateway de Pagamento - Frontend (Next.js)

Este é o frontend desenvolvido em Next.js, parte do projeto Gateway de Pagamento criado durante a Imersão Full Stack & Full Cycle.

## ⚠️ Aviso Importante

Este projeto foi desenvolvido exclusivamente para fins didáticos como parte da Imersão Full Stack & Full Cycle.

## 📋 Sobre o Projeto

O Gateway de Pagamento é um sistema distribuído composto por:

- Frontend em Next.js (este repositório)
- API Gateway em Go
- Sistema de Antifraude em Nest.js
- Apache Kafka para comunicação assíncrona

## 🏗️ Arquitetura da aplicação

Visualize a arquitetura completa [aqui](#)

## 📋 Pré-requisitos

- Docker

## ⚠️ Importante!

É necessário executar primeiro o serviço `go-gateway` antes deste projeto, pois este frontend utiliza a rede Docker criada pelo `go-gateway`.

## 🚀 Setup do Projeto

1. Clone o repositório:
```bash
git clone https://github.com/devfullcycle/imersao22.git
cd imersao22/next-frontend
```

2. Verifique se o serviço `go-gateway` já está em execução

3. Inicie os serviços com Docker Compose:
```bash
docker-compose up -d
```

4. Execute a aplicação dentro do container:
```bash
docker-compose exec nextjs bash
npm run dev
```

O frontend estará disponível em [http://localhost:3000](http://localhost:3000).

## 💡 Funcionalidades

### 🔐 Autenticação

- Login via API Key gerada pelo sistema Gateway
- Proteção de rotas via middleware

### 💰 Gerenciamento de Faturas

- Listagem de todas as faturas
- Visualização detalhada de uma fatura específica
- Criação de novas faturas (processamento de pagamento)
- Visualização de status (aprovado, pendente, rejeitado)

### 🖥️ Interface de Usuário

O frontend possui 4 telas principais:

1. **Login** - Entrada da API Key para autenticação
2. **Listagem de Faturas** - Visão geral de todas as transações
3. **Detalhes da Fatura** - Informações completas de uma transação
4. **Criação de Fatura** - Formulário para processamento de um novo pagamento

Todas as telas incluem uma barra de navegação superior que exibe "Full Cycle Gateway" e um botão de logout.

## 🔄 Integração com API Gateway

O frontend se comunica com a API Gateway para:

- Autenticação de usuários
- Criação e listagem de faturas
- Consulta de detalhes de faturas
- Atualização de dados via revalidação de tags

## 📊 Regras de Negócio

- Transações acima de R$ 10.000 são automaticamente enviadas para análise e ficam com status "pendente"
- Transações menores são processadas imediatamente
- A interface mostra status diferenciados por cores:
  - 🟢 Verde (aprovado)
  - 🟡 Amarelo (pendente)
  - 🔴 Vermelho (rejeitado)

## 💻 Desenvolvimento

Para desenvolvimento local, você pode editar os arquivos localmente - eles são montados como volume no container Docker, que atualiza automaticamente as mudanças.

## 🛠️ Tecnologias Utilizadas

- Next.js 15 com App Router
- Tailwind CSS para estilização
- TypeScript para tipagem estática
- Server Components e Server Actions
- Shadcn UI para componentes

O projeto segue as melhores práticas de desenvolvimento React e Next.js, utilizando Server Components quando possível e Client Components quando necessário para interatividade.