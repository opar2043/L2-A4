"use client";
import { useForm } from "@tanstack/react-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import * as z from "zod";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const fromSchema = z.object({
  name: z.string().min(1, "This Field is required"),
  password: z.string().min(6, "Password must be 6 character"),
email: z.string().email("Invalid email address")
});

const SimpleForm = () => {
  const router = useRouter();
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    validators: {
      onSubmit: fromSchema,
    },
    onSubmit: async ({ value }) => {
      const toastId = toast.loading("Creating User");
      try {
        const { data, error } = await authClient.signUp.email(value);
        if (error) {
          toast.error(error.message || "Something went wrong", { id: toastId });
        } else {
          toast.success("User Created Successfully", { id: toastId });
          setTimeout(() => {
            router.push("/dashboard");
          }, 1000);
        }
      } catch (error) {
        toast.error("Something went wrong", { id: toastId });
      }
    },
  });

  return (
    <div className="space-y-4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        <form.Field name="name">
          {(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid;
            return (
              <div className="space-y-2">
                <label htmlFor={field.name} className="text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <Input
                  id={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="John Doe"
                  className="w-full"
                />
                {isInvalid && field.state.meta.errors?.length > 0 && (
                  <p className="text-sm text-red-500">
                    {field.state.meta.errors[0]?.message}
                  </p>
                )}
              </div>
            );
          }}
        </form.Field>

        <form.Field name="email">
          {(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid;
            return (
              <div className="space-y-2">
                <label htmlFor={field.name} className="text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <Input
                  id={field.name}
                  type="email"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="john@example.com"
                  className="w-full"
                />
                {isInvalid && field.state.meta.errors?.length > 0 && (
                  <p className="text-sm text-red-500">
                    {field.state.meta.errors[0]?.message}
                  </p>
                )}
              </div>
            );
          }}
        </form.Field>
        <form.Field name="password">
          {(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid;
            return (
              <div className="space-y-2">
                <label htmlFor={field.name} className="text-sm font-medium text-gray-700">
                  Password
                </label>
                <Input
                  id={field.name}
                  type="password"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="••••••••"
                  className="w-full"
                />
                {isInvalid && field.state.meta.errors?.length > 0 && (
                  <p className="text-sm text-red-500">
                    {field.state.meta.errors[0]?.message}
                  </p>
                )}
              </div>
            );
          }}
        </form.Field>
        <Button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
          Create Account
        </Button>
      </form>
    </div>
  );
};

export default SimpleForm;
