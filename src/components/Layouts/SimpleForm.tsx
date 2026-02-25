// components/SimpleForm.tsx
"use client";

import { useForm, Field } from "@tanstack/react-form";

export default function SimpleForm() {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log("Form submitted:", values);
     
    },
  });

  console.log(form);

  return (
    <form onSubmit={form.handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto p-4">
      {/* Pass form to Field */}
      <Field name="name" form={form}>
        {({ value, setValue }) => (
          <input
            type="text"
            placeholder="Your Name"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="border p-2 rounded"
          />
        )}
      </Field>

      <Field name="email" form={form}>
        {({ value, setValue }) => (
          <input
            type="email"
            placeholder="Your Email"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="border p-2 rounded"
          />
        )}
      </Field>

      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
        Submit
      </button>
    </form>
  );
}