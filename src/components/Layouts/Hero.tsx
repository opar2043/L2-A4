import { Search, ArrowRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface Hero1Props {
  className?: string;
}

const Hero1 = ({ className }: Hero1Props) => {
  return (
    <section className={cn("py-24", className)}>
      <div className="container mx-auto">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          
          {/* Left Content */}
          <div className="flex flex-col gap-5 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold ">
              Fresh & Delicious Food Delivered To You
            </h1>

            <p className="text-sm text-muted-foreground max-w-md mx-auto lg:mx-0">
              Discover quality meals prepared with fresh ingredients, strict
              hygiene, and exceptional taste — crafted to satisfy every craving.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              {/* Explore Button */}
              <Button
                className="bg-[#F3BB58] text-black hover:bg-[#e5ab3f]"
              >
                Explore Menu
              </Button>

              {/* Search Button */}
              <Button variant="outline" className="gap-2">
                Search Food
                <Search className="size-4" />
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full aspect-video rounded-xl overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/10254479/pexels-photo-10254479.jpeg"
              alt="Delicious restaurant food"
              fill
              priority
              className="object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export { Hero1 };
