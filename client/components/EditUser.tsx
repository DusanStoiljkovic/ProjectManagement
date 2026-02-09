"use client"

import { useForm, Controller } from "react-hook-form"

import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet"

import {
  Field,
  FieldLabel,
  FieldError,
} from "@/components/ui/field"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"

type EditUserForm = {
  username: string
  email: string
  phone: string
  location: string
  role: "Admin" | "User"
}

const EditUser = () => {
  const form = useForm<EditUserForm>({
    defaultValues: {
      username: "jonh.doe",
      email: "jonh.doe@gmail.com",
      phone: "+381 51231245",
      location: "Serbia",
      role: "Admin",
    },
  })

  const onSubmit = (data: EditUserForm) => {
    console.log("Updated user:", data)
    // PUT /users/:id
  }

  return (
    <SheetContent className="p-4 sm:max-w-md">
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex h-full flex-col"
      >
        <SheetHeader>
          <SheetTitle>Edit User</SheetTitle>
        </SheetHeader>

        <div className="flex-1 space-y-4 py-6">
          {/* USERNAME */}
          <Controller
            name="username"
            control={form.control}
            rules={{ required: "Username is required" }}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Username</FieldLabel>
                <Input {...field} />
                {fieldState.error && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* EMAIL */}
          <Controller
            name="email"
            control={form.control}
            rules={{
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/,
                message: "Invalid email",
              },
            }}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Email</FieldLabel>
                <Input type="email" {...field} />
                {fieldState.error && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* PHONE */}
          <Controller
            name="phone"
            control={form.control}
            render={({ field }) => (
              <Field>
                <FieldLabel>Phone</FieldLabel>
                <Input {...field} placeholder="+381..." />
              </Field>
            )}
          />

          {/* LOCATION */}
          <Controller
            name="location"
            control={form.control}
            render={({ field }) => (
              <Field>
                <FieldLabel>Location</FieldLabel>
                <Input {...field} />
              </Field>
            )}
          />

          {/* ROLE */}
          <Controller
            name="role"
            control={form.control}
            render={({ field }) => (
              <Field>
                <FieldLabel>Role</FieldLabel>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Admin">Admin</SelectItem>
                    <SelectItem value="User">User</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
            )}
          />

          {/* JOINED (READ ONLY) */}
          <Field>
            <FieldLabel>Joined on</FieldLabel>
            <Input value="2025.01.01" disabled />
          </Field>
        </div>

        <SheetFooter className="gap-2">
          <SheetClose asChild>
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </SheetClose>
          <Button type="submit">Save changes</Button>
        </SheetFooter>
      </form>
    </SheetContent>
  )
}

export default EditUser
