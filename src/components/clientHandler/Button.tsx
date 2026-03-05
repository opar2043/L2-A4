"use client";

import { toast } from "sonner";
import { Cartservice } from "../service/cart.route";
import { Menu } from "@/components/types/menu.type";

type ButtonProps = {
  item: Menu;
};

export default function Button({ item }: ButtonProps) {
  const handleAddtoCart = async (e: React.MouseEvent) => {
    e.preventDefault();

    try {
      const res = await Cartservice.postCarts(item);

      if (res) {
        toast.success("Added to cart");
      }

      console.log(item);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      onClick={handleAddtoCart}
      disabled={!item.availability}
      className={`w-full py-2 rounded-sm text-sm font-medium transition ${
        item.availability
          ? "bg-[#F9BE5E] hover:bg-[#e6ad4d] text-black"
          : "bg-gray-300 text-gray-500 cursor-not-allowed"
      }`}
    >
      Add to Cart
    </button>
  );
}