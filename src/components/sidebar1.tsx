import {
  BarChart3,
  ClipboardList,
  HelpCircle,
  LayoutDashboard,
  Settings,
} from "lucide-react";

import { cn } from "@/lib/utils";



import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";

type NavItem = {
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  href: string;
  isActive?: boolean;
};

type NavGroup = {
  title: string;
  items: NavItem[];
};

type SidebarData = {
  logo: {
    src: string;
    alt: string;
    title: string;
    description: string;
  };
  navGroups: NavGroup[];
  footerGroup: NavGroup;
};

const sidebarData: SidebarData = {
  logo: {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblocks-logo.svg",
    alt: "Food Hub",
    title: "Food Hub",
    description: "Make your order quickly",
  },
  navGroups: [
    {
      title: "Overview",
      items: [
        {
          label: "Dashboard",
          icon: LayoutDashboard,
          href: "#",
          isActive: true,
        },
        { label: "Tasks", icon: ClipboardList, href: "#" },
        { label: "Roadmap", icon: BarChart3, href: "#" },
      ],
    },
  ],
  footerGroup: {
    title: "Support",
    items: [
      { label: "Help Center", icon: HelpCircle, href: "#" },
      { label: "Settings", icon: Settings, href: "#" },
    ],
  },
};

const sidebarByRole = {
  admin: [
    {
      title: "Admin",
      items: [
        { label: "Dashboard", icon: LayoutDashboard, href: "/admin" },
        { label: "Users", icon: ClipboardList, href: "/admin/users" },
      ],
    },
  ],

  provider: [
    {
      title: "Provider",
      items: [
        { label: "Dashboard", icon: LayoutDashboard, href: "/provider" },
        { label: "Tasks", icon: ClipboardList, href: "/provider/tasks" },
      ],
    },
  ],

  customer: [
    {
      title: "Customer",
      items: [
        { label: "Dashboard", icon: LayoutDashboard, href: "/customer" },
        { label: "Orders", icon: BarChart3, href: "/customer/orders" },
      ],
    },
  ],
};


const SidebarLogo = ({ logo }: { logo: SidebarData["logo"] }) => {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton size="lg">
          <div className="flex aspect-square size-8 items-center justify-center rounded-sm bg-primary">
            <img
              src={logo.src}
              alt={logo.alt}
              className="size-6 text-primary-foreground invert dark:invert-0"
            />
          </div>
          <div className="flex flex-col gap-0.5 leading-none">
            <span className="font-medium">{logo.title}</span>
            <span className="text-xs text-muted-foreground">
              {logo.description}
            </span>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

const AppSidebar = ({
  role,
  ...props
}: React.ComponentProps<typeof Sidebar> & {
  role: "admin" | "provider" | "customer";
}) => {
  const navGroups = sidebarByRole[role];

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarLogo logo={sidebarData.logo} />
      </SidebarHeader>

      <SidebarContent>
        {navGroups.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>

            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton asChild>
                      <a href={item.href} className="flex gap-2">
                        <item.icon className="size-4" />
                        {item.label}
                      </a>
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
};


interface Sidebar1Props {
  className?: string;
  role: "admin" | "provider" | "customer";
}

const Sidebar1 = ({ className, role }: Sidebar1Props) => {
  return (
    <SidebarProvider className={cn(className)}>
      <AppSidebar role={role} />
    </SidebarProvider>
  );
};

export { Sidebar1 };
