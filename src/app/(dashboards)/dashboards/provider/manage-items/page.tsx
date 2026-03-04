import { menuService } from "@/components/service/menu.route";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoreHorizontalIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DeleteMenuButton from "./DeleteButtun";

const ManageItemsPage = async () => {
  const items = await menuService.getmenus();

  return (
    <div className="w-full min-h-screen bg-white p-4 sm:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-black">
            All Menu Items
          </h1>
          <p className="text-sm text-gray-500">
            Manage all menu items from here.
          </p>
        </div>

        <Link href="/dashboards/provider/add-items">
          <Button className="w-full sm:w-auto bg-black text-white hover:bg-black/90">
            + Add Item
          </Button>
        </Link>
      </div>

      {/* Table Card */}
      <div className="rounded-2xl border border-black/10 bg-white shadow-sm overflow-hidden">
        <div className="w-full overflow-x-auto">
          <Table className="min-w-[750px]">
            <TableHeader>
              <TableRow className="bg-black/5">
                <TableHead>Item</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Price</TableHead>
                <TableHead className="text-right pr-6">Actions</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {items?.length > 0 ? (
                items.map((item: any) => (
                  <TableRow
                    key={item._id || item.id}
                    className="hover:bg-black/5 transition"
                  >
                    {/* Item Name + Image */}
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-3">
                        {item.image && (
                          <div className="relative w-10 h-10 rounded-md overflow-hidden border">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                        <span>{item.name || "Not Given"}</span>
                      </div>
                    </TableCell>

                    {/* Description */}
                    <TableCell className="text-gray-600 max-w-xs truncate">
                      {item.description
                        ? item.description.slice(0, 40)
                        : "No Description"}
                    </TableCell>

                    {/* Price */}
                    <TableCell className="font-semibold text-black">
                      ৳ {item.price || "0"}
                    </TableCell>

                    {/* Actions */}
                    <TableCell className="text-right pr-6">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="size-8"
                          >
                            <MoreHorizontalIcon className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent align="end">
                          <DropdownMenuItem asChild>
                            <Link href={`/dashboards/manage-items/${item._id}`}>
                              Edit
                            </Link>
                          </DropdownMenuItem>

                          <DropdownMenuSeparator />

                          <DropdownMenuItem>
                            <DeleteMenuButton id={item._id} />
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={4}
                    className="text-center py-10 text-gray-500"
                  >
                    No menu items found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ManageItemsPage;
