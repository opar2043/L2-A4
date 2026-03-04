

import AddItemForm from "@/components/Layouts/AddItemForm";
import React from "react";

export default function AddItemsPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl">
        
        {/* Card Container */}
        <div className="bg-white border border-black/10 shadow-xl rounded-2xl p-8">
          
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-black tracking-tight">
              Add New Menu Item
            </h1>
            <p className="text-gray-500 mt-2 text-sm">
              Fill in the details below to add a new item to your menu.
            </p>
          </div>

          {/* Divider */}
          <div className="h-px bg-black/10 mb-8" />

          {/* Form */}
          <AddItemForm />

        </div>
      </div>
    </div>
  );
}