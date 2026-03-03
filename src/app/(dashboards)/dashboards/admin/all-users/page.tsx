import { userService } from "@/components/service/user.route"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { MoreHorizontalIcon } from "lucide-react"

export default async function AllUsersPage() {
  const users = await userService.getusers();

  return (
    <div className="w-full min-h-screen bg-white p-4 sm:p-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">All Users</h1>
          <p className="text-sm text-muted-foreground">
            Manage all registered users from here.
          </p>
        </div>

        <Button className="w-full sm:w-auto">
          + Add User
        </Button>
      </div>

      {/* Table Card */}
      <div className="rounded-2xl border bg-white shadow-sm overflow-hidden">
        
        {/* Responsive wrapper */}
        <div className="w-full overflow-x-auto">
          <Table className="min-w-[600px]">
            <TableHeader>
              <TableRow className="bg-muted/40">
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead className="text-right pr-6">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {users?.map((user: any) => (
                <TableRow
                  key={user._id}
                  className="hover:bg-muted/40 transition"
                >
                  <TableCell className="font-medium">
                    {user.name}
                  </TableCell>

                  <TableCell className="text-muted-foreground">
                    {user.email}
                  </TableCell>

                  <TableCell>
                    <span
                      className={`px-3 py-1 text-xs rounded-full font-medium ${
                        user.role === "admin"
                          ? "bg-red-100 text-red-600"
                          : "bg-blue-100 text-blue-600"
                      }`}
                    >
                      {user.role}
                    </span>
                  </TableCell>

                  <TableCell className="text-right pr-6">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="size-8"
                        >
                          <MoreHorizontalIcon className="w-4 h-4" />
                          <span className="sr-only">
                            Open menu
                          </span>
                        </Button>
                      </DropdownMenuTrigger>

                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          {user.role === "admin"
                            ? "Make Customer"
                            : "Make Admin"}
                        </DropdownMenuItem>

                        <DropdownMenuSeparator />

                        <DropdownMenuItem variant="destructive">
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}