import { LayoutDashboard, ClipboardList, BarChart3 } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
} from "@/components/ui/sidebar";
import Link from "next/link";

type Role = "admin" | "provider" | "customer";

type NavItem = {
  label: string;
  icon: React.ElementType;
  href: string;
};

type NavGroup = {
  title: string;
  items: NavItem[];
};

const sidebarByRole: Record<Role, NavGroup[]> = {
  admin: [
    {
      title: "Admin",
      items: [
        { label: "Dashboard", icon: LayoutDashboard, href: "/admin" },
        { label: "Users", icon: ClipboardList, href: "/admin/users" },
        { label: "Home", icon: ClipboardList, href: "/" },
      ],
    },
  ],

  provider: [
    {
      title: "Provider",
      items: [
        { label: "Dashboard", icon: LayoutDashboard, href: "/provider" },
        {
          label: "Add Product",
          icon: ClipboardList,
          href: "/provider/addproducts",
        },
        {
          label: "All Products",
          icon: BarChart3,
          href: "/provider/all-products",
        },
        { label: "Home", icon: ClipboardList, href: "/" },
      ],
    },
  ],

  customer: [
    {
      title: "Customer",
      items: [
        { label: "Dashboard", icon: LayoutDashboard, href: "/customer" },
        { label: "Orders", icon: BarChart3, href: "/customer/orders" },
        { label: "Home", icon: ClipboardList, href: "/" },
      ],
    },
  ],
};

function AppSidebar({ role }: { role: Role }) {
  const groups = sidebarByRole[role];

  return (
    <Sidebar>
      <SidebarContent>
        {groups.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>

            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton asChild>
                      <Link
                        href={item.href}
                        className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted"
                      >
                        <item.icon className="size-4" />
                        {item.label}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  );
}

export function Sidebar1({ role }: { role: Role }) {
  return (
    <SidebarProvider>
      <AppSidebar role={role} />
    </SidebarProvider>
  );
}
