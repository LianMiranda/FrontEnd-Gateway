import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface PaginationProps {
  currentPage: number
  totalPages: number
}

export default function Pagination({ currentPage, totalPages }: PaginationProps) {
  return (
    <div className="flex justify-center mt-6">
      <div className="flex items-center gap-1">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 bg-navy-800 border-navy-700 hover:bg-navy-700"
          disabled={currentPage === 1}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Button
            key={page}
            variant={page === currentPage ? "default" : "outline"}
            size="sm"
            className={
              page === currentPage
                ? "h-8 w-8 bg-indigo-600 hover:bg-indigo-700"
                : "h-8 w-8 bg-navy-800 border-navy-700 hover:bg-navy-700"
            }
          >
            {page}
          </Button>
        ))}
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 bg-navy-800 border-navy-700 hover:bg-navy-700"
          disabled={currentPage === totalPages}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
