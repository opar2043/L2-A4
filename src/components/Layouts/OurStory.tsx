import React from "react";
import { Coffee, Leaf, CheckCircle, Star } from "lucide-react";

const storyPoints = [
  {
    icon: Coffee,
    title: "Passionate Chefs",
    description:
      "Our chefs craft every meal with care, creativity, and a love for food.",
  },
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    description:
      "We source only the freshest ingredients to ensure quality and taste.",
  },
  {
    icon: CheckCircle,
    title: "Hygiene & Safety",
    description:
      "Every step of our food preparation follows strict hygiene standards.",
  },
  {
    icon: Star,
    title: "Exceptional Taste",
    description:
      "We guarantee a delicious experience in every dish we serve.",
  },
];

export default function OurStory() {
  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-[#0E0E0E] mb-8">
          Our Story
        </h2>
        <p className="text-muted-foreground mb-12 text-sm md:text-base max-w-2xl mx-auto">
          At FoodHub, we are committed to delivering fresh, delicious, and safe
          meals to every customer. Our passion for quality and taste drives
          everything we do.
        </p>

        {/* Points Layout */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10">
          {storyPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex-shrink-0">
                  <Icon className="text-[#F3BB58] size-6 mt-1" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-[#0E0E0E] text-lg mb-2">
                    {point.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
