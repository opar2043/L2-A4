"use client";

import { menuService } from "@/components/service/menu.route";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Swal from "sweetalert2";

export default function DeleteMenuButton({ id }: { id: string }) {
  const router = useRouter();

  const handleDelete = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This item will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#000000",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      background: "#ffffff",
      color: "#000000",
    });

    if (!result.isConfirmed) return;

    const toastId = toast.loading("Deleting item...");

    try {
      await menuService.deleteMenu(id);

      toast.success("Item deleted successfully ✅", {
        id: toastId,
      });

      router.refresh();
    } catch (error) {
      toast.error("Failed to delete item ❌", {
        id: toastId,
      });
    }
  };

  return (
    <Button
      variant="ghost"
      className="text-red-600 hover:text-red-700"
      onClick={handleDelete}
    >
      Delete
    </Button>
  );
}