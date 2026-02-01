import React from "react";

export default function aboutuspage() {
  return  <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About FoodHub</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Serving fresh, safe, and delicious food you can trust — every single time.
        </p>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold">Who We Are</h2>
          <p className="text-muted-foreground">
            FoodHub is a modern food service platform dedicated to connecting people
            with high-quality meals prepared by trusted kitchens and food partners.
            We believe food should not only taste great but also be safe, fresh,
            and nourishing.
          </p>

          <h2 className="text-2xl font-semibold">Quality You Can Taste</h2>
          <p className="text-muted-foreground">
            Every meal served through FoodHub goes through strict quality checks.
            We work only with verified food providers who use fresh ingredients,
            maintain hygienic kitchens, and follow proper cooking standards to
            ensure great taste and consistency.
          </p>

          <h2 className="text-2xl font-semibold">Food Safety First</h2>
          <p className="text-muted-foreground">
            Your health matters to us. That’s why we prioritize food safety at
            every step — from sourcing ingredients to preparation and packaging.
            Our partners follow cleanliness guidelines and safe handling practices
            so you can enjoy your meals with confidence.
          </p>
        </div>

        {/* Highlight Box */}
        <div className="bg-muted rounded-xl p-8 space-y-6">
          <h3 className="text-xl font-semibold">Why Choose FoodHub?</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li>✔ Fresh and high-quality ingredients</li>
            <li>✔ Trusted and verified food partners</li>
            <li>✔ Strict hygiene and safety standards</li>
            <li>✔ Delicious meals at affordable prices</li>
            <li>✔ Customer satisfaction is our priority</li>
          </ul>
        </div>
      </div>
    </div>;
}
