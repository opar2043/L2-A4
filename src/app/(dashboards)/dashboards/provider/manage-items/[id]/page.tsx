import React from "react";

interface EditItemPageProps {
  params: {
    id: string;
  };
}

export default function EditItemPage({ params }: EditItemPageProps) {
  const id = params.id;

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold">Edit Item</h1>
      <p className="mt-2 text-gray-500">Editing ID: {id}</p>
    </div>
  );
}