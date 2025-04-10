interface InvoiceStatusBadgeProps {
  status: string
}

export default function InvoiceStatusBadge({ status }: InvoiceStatusBadgeProps) {
  const getStatusDetails = (status: string) => {
    switch (status) {
      case "approved":
        return {
          label: "Aprovado",
          className: "status-approved",
        }
      case "pending":
        return {
          label: "Pendente",
          className: "status-pending",
        }
      case "rejected":
        return {
          label: "Rejeitado",
          className: "status-rejected",
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
