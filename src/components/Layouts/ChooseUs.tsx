import React from "react";
import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "Fresh Ingredients",
    description: "We use only the freshest ingredients for every meal.",
  },
  {
    title: "Trusted Chefs",
    description: "All meals are prepared by verified and experienced chefs.",
  },
  {
    title: "Hygiene & Safety",
    description: "Strict hygiene and safety standards in every step.",
  },
  {
    title: "Fast Delivery",
    description: "Get your food delivered quickly and on time.",
  },
];

export default function ChooseUs() {
  return (
    <section className="py-20 bg-[#FFF8F0]">
      <div className=" text-center px-4">
        <h2 className="text-4xl font-bold text-[#0E0E0E] mb-4">
          Why Choose FoodHub
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          We focus on quality, safety, and taste to give you the best dining
          experience.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <CheckCircle className="text-[#F3BB58] size-6 mb-3 mx-auto" />
              <h3 className="text-lg font-semibold text-[#0E0E0E] mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
