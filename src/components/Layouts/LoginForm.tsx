"use client";
import { useForm } from "@tanstack/react-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import * as z from "zod";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";

const fromSchema = z.object({
  password: z.string().min(6, "Password must be 6 character"),
email: z.string().email("Invalid email address")
});

const LoginForm = () => {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    validators: {
      onSubmit: fromSchema,
    },
    onSubmit: async ({ value }) => {
      const toastId = toast.loading("Loging User");
      try {
        const { data, error } = await authClient.signIn.email(value);
        toast.success("User Logged In Succesfully" , {id : toastId})
      } catch (error) {
        toast.error("Something went wrong" , {id: toastId})
      }
    },
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        <form.Field name="email">
          {(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid;
            return (
              <div className="space-y-2">
                <label htmlFor={field.name}>Email</label>
                <Input
                  id={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
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
                <label htmlFor={field.name}>Password</label>
                <Input
                  id={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
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
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default LoginForm;
