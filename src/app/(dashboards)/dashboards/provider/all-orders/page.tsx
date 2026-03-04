import { orderService } from "@/components/service/orders.route"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default async function AllOrdersPage() {
  const orders = await orderService.getOrders()

  const totalAmount = orders?.reduce(
    (acc: number, item: any) =>
      acc + Number(item.amount || item.total || 0),
    0
  )

  return (
    <div className="w-full min-h-screen bg-white p-4 sm:p-6">

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight">
          All Orders
        </h1>
        <p className="text-sm text-muted-foreground">
          Manage and track all customer orders.
        </p>
      </div>

      {/* Card */}
      <div className="rounded-xl border bg-white shadow-sm overflow-hidden">
        <div className="overflow-x-auto w-full px-2">
          <Table className="min-w-[700px]">
            <TableHeader>
              <TableRow className="bg-muted/40">
                <TableHead>Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Email</TableHead>
                <TableHead className="text-right pr-6">
                  Amount
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {orders?.map((order: any) => {
                const status =
                  order.status || order.paymentStatus

                return (
                  <TableRow
                    key={order._id}
                    className="hover:bg-muted/40 transition"
                  >
                    <TableCell className="font-medium">
                      {order.userName}
                    </TableCell>

                    <TableCell>
                      <span
                        className={`px-3 py-1 text-xs rounded-full font-medium ${
                          status === "paid"
                            ? "bg-green-100 text-green-600"
                            : status === "pending"
                            ? "bg-yellow-100 text-yellow-600"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        {status || "paid"}
                      </span>
                    </TableCell>

                    <TableCell className="text-muted-foreground">
                      {order.userEmail}
                    </TableCell>

                    <TableCell className="text-right pr-6 font-medium">
                      ${order.amount || order.total}
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>

            {/* Footer */}
            <tfoot>
              <tr className="border-t bg-muted/20">
                <td
                  colSpan={3}
                  className="p-4 text-sm font-semibold"
                >
                  Total Revenue
                </td>
                <td className="p-4 text-right font-bold">
                  ${totalAmount?.toFixed(2)}
                </td>
              </tr>
            </tfoot>
          </Table>
        </div>
      </div>
    </div>
  )
}