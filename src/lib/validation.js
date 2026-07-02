import { z } from "zod";

export const leadSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, "First name is required"),

  lastName: z
    .string()
    .trim()
    .min(2, "Last name is required"),

  email: z
    .string()
    .trim()
    .email("Enter a valid email address"),

  // Indian Mobile Number (10 digits, starts with 6-9)
  phone: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, "Enter a valid Indian mobile number"),

  // Indian PIN Code (6 digits)
  zipCode: z
    .string()
    .trim()
    .regex(/^[1-9][0-9]{5}$/, "Enter a valid PIN code"),

  year: z
    .string()
    .min(1, "Please select a vehicle year"),

  make: z
    .string()
    .min(1, "Please select a vehicle make"),

  model: z
    .string()
    .min(1, "Please select a vehicle model"),
});

