"use client";
import { Menu, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "@/components/ui/ModeToggle";
interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  className?: string;
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
    className?: string;
  };
  menu?: MenuItem[];
  auth?: {
    login: {
      title: string;
      url: string;
    };
    signup: {
      title: string;
      url: string;
    };
  };
}

const Navbar1 = ({
  menu = [
    {
      title: "About",
      url: "/about",
    },

    {
      title: "Menus",
      url: "/menu",
    },
    {
      title: "Contact",
      url: "/contact",
    },
    {
      title: "Dashboard",
      url: "/dashboards",
    },
  ],
  auth = {
    login: { title: "Login", url: "/signin" },
    signup: { title: "Sign up", url: "/register" },
  },
  className,
}: Navbar1Props) => {
  return (
    <section className={cn("py-4", className)}>
      <div className="container mx-auto">
        {/* Desktop Menu */}
        <nav className="hidden items-center justify-between lg:flex">
          <div className="flex items-center gap-6">
            {/* Logo */}

            <span className="text-xl italic textcolor font-semibold tracking-tighter">
              FOODHUB
            </span>
          </div>
          <div className="flex gap-4 items-center">
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Cart Icon */}
            <Link href="/cart" className="relative">
              <ShoppingCart className="w-5 h-5 text-black" />
              <span className="absolute -top-1.5 -right-1.5 bg-black text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                0
              </span>
            </Link>

            <button className="bgcolor text-sm font-semibold textcolor px-5 py-1.5 rounded-sm text-slate-950">
              <Link href={auth.login.url}>{auth.login.title}</Link>
            </button>

            <ModeToggle />
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden mx-auto px-3">
          <div className="flex items-center justify-between ">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <p className="textcolor font-bold">Foodhub</p>
            </div>

            <div className="flex items-center gap-3">
              <Link href="/cart" className="relative">
                <ShoppingCart className="w-5 h-5 text-black" />
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  0
                </span>
              </Link>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="size-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="overflow-y-auto">
                  <div className="flex flex-col gap-6 p-4">
                    <Accordion
                      type="single"
                      collapsible
                      className="flex w-full flex-col gap-4"
                    >
                      {menu.map((item) => renderMobileMenuItem(item))}
                    </Accordion>

                    <div className="flex flex-col gap-3">
                      <Button className="bgcolor" asChild variant="outline">
                        <Link href={auth.login.url}>{auth.login.title}</Link>
                      </Button>
                      {/* <Button asChild>
                      <Link href={auth.signup.url}>{auth.signup.title}</Link>
                    </Button> */}
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
              <ModeToggle></ModeToggle>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground"></NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <Link
        href={item.url}
        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground"
      >
        {item.title}
      </Link>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
      </AccordionItem>
    );
  }

  return (
    <Link key={item.title} href={item.url} className="text-md font-semibold">
      {item.title}
    </Link>
  );
};

export { Navbar1 };
