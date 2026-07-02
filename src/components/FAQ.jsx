"use client";

import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How does ShieldDrive work?",
      answer:
        "Simply enter your basic information and vehicle details to compare personalized auto insurance quotes from trusted providers. The process takes less than two minutes and is completely free.",
    },
    {
      question: "Is comparing insurance quotes really free?",
      answer:
        "Yes. Comparing quotes through ShieldDrive is 100% free. There are no hidden fees or obligations to purchase a policy.",
    },
    {
      question: "Will comparing quotes affect my credit score?",
      answer:
        "No. Requesting insurance quotes uses a soft inquiry and will not affect your credit score in any way.",
    },
    {
      question: "How long does it take to receive my quotes?",
      answer:
        "Most customers receive personalized insurance quotes within just a few minutes after submitting their information.",
    },
    {
      question: "Is my personal information secure?",
      answer:
        "Absolutely. We use industry-standard encryption and secure data practices to keep your personal information protected at all times.",
    },
    {
      question: "Can I compare quotes from multiple insurance companies?",
      answer:
        "Yes. ShieldDrive helps you compare quotes from multiple trusted insurance providers so you can choose the best coverage at the best price.",
    },
  ];

  return (
    <section className="bg-slate-50 py-20 px-4 scroll-mt-28" id="faq">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-block rounded-full bg-blue-100 text-blue-700 px-4 py-2 text-sm font-semibold">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Everything You Need to Know
          </h2>

          <p className="mt-4 text-slate-600 max-w-2xl mx-auto leading-7">
            Have questions about comparing auto insurance quotes? We&apos;ve answered
            the most common questions to help you get started with confidence.
          </p>
        </div>

        {/* FAQ Cards */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between text-left p-6"
              >
                <h3 className="text-lg font-semibold text-slate-900 pr-5">
                  {faq.question}
                </h3>

                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M4.5 7.2L9 11.7L13.5 7.2"
                      stroke="#2563EB"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-48 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <div className="border-t border-slate-100 pt-4">
                    <p className="text-slate-600 leading-7">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
