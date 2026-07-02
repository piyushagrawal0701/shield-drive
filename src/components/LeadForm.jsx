"use client";

import { Car, Mail, Phone, MapPin, User } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { leadSchema } from "@/lib/validation";
import { toast } from "react-hot-toast";

export default function LeadForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(leadSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message);
      }

      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success("Form Submitted");

      // Clear all form fields
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <div className="rounded-3xl bg-white p-6 md:p-8 shadow-2xl border border-slate-200">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">
          Get Your Free Quote
        </h2>

        <p className="text-slate-500 mt-2 text-sm">
          Takes less than 2 minutes to complete.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Names */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <div className="relative">
              <User
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                {...register("firstName")}
                placeholder="First Name"
                className="w-full rounded-xl border border-slate-300 pl-10 pr-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            {errors.firstName && (
              <p className="mt-1 text-sm text-red-500">
                {errors.firstName.message}
              </p>
            )}
          </div>

          <div>
            <input
              {...register("lastName")}
              placeholder="Last Name"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
            />

            {errors.lastName && (
              <p className="mt-1 text-sm text-red-500">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        {/* Email */}
        <div>
          <div className="relative">
            <Mail
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              {...register("email")}
              placeholder="Email Address"
              className="w-full rounded-xl border border-slate-300 pl-10 pr-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Phone + Zip */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <div className="relative">
              <Phone
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="tel"
                {...register("phone")}
                placeholder="Mobile Number"
                maxLength={10}
                className="w-full rounded-xl border border-slate-300 pl-10 pr-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            {errors.phone && (
              <p className="mt-1 text-sm text-red-500">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div>
            <div className="relative">
              <MapPin
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                {...register("zipCode")}
                placeholder="PIN Code"
                maxLength={6}
                className="w-full rounded-xl border border-slate-300 pl-10 pr-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            {errors.zipCode && (
              <p className="mt-1 text-sm text-red-500">
                {errors.zipCode.message}
              </p>
            )}
          </div>
        </div>

        {/* Vehicle Section */}
        <div className="pt-2">
          <h3 className="font-semibold text-slate-800 mb-3">
            Vehicle Information
          </h3>

          <div className="grid gap-4">
            <select
              {...register("year")}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
            >
              <option value="">Select Vehicle Year</option>

              {Array.from({ length: 15 }, (_, i) => 2026 - i).map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>

            {errors.year && (
              <p className="text-sm text-red-500">{errors.year.message}</p>
            )}

            <select
              {...register("make")}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
            >
              <option value="">Select Vehicle Make</option>

              <option value="Toyota">Toyota</option>

              <option value="Honda">Honda</option>

              <option value="Ford">Ford</option>
            </select>

            {errors.make && (
              <p className="text-sm text-red-500">{errors.make.message}</p>
            )}

            <select
              {...register("model")}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
            >
              <option value="">Select Vehicle Model</option>

              <option value="Camry">Camry</option>

              <option value="Corolla">Corolla</option>

              <option value="Civic">Civic</option>
            </select>

            {errors.model && (
              <p className="text-sm text-red-500">{errors.model.message}</p>
            )}
          </div>
        </div>

        <button
          disabled={isSubmitting}
          className="w-full rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50"
        >
          {isSubmitting ? "Getting Quote..." : "Get My Free Quote"}
        </button>

        <p className="text-center text-xs text-slate-500">
          🔒 Your information is encrypted and secure.
        </p>
      </form>
    </div>
  );
}
