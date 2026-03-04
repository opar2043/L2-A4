"use client";

import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import * as z from "zod";
import { Input } from "../ui/input";
import React from "react";

/* ---------------- Schema ---------------- */
const formSchema = z.object({
  name: z.string().min(3, "Name is required"),
  description: z.string().min(6, "Description is required"),
  price: z.coerce.number().min(1, "Price must be greater than 0"),
  ingredients: z.string().min(3, "Ingredients are required"),
  image: z.string().url("Image must be a valid URL"),
});

/* ---------------- Component ---------------- */
const AddItemForm = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      description: "",
      price: "",
      ingredients: "",
      image: "",
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      const toastId = toast.loading("Adding menu...");
      try {
        console.log(value); // send to backend
        toast.success("Menu added successfully", { id: toastId });
        form.reset();
      } catch (error) {
        toast.error("Something went wrong", { id: toastId });
      }
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
      className="space-y-4 max-w-full"
    >
      {/* Name */}
      <form.Field name="name">
        {(field) => (
          <div>
            <label className="block mb-1">Name</label>
            <Input
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
            />
            {field.state.meta.errors?.[0] && (
              <p className="text-sm text-red-500">
                {field.state.meta.errors[0].message}
              </p>
            )}
          </div>
        )}
      </form.Field>

      {/* Description */}
      <form.Field name="description">
        {(field) => (
          <div>
            <label className="block mb-1">Description</label>
            <Input
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
            />
            {field.state.meta.errors?.[0] && (
              <p className="text-sm text-red-500">
                {field.state.meta.errors[0].message}
              </p>
            )}
          </div>
        )}
      </form.Field>

      {/* Price */}
      <form.Field name="price">
        {(field) => (
          <div>
            <label className="block mb-1">Price</label>
            <Input
              type="number"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
            />
            {field.state.meta.errors?.[0] && (
              <p className="text-sm text-red-500">
                {field.state.meta.errors[0].message}
              </p>
            )}
          </div>
        )}
      </form.Field>

      {/* Ingredients */}
      <form.Field name="ingredients">
        {(field) => (
          <div>
            <label className="block mb-1">Ingredients</label>
            <Input
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
            />
            {field.state.meta.errors?.[0] && (
              <p className="text-sm text-red-500">
                {field.state.meta.errors[0].message}
              </p>
            )}
          </div>
        )}
      </form.Field>

      {/* Image */}
      <form.Field name="image">
        {(field) => (
          <div>
            <label className="block mb-1">Image URL</label>
            <Input
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
            />
            {field.state.meta.errors?.[0] && (
              <p className="text-sm text-red-500">
                {field.state.meta.errors[0].message}
              </p>
            )}
          </div>
        )}
      </form.Field>

      {/* Submit */}
      <form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
        {([canSubmit, isSubmitting]) => (
          <button
            type="submit"
            disabled={!canSubmit}
            className="w-full bg-black text-white py-2 rounded disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : "Add Item"}
          </button>
        )}
      </form.Subscribe>
    </form>
  );
};

export default AddItemForm;