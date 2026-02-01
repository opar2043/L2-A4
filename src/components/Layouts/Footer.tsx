'use client'

import React from "react";
import Link from "next/link";
import { Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8 text-gray-700 dark:text-gray-300">

        {/* Brand & About */}
        <div>
          <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">FoodHub</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Fresh food you want, delivered safely and quickly to your doorstep.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-4">
            <Link href="mailto:contact@dinneroclock.nl" className="p-3 rounded-full bg-gradient-to-br from-yellow-200 to-yellow-400 text-yellow-600 hover:scale-110 hover:bg-yellow-500 hover:text-white transition-transform duration-300 shadow-md">
              <Mail size={20} />
            </Link>
            <Link href="#" className="p-3 rounded-full bg-gradient-to-br from-pink-200 to-pink-400 text-pink-600 hover:scale-110 hover:bg-pink-500 hover:text-white transition-transform duration-300 shadow-md">
              <Instagram size={20} />
            </Link>
            <Link href="#" className="p-3 rounded-full bg-gradient-to-br from-blue-200 to-blue-400 text-blue-600 hover:scale-110 hover:bg-blue-500 hover:text-white transition-transform duration-300 shadow-md">
              <Facebook size={20} />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3 text-gray-900 dark:text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li><Link href="#" className="hover:text-yellow-400 dark:hover:text-yellow-500 transition">Explore</Link></li>
            <li><Link href="#" className="hover:text-yellow-400 dark:hover:text-yellow-500 transition">Over Ons</Link></li>
            <li><Link href="#" className="hover:text-yellow-400 dark:hover:text-yellow-500 transition">Contact</Link></li>
            <li><Link href="#" className="hover:text-yellow-400 dark:hover:text-yellow-500 transition">Plannen</Link></li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h3 className="font-semibold mb-3 text-gray-900 dark:text-white">Legal</h3>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li><Link href="#" className="hover:text-yellow-400 dark:hover:text-yellow-500 transition">Algemene Voorwaarden</Link></li>
            <li><Link href="#" className="hover:text-yellow-400 dark:hover:text-yellow-500 transition">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-yellow-400 dark:hover:text-yellow-500 transition">Refund Policy</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-3 text-gray-900 dark:text-white">Contact Us</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">contact@dinneroclock.nl</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">+31 685 4019 88</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Delft City, Netherlands</p>

          {/* Payment */}
          <div className="mt-4">
            <h4 className="text-sm font-medium mb-2 text-gray-900 dark:text-white">We Accept</h4>
            <div className="flex gap-2 text-sm text-gray-600 dark:text-gray-400">
              <span className="px-2 py-1 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition">Credit Card</span>
              <span className="px-2 py-1 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition">Apple Pay</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 dark:border-gray-700 mt-6 py-4 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} FoodHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
