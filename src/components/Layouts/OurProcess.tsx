import React from "react";
import { CheckCircle, Leaf, Truck, Coffee } from "lucide-react";

const steps = [
  {
    title: "Fresh Ingredients",
    icon: Leaf,
    description: "We source fresh vegetables, meats, and spices daily.",
  },
  {
    title: "Expert Chefs",
    icon: Coffee,
    description: "Our chefs carefully prepare each dish to perfection.",
  },
  {
    title: "Strict Hygiene",
    icon: CheckCircle,
    description: "All kitchens follow the highest cleanliness standards.",
  },
  {
    title: "Fast Delivery",
    icon: Truck,
    description: "Meals are delivered quickly while maintaining quality.",
  },
];

export default function OurProcess() {
  return (
    <section className="py-20 bg-transparent">
      <div className=" text-center px-4">
        <h2 className="text-4xl font-bold text-[#0E0E0E] mb-8">Our Process</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto text-sm md:text-base">
          From farm to plate, we carefully craft every step to ensure your meal
          is safe, fresh, and absolutely delicious.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-left">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="bg-[#FFF8F0] rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
              >
                <Icon className="text-[#F3BB58] size-6 mb-4" />
                <h3 className="font-semibold text-[#0E0E0E] mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
