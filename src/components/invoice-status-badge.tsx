interface InvoiceStatusBadgeProps {
  status: string
}

export default function InvoiceStatusBadge({ status }: InvoiceStatusBadgeProps) {
  const getStatusDetails = (status: string) => {
    switch (status) {
      case "approved":
        return {
          label: "Aprovado",
          className: "bg-green-500/10 text-green-500 px-2 py-1 rounded-full text-xs font-medium",
        }
      case "pending":
        return {
          label: "Pendente",
          className: "bg-yellow-500/10 text-yellow-500 px-2 py-1 rounded-full text-xs font-medium",
        }
      case "rejected":
        return {
          label: "Rejeitado",
          className: "bg-red-500/10 text-red-500 px-2 py-1 rounded-full text-xs font-medium",
        }
      default:
        return {
          label: status,
          className: "bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-medium",
        }
    }
  }

  const { label, className } = getStatusDetails(status)

  return <span className={className}>{label}</span>
}
