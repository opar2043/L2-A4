import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { StarIcon, TrashIcon } from "lucide-react"

export default function CustomerReviewsPage() {
  const reviews = [
    {
      id: "1",
      mealName: "Classic Burger",
      rating: 5,
      comment: "Absolutely delicious! Best burger I've ever had.",
      date: "2024-01-15"
    },
    {
      id: "2",
      mealName: "Margherita Pizza",
      rating: 4,
      comment: "Great taste, fresh ingredients. Would order again.",
      date: "2024-01-10"
    },
    {
      id: "3",
      mealName: "Caesar Salad",
      rating: 3,
      comment: "Good but could use more dressing.",
      date: "2024-01-05"
    },
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <StarIcon
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ))
  }

  return (
    <div className="w-full min-h-screen bg-white p-4 sm:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">My Reviews</h1>
          <p className="text-sm text-muted-foreground">
            View and manage your meal reviews.
          </p>
        </div>

        <Button className="w-full sm:w-auto">
          Write New Review
        </Button>
      </div>

      {/* Reviews Table */}
      <div className="rounded-xl border bg-white shadow-sm overflow-hidden">
        <div className="overflow-x-auto w-full px-2">
          <Table className="min-w-[700px]">
            <TableHeader>
              <TableRow className="bg-muted/40">
                <TableHead>Meal</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Comment</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right pr-6">Actions</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {reviews.map((review) => (
                <TableRow
                  key={review.id}
                  className="hover:bg-muted/40 transition"
                >
                  <TableCell className="font-medium">
                    {review.mealName}
                  </TableCell>

                  <TableCell>
                    <div className="flex gap-0.5">
                      {renderStars(review.rating)}
                    </div>
                  </TableCell>

                  <TableCell className="text-muted-foreground max-w-xs truncate">
                    {review.comment}
                  </TableCell>

                  <TableCell className="text-muted-foreground">
                    {review.date}
                  </TableCell>

                  <TableCell className="text-right pr-6">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="size-8 text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <TrashIcon className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Empty State */}
      {reviews.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-4">
            You haven't written any reviews yet.
          </p>
          <Button>Write Your First Review</Button>
        </div>
      )}

      {/* Stats Summary */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-lg border bg-muted/30">
          <p className="text-sm text-muted-foreground">Total Reviews</p>
          <p className="text-2xl font-bold">{reviews.length}</p>
        </div>
        <div className="p-4 rounded-lg border bg-muted/30">
          <p className="text-sm text-muted-foreground">Average Rating</p>
          <p className="text-2xl font-bold">
            {(reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1)}
          </p>
        </div>
        <div className="p-4 rounded-lg border bg-muted/30">
          <p className="text-sm text-muted-foreground">5-Star Reviews</p>
          <p className="text-2xl font-bold">
            {reviews.filter(r => r.rating === 5).length}
          </p>
        </div>
      </div>
    </div>
  )
}
