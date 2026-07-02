"use client";

import { FileText, SearchCheck, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Tell Us About Your Vehicle",
    description:
      "Provide a few basic details like your ZIP code, vehicle information, and contact details to receive personalized insurance quotes.",
  },
  {
    icon: SearchCheck,
    title: "Compare Multiple Quotes",
    description:
      "We instantly compare offers from trusted insurance providers, helping you find the best coverage at the right price.",
  },
  {
    icon: ShieldCheck,
    title: "Choose & Get Covered",
    description:
      "Select the policy that fits your needs and connect directly with the insurer to complete your purchase securely.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-28 bg-white sm:py-24 py-10 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
            How It Works
          </span>

          <h2 className="mt-6 text-3xl font-bold text-slate-900 md:text-5xl">
            Get Your Insurance Quote
            <span className="text-blue-600"> in 3 Easy Steps</span>
          </h2>

          <p className="mt-6 sm:text-lg text-md leading-8 text-slate-600">
            Finding affordable auto insurance has never been easier.
            Complete a simple form, compare offers, and choose the policy
            that works best for you.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-20 grid gap-10 lg:grid-cols-3">

          {/* Desktop Connecting Line */}
          <div className="absolute left-0 right-0 top-12 hidden lg:block">
            <div className="mx-auto h-1 max-w-4xl border-t-2 border-dashed border-blue-200"></div>
          </div>

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="group relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl"
              >
                {/* Step Number */}
                <div className="absolute right-6 top-6 text-5xl font-bold text-slate-100">
                  0{index + 1}
                </div>

                {/* Icon */}
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 shadow-lg">
                  <Icon
                    className="text-white"
                    size={30}
                  />
                </div>

                {/* Content */}
                <h3 className="mt-8 text-2xl font-semibold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {step.description}
                </p>

                {/* Hover Line */}
                <div className="mt-8 h-1 w-0 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-20"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}