import { CheckCircle } from "lucide-react"

interface TimelineItem {
  status: string
  label: string
  date: string
}

interface InvoiceStatusTimelineProps {
  timeline: TimelineItem[]
}

export default function InvoiceStatusTimeline({ timeline }: InvoiceStatusTimelineProps) {
  return (
    <div className="space-y-4">
      {timeline.map((item, index) => (
        <div key={index} className="flex items-start gap-3">
          <div className="flex-shrink-0 mt-1">
            <CheckCircle className="h-5 w-5 text-green-500" />
          </div>
          <div>
            <h3 className="font-medium">{item.label}</h3>
            <p className="text-sm text-muted-foreground">{item.date}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
