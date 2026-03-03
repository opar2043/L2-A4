import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  Utensils,
  ClipboardList,
  Star,
} from "lucide-react"

export const dashboardNav = {
  admin: [
    { title: "Overview", icon: LayoutDashboard, href: "/dashboard/admin" },
    { title: "Users", icon: Users, href: "/dashboard/admin/users" },
    { title: "Orders", icon: ShoppingCart, href: "/dashboard/admin/orders" },
  ],
  provider: [
    { title: "Overview", icon: LayoutDashboard, href: "/dashboard/provider" },
    { title: "Manage Menu", icon: Utensils, href: "/dashboard/provider/menu" },
    { title: "Orders", icon: ClipboardList, href: "/dashboard/provider/orders" },
  ],
  customer: [
    { title: "Overview", icon: LayoutDashboard, href: "/dashboard/customer" },
    { title: "My Orders", icon: ShoppingCart, href: "/dashboard/customer/orders" },
    { title: "Reviews", icon: Star, href: "/dashboard/customer/reviews" },
  ],
}