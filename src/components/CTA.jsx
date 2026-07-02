"use client";
import Image from "next/image";
export default function CTA() {
  const scrollToQuote = () => {
    const formSection = document.getElementById("quote-form");

    if (formSection) {
      formSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-[32px] bg-[#0F172A] px-8 py-16 md:px-16 md:py-20 shadow-2xl">

          {/* Background Decorations */}
          <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl"></div>

          <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>

          <div className="absolute inset-0 opacity-[0.05]">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                backgroundSize: "28px 28px",
              }}
            />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center">

            {/* Badge */}
            <div className="inline-flex items-center gap-3 rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-2">

              <div className="flex -space-x-3">
                <Image
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100"
                  width={32}
                  height={32}
                  alt=""
                  className="h-10 w-10 rounded-full border-2 border-white object-cover"
                />

                <Image
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100"
                    width={32}
                  height={32}
                  alt=""
                  className="h-10 w-10 rounded-full border-2 border-white object-cover"
                />

                <Image
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100"
                    width={32}
                  height={32}
                  alt=""
                  className="h-10 w-10 rounded-full border-2 border-white object-cover"
                />
              </div>

              <span className="text-sm font-medium text-slate-200">
                Trusted by <span className="text-white font-semibold">1M+ Drivers</span>
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-8 max-w-3xl text-3xl font-bold leading-tight text-white md:text-6xl">
              Start Saving on Your
              <span className="block text-blue-400">
                Auto Insurance Today
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-2xl sm:text-lg text-md leading-8 text-slate-300">
              Compare personalized quotes from trusted insurance providers in
              just a few minutes. No hidden fees. No obligation. Just better
              coverage at a better price.
            </p>

            {/* Features */}
            <div className="mt-10 flex flex-wrap justify-center gap-8 max-md:justify-start">

              <div className="flex items-center gap-2 text-slate-200">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-500">
                  ✓
                </div>

                <span>100% Free Quotes</span>
              </div>

              <div className="flex items-center gap-2 text-slate-200">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-500">
                  ✓
                </div>

                <span>Secure & Encrypted</span>
              </div>

              <div className="flex items-center gap-2 text-slate-200">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-500">
                  ✓
                </div>

                <span>Takes Less Than 2 Minutes</span>
              </div>
            </div>

            {/* Button */}
            <button
              onClick={scrollToQuote}
              className="mt-12 rounded-xl bg-blue-600 px-10 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:scale-105 shadow-xl"
            >
              Get My Free Quote
            </button>

            {/* Footer Text */}
            <p className="mt-5 text-sm text-slate-400">
              🔒 Your information is protected with bank-level encryption.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}