import React from "react";
import { Check, Clock, ShoppingCart, Star, Coffee, Home } from "lucide-react";
import Image from "next/image";

const services = [
  { icon: ShoppingCart, text: "Online Order" },
  { icon: Clock, text: "24/7 Service" },
  { icon: Home, text: "Pre-Reservation" },
  { icon: Star, text: "Organized Foodie Place" },
  { icon: Coffee, text: "Clean Kitchen" },
  { icon: Check, text: "Super Chefs" },
];

export default function RestaurantServices() {
  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 items-center gap-12">
        
        {/* Left Image */}
        <div className="relative w-full h-80 md:h-[20rem] rounded-full overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg"
            alt="Chef serving food"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Text */}
        <div>
          <h2 className="text-4xl font-bold text-[#0E0E0E] mb-4">
            We Are More Than Multiple Services
          </h2>
          <p className="text-muted-foreground mb-6 text-sm md:text-base">
            This is a type of restaurant which typically serves food and drinks,
            in addition to light refreshments such as baked goods or snacks. The
            term comes from the French word meaning food.
          </p>

          {/* Services List */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="flex items-center gap-3">
                  <div className="bg-[#F3BB58]/20 text-[#F3BB58] rounded-full p-3 flex items-center justify-center">
                    <Icon className="size-5" />
                  </div>
                  <span className="text-[#0E0E0E] font-medium">{service.text}</span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
