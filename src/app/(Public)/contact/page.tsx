'use client'

import React from "react";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Get in Touch with FoodHub
          </h1>

          <p className="text-gray-500 max-w-2xl mx-auto">
            Have questions about your order, partnerships, or our services?
            FoodHub is here to help you discover and enjoy delicious meals with
            ease. Reach out to us anytime — our support team is always happy to
            assist.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Email */}
          <div className="border rounded-xl p-6 text-center hover:shadow-lg transition">
            <Mail className="mx-auto mb-4 text-[#F9BE5E]" size={32} />
            <h3 className="font-semibold text-lg mb-1">Email</h3>
            <p className="text-gray-500">contact@foodhub.com</p>
          </div>

          {/* Phone */}
          <div className="border rounded-xl p-6 text-center hover:shadow-lg transition">
            <Phone className="mx-auto mb-4 text-[#F9BE5E]" size={32} />
            <h3 className="font-semibold text-lg mb-1">Phone</h3>
            <p className="text-gray-500">+880 1234 567 890</p>
          </div>

          {/* Location */}
          <div className="border rounded-xl p-6 text-center hover:shadow-lg transition">
            <MapPin className="mx-auto mb-4 text-[#F9BE5E]" size={32} />
            <h3 className="font-semibold text-lg mb-1">Location</h3>
            <p className="text-gray-500">Dhaka, Bangladesh</p>
          </div>
        </div>

        {/* Social */}
        <div className="mt-14 text-center">
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>

          <div className="flex justify-center gap-6">
            <a href="#" className="p-3 rounded-full border hover:bg-[#F9BE5E] transition">
              <Instagram />
            </a>

            <a href="#" className="p-3 rounded-full border hover:bg-[#F9BE5E] transition">
              <Facebook />
            </a>

            <a href="#" className="p-3 rounded-full border hover:bg-[#F9BE5E] transition">
              <Mail />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
