import { orderService } from "@/components/service/orders.route"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
export default async function AllOrdersPage() {
    const orders = await orderService.getOrders();
  return (
    <div>
        <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Email</TableHead>

          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((invoice : any) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.userName || invoice.userName }</TableCell>
            <TableCell>{invoice.status || invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.userEmail || invoice.email}</TableCell>
            <TableCell className="text-right">{invoice.amount || invoice.total}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
    </div>
  )
}
