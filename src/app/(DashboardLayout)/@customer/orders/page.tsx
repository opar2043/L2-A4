import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function CustomerOrdersPage() {
  const orders = [
    {
      id: "ORD-001",
      date: "2024-01-15",
      items: "Burger, Fries, Coke",
      total: 25.99,
      status: "DELIVERED",
      address: "123 Main St, City"
    },
    {
      id: "ORD-002",
      date: "2024-01-18",
      items: "Pizza, Garlic Bread",
      total: 32.50,
      status: "PREPARING",
      address: "456 Oak Ave, Town"
    },
    {
      id: "ORD-003",
      date: "2024-01-20",
      items: "Salad, Soup",
      total: 18.00,
      status: "PENDING",
      address: "789 Pine Rd, Village"
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "DELIVERED":
        return "bg-green-100 text-green-600"
      case "PREPARING":
        return "bg-blue-100 text-blue-600"
      case "READY":
        return "bg-purple-100 text-purple-600"
      case "CONFIRMED":
        return "bg-yellow-100 text-yellow-600"
      case "PENDING":
        return "bg-gray-100 text-gray-600"
      default:
        return "bg-gray-100 text-gray-600"
    }
  }

  return (
    <div className="w-full min-h-screen bg-white p-4 sm:p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight">
          My Orders
        </h1>
        <p className="text-sm text-muted-foreground">
          Track and manage your food orders.
        </p>
      </div>

      {/* Orders Table */}
      <div className="rounded-xl border bg-white shadow-sm overflow-hidden">
        <div className="overflow-x-auto w-full px-2">
          <Table className="min-w-[700px]">
            <TableHeader>
              <TableRow className="bg-muted/40">
                <TableHead>Order ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Items</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Address</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {orders.map((order) => (
                <TableRow
                  key={order.id}
                  className="hover:bg-muted/40 transition"
                >
                  <TableCell className="font-medium">
                    {order.id}
                  </TableCell>

                  <TableCell className="text-muted-foreground">
                    {order.date}
                  </TableCell>

                  <TableCell className="text-muted-foreground">
                    {order.items}
                  </TableCell>

                  <TableCell className="font-medium">
                    ${order.total.toFixed(2)}
                  </TableCell>

                  <TableCell>
                    <Badge className={getStatusColor(order.status)}>
                      {order.status}
                    </Badge>
                  </TableCell>

                  <TableCell className="text-muted-foreground">
                    {order.address}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Order Status Legend */}
      <div className="mt-6 p-4 rounded-lg border bg-muted/30">
        <h3 className="font-semibold mb-3">Order Status Legend</h3>
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gray-400"></div>
            <span className="text-sm">Pending</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <span className="text-sm">Confirmed</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-400"></div>
            <span className="text-sm">Preparing</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-purple-400"></div>
            <span className="text-sm">Ready</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
            <span className="text-sm">Delivered</span>
          </div>
        </div>
      </div>
    </div>
  )
}
